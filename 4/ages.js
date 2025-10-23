//Ітерування об'єктів-довідників

function ages(people) {
    let age = {};
    for(let person in people) {
    age[person] = people[person].died - people[person].born;
}
return age;
}

const info = {
    Monroe: { born: 1926, died: 1962 }, 
    Dimitrescu: { born: 1914, died: 2021}, 
    Morgan: { born: 1863, died: 1899}
}

console.log(ages(info));
