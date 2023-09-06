import {encode, decode} from 'msgpack-lite'

function obfuscate(bytes) {
    let lastByte = 0;
    const result = new Uint8Array(bytes.length);

    for (let i = 0; i < bytes.length; i++) {
        let curByte = bytes[i];
        let tmpByte = curByte;
        curByte ^= lastByte;
        lastByte = tmpByte;
        result[i] = curByte;
    }

    // 反转数组
    result.reverse();

    // 再次执行混淆操作
    lastByte = 0;
    for (let i = 0; i < result.length; i++) {
        let curByte = result[i];
        let tmpByte = curByte;
        curByte ^= lastByte;
        lastByte = tmpByte;
        result[i] = curByte;
    }

    // 转换为二进制字符串，确保每个字节有 8 位
    const binaryString = result.reduce((acc, curByte) => {
        const byteBinaryString = curByte.toString(2).padStart(8, '0');
        return acc + byteBinaryString;
    }, '');

    // 将二进制字符串转换回 Uint8Array
    const resultBytes = new Uint8Array(binaryString.length / 8);
    for (let i = 0; i < binaryString.length; i += 8) {
        const byteBinaryString = binaryString.substr(i, 8);
        const byteValue = parseInt(byteBinaryString, 2);
        resultBytes[i / 8] = byteValue;
    }

    return resultBytes;
}

function getRandomNon32HexCharacter() {
    const alphabetCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZwxyz"; // 包含英文字母的字符串
    const randomIndex = Math.floor(Math.random() * alphabetCharacters.length);
    return alphabetCharacters.charAt(randomIndex);
}

function deobfuscate(bytes) {
    let lastByte = 0;
    const result = new Uint8Array(bytes.length);

    for (let i = 0; i < bytes.length; i++) {
        let curByte = bytes[i];
        curByte ^= lastByte;
        lastByte = curByte;
        result[i] = curByte;
    }

    // 反转数组
    result.reverse();

    // 再次执行反混淆操作
    lastByte = 0;
    for (let i = 0; i < result.length; i++) {
        let curByte = result[i];
        curByte ^= lastByte;
        lastByte = curByte;
        result[i] = curByte;
    }

    // 转换为二进制字符串，确保每个字节有 8 位
    const binaryString = result.reduce((acc, curByte) => {
        const byteBinaryString = curByte.toString(2).padStart(8, '0');
        return acc + byteBinaryString;
    }, '');

    // 将二进制字符串转换回 Uint8Array
    const resultBytes = new Uint8Array(binaryString.length / 8);
    for (let i = 0; i < binaryString.length; i += 8) {
        const byteBinaryString = binaryString.substr(i, 8);
        const byteValue = parseInt(byteBinaryString, 2);
        resultBytes[i / 8] = byteValue;
    }

    return resultBytes;
}

export const read = (v) => decode(deobfuscate(v.split(/[^0-9a-v]+/).map(item => parseInt(item, 32))))
export const write = (v) => Array.from(obfuscate(new Uint8Array(encode(v)))).map(item => item.toString(32)).map((item, index, array) => index !== array.length - 1 ? item + getRandomNon32HexCharacter() : item).join('')
