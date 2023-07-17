//const tmp = require('tmp');
const fs = require('fs');
const path = require('path');
const sftp = require('ssh2-sftp-client');
const dotenv = require('dotenv');

dotenv.config();
const parsedURL = new URL(process.env.GRC_URL);
const port = parsedURL.port || 2222;
const { host, username, password } = parsedURL;

const sftp_config = {
    host: host,
    port: port,
    username: username,
    password: password
};

const client = new sftp();

async function getAllFileDetails(remoteDir) {


    try {
        await client.connect(sftp_config);
        const fileDetails = await traverseDirectory(client, remoteDir);
        const jsonContent = JSON.stringify(fileDetails, null, 2);

        // Cria uma pasta temporária
        //const tmpDir = tmp.dirSync({ unsafeCleanup: true });

        // Define o caminho do arquivo de saída como um arquivo dentro da pasta temporária
        const outputFilePath = path.join('./', 'grc_repo.json');
        console.log(outputFilePath)

        fs.writeFileSync(outputFilePath, jsonContent);
        console.log(`File details saved to ${outputFilePath}`);
    } catch (err) {
        console.error(err);
    } finally {
        await client.end();
        //tmpDir.removeCallback(); // Remove a pasta temporária após o uso
    }
}

async function traverseDirectory(client, directory) {
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
                    // Adicione outras propriedades que desejar obter
                };
                fileDetails.push(fileDetail);
            }
        }
    }

    return fileDetails;
}

// Uso da função
const remoteDirectory = process.env.GRC_DIR; // Diretório remoto a percorrer

getAllFileDetails(remoteDirectory);
