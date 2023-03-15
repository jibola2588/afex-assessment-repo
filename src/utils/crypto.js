import CryptoJS from 'crypto-js';

const secretKey = process.env.key;


export const decryptData = (encryptedMessage) => {
    return CryptoJS.AES.decrypt(encryptedMessage, secretKey).toString(CryptoJS.enc.Utf8);
}

export const    encryptData = (message) => { 
        return   CryptoJS.AES.encrypt(message, secretKey).toString();
}
