//const tmp = require('tmp');
const fs = require('fs');
const path = require('path');
const sftp = require('ssh2-sftp-client');
const dotenv = require('dotenv');

dotenv.config();
const parsedURL = new URL(process.env.GRC_URL);
const port = parsedURL.port || 2222;
const { host, username, password } = parsedURL;

/**
 * @constant sftp_config
 * @description Configuração do SFTP
 */
const sftp_config = {
    host: host,
    port: port,
    username: username,
    password: password
};
/**
 * @constant client
 * @description Criação do cliente SFTP
 */
const client = new sftp();

/**
 * @function getAllFileDetails
 * @description Obtém os detalhes de todos os ficheiros de uma diretória e guarda num ficheiro JSON
 */

async function getAllFileDetails(remoteDir) {


    try {
        await client.connect(sftp_config);
        const fileDetails = await traverseDirectory(client, remoteDir);
        const jsonContent = JSON.stringify(fileDetails, null, 2);

        const outputFilePath = path.join('./', 'grc_repo.json');
        console.log(outputFilePath)

        fs.writeFileSync(outputFilePath, jsonContent);
        console.log(`File details saved to ${outputFilePath}`);
    } catch (err) {
        console.error(err);
    } finally {
        await client.end();
    }
}
/**
 * @function throughDirectory
 * @description Percorre o diretório recursivamente e retorna um array de objetos com os detalhes de cada arquivo
 */
async function throughDirectory(client, directory) {
    const fileDetails = [];
    const stack = [directory];

    while (stack.length > 0) {
        const currentDir = stack.pop();
        const files = await client.list(currentDir);

        for (const file of files) {
            const filePath = path.join(currentDir, file.name);

            if (file.type === 'd') {
                stack.push(filePath);
                console.log(`Listing ${filePath} ...`);
            } else {
                const fileDetail = {
                    name: file.name,
                    path: filePath,
                    size: file.size,
                    modifiedTime: file.modifyTime,
                    description: file.description,
                };
                fileDetails.push(fileDetail);
            }
        }
    }

    return fileDetails;
}

const remoteDirectory = process.env.GRC_DIR;

getAllFileDetails(remoteDirectory);
