import * as RNFS from 'react-native-fs';

export async function writeFile(url, data, encode = 'utf8') {
    let path = RNFS.DocumentDirectoryPath  + url;
    console.log(path);

    // write the file
    let result = await RNFS.writeFile(path, data, encode)
    return result;
}

export async function appendFile(url, data, encode = 'utf8', onSuccess, onError) {
    let path = RNFS.DocumentDirectoryPath  + url;

    // append the file
    let result = RNFS.appendFile(path, data, encode)
    return result;
}

export async function readFile(url, encode = 'utf8') {
    let path = RNFS.DocumentDirectoryPath  + url;
    console.log(path);
    // read the file
    let result = await RNFS.readFile(path, encode)
    return result;
}


export async function deleteFile(url) {
    let path = RNFS.DocumentDirectoryPath  + url;

    // delete the file
    let result = await RNFS.unlink(path);
    return result;
}

export async function exists(url) {
    let path = RNFS.DocumentDirectoryPath  + url;
    // check the file
    let result = await RNFS.exists(path);
    return result;
}