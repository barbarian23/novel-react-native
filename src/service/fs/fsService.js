import * as RNFS from 'react-native-fs';

export function writeFile(url, data, encode = 'utf8', onSuccess, onError) {
    let path = RNFS.DocumentDirectoryPath  + url;
    console.log(path);

    // write the file
    RNFS.writeFile(path, data, encode)
        .then(res => {
            onSuccess(res);
        })
        .catch(err => {
            onError(err)
        });
}

export function appendFile(url, data, encode = 'utf8', onSuccess, onError) {
    let path = RNFS.DocumentDirectoryPath  + url;

    // append the file
    RNFS.readFile(path, data, encode)
        .then(res => {
            onSuccess(res);
        })
        .catch(err => {
            onError(err)
        });
}

export function readFile(url, encode = 'utf8', onSuccess, onError) {
    let path = RNFS.DocumentDirectoryPath  + url;
    console.log(path);
    // read the file
    RNFS.readFile(path, encode)
        .then(res => {
            onSuccess(res);
        })
        .catch(err => {
            onError(err)
        });
}


export function deleteFile(url, onSuccess, onError) {
    let path = RNFS.DocumentDirectoryPath  + url;

    // delete the file
    RNFS.unlink(path)
        .then(res => {
            onSuccess(res);
        })
        .catch(err => {
            onError(err)
        });
}

export function exists(url, onSuccess, onError) {
    let path = RNFS.DocumentDirectoryPath  + url;
    // check the file
    RNFS.exists(path)
        .then(res => {
            onSuccess(res);
        })
        .catch(err => {
            onError(err)
        });
}