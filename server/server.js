const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const sftp = require('ssh2-sftp-client');
const os = require('os');

dotenv.config();
const app = express();

app.use(cors());

const parsedURL = new URL(process.env.GRC_URL);
const port = parsedURL.port || 2222;
const { host, username, password } = parsedURL;

/**
 * @constant sftpConfig
 * @description Configuração do SFTP
 */
const sftpConfig = {
    host: host,
    port: port,
    username: username,
    password: password,
    // debug: console.log
};

/**
 * @Route /api
 * @description Rota de teste
 */

app.get('/api', (req, res) => {
    res.json({ message: 'Hello World' })
})




/**
 * @Route /root_ftp
 * @description Obtém os ficheiros de uma diretoria do servidor SFTP
 */

app.get('/root_ftp', async (req, res) => {
    const pathDir = process.env.GRC_DIR;
    const currentDir = path.join(pathDir, req.query.path || '');
    const client = new sftp();
    //teste
    console.log(`Listing ${currentDir} ...`);

    await client.connect(sftpConfig);
    try {
        const files = await client.list(currentDir);
        res.json(files);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting data from SFTP server');
    } finally {
        await client.end();
    }
});

/**
 * @Route /single
 * @description Transfere um ficheiro do servidor SFTP para o cliente
 */

app.get('/single', async (req, res) => {
    console.log("Downloading...")
    const pathDir = process.env.GRC_DIR;
    const remoteFile = path.join(pathDir, req.query.path);
    const localFile = path.join(os.homedir(), 'Downloads', path.basename(remoteFile));

    const client = new sftp();

    await client.connect(sftpConfig);
    try {
        await client.get(remoteFile, localFile);
        res.download(localFile);
        console.log("Downloaded")
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting data from SFTP server');
    } finally {
        await client.end();
    }
});

/**
 * @Route /stations
 * @description Obtém as estações disponíveis no servidor SFTP
*/

app.get('/stations', (req, res) => {
    const client = new sftp();
    const regex = /\b[A-Z0-9]{9}\b/g;

    client.connect(sftpConfig)
        .then(() => {
            return client.get('/media/NAS/grc_data/reports/stations.txt');
        })
        .then(data => {
            const fileContent = data.toString();
            const matches = fileContent.match(regex);
            res.send(matches);
        })
        .catch(err => {
            console.error(err.message);
            res.status(500).send('Error getting data from SFTP server');
        })
});

/**
 * @description Inicia o servidor na porta 3001
 */

const server_port = process.env.SERVER_PORT || 3001;
app.listen(server_port, () => console.log(`Server listening on port ${server_port} `))
