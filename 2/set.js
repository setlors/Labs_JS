
const phoneBook = {
    Polinka: '+380638080333',
    Katy: '+380986380333',
    'Mr. Qi': '+380666080333'
}

const findPhoneByName = (name) => {
    return phoneBook[name]; 
}

console.log(findPhoneByName('Mr. Qi'));
console.log(findPhoneByName('Polinka'));
console.log(findPhoneByName('Katy'));

