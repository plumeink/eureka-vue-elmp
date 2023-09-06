import {decode, encode} from 'msgpack-lite'
import seedrandom from 'seedrandom'

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
        resultBytes[i / 8] = parseInt(byteBinaryString, 2);
    }

    return resultBytes;
}

// function shuffleString(inputString) {
//     // 将字符串转换为字符数组
//     const charArray = inputString.split('');
//
//     // 使用 Fisher-Yates 随机洗牌算法
//     for (let i = charArray.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
//     }
//
//     // 将字符数组重新组合为字符串
//     const shuffledString = charArray.join('');
//     localStorage.setItem("seed", shuffledString);
//     return shuffledString;
// }


function getRandomNon32HexCharacter(index) {
    const seed = localStorage.getItem("seed");
    if (seed !== null) {
        const randomString = generateRandomStringWithSeed(30, seed);
        return randomString.charAt(index % 30);
    } else {
        const localStorageKeys = Object.keys(localStorage);
        for (const key of localStorageKeys) {
            localStorage.removeItem(key);
        }
        const minLength = 10;
        const maxLength = 28;
        const randomLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
        const se = generateRandomString(randomLength);
        const randomString = generateRandomStringWithSeed(30, se);
        console.log(se)

        console.log(randomString)
        return randomString.charAt(index % 30);
    }

}

function generateRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_/";
    const randomStringArray = [];

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomChar = characters.charAt(randomIndex);
        randomStringArray.push(randomChar);
    }
    localStorage.setItem("seed", randomStringArray.join(''));
    return randomStringArray.join('');
}

function generateRandomStringWithSeed(length, seed) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZwxyz';
    const rng = seedrandom(seed);
    let randomString = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(rng() * characters.length);
        randomString += characters.charAt(randomIndex);
    }

    return randomString;
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
        resultBytes[i / 8] = parseInt(byteBinaryString, 2);
    }

    return resultBytes;
}

export const read = (v) => v ? decode(deobfuscate(v.split(/[^0-9a-v]+/).map(item => parseInt(item, 32)))) : null
export const write = (v) => Array.from(obfuscate(new Uint8Array(encode(v)))).map(item => item.toString(32)).map((item, index, array) => index !== array.length - 1 ? item + getRandomNon32HexCharacter(index) : item).join('')
