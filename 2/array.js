//Колекції (масив)

const phoneBook = [
    { name: 'Polinka', phone: '+380638080333' },
    { name: 'Katy', phone: '+380986380333' },
    { name: 'Mr. Qi', phone: '+380666080333' }
]

const findPhoneByName = (findName) => {
    for (const {name, phone} of phoneBook) {
        if (findName === name) console.log(phone);
    }
}

findPhoneByName('Katy');
findPhoneByName('Polinka');
findPhoneByName('Mr. Qi');




