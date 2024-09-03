const zipName = "firebase_data_connect_latest.zip";
const decompress = require('decompress');
const https = require("https");
const fs = require("fs");
const path = require('path');
const os = require('os');

// Resolve the tilde to the user's home directory
const homeDir = os.homedir();

// Example path with tilde
const tildePath = '~/.cache/firebase/sdk/dart/';

// Replace the tilde with the home directory
const absolutePath = tildePath.replace('~', homeDir);
const cachePath = path.resolve(absolutePath);
fs.mkdirSync(cachePath, { recursive: true });
const fullZipPath = cachePath + zipName;

const fullOutputPath = path.resolve('./dart_movie_app');
function getLatestStorageZip() {
    const url = `https://firebasestorage.googleapis.com/v0/b/getting-started-dart-storage.appspot.com/o/${zipName}?alt=media`;
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            const writeStream = fs.createWriteStream(fullZipPath);
            res.pipe(writeStream);
            writeStream.on('error', reject);

            writeStream.on("finish", (err) => {
                writeStream.close();
                console.log("Download Completed!");
                resolve();
            })
        });
    });
}
function unzip() {
    console.log('unzipping')
    return decompress(fullZipPath, fullOutputPath);
}
getLatestStorageZip().then(unzip);