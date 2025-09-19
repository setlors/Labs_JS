//Скалярні типи та посилання (1)

let inc = (n) => n + 1;

const a = 5;
const b = inc(a);
console.dir({a, b});

//Скалярні типи та посилання(2)

inc = (Num) => Num.n++;

const obj = { n: 5 } 
inc(obj);
console.dir(obj); 