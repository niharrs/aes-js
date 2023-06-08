const CryptoJS = require("crypto-js");

function encryptAES256CBC(plainText, keyText, ivText) {
  const key = CryptoJS.enc.Utf8.parse(keyText);
  const iv = CryptoJS.enc.Utf8.parse(ivText);

  const encrypted = CryptoJS.AES.encrypt(plainText, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return encrypted.toString();
}

// Example usage
const plaintext = "hello world";
const key = "kiKvZjkpOawwNAOUvEN2DwwbSLR1pwcR"; // 256-bit key in plain text
const iv = "ahimWBNTpP3cqy9g"; // 16-character IV in plain text

const encryptedText = encryptAES256CBC(plaintext, key, iv);
console.log(encryptedText);
