
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(random(0, 28));


function generateKey(length, characters) {
    let key = '';
    for (let i = 0; i < length; i++) {
        const stuff = Math.floor(Math.random() * characters.length);
        key += characters[stuff];
    }
    return key;
}
    
const characters = 'qeurSitpqLfkg58302jAnbmxYz';
console.log(generateKey(11, characters));