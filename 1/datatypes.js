//Типи даних (1)

const randomArray = ['cash', true, 1000, 'more', 1001.01, 50n, 'dollaryki', 'thanks', -2.01983, false, 'bye'];

let hash = {
    string: 0,
    boolean: 0,
    number: 0,
    bigint: 0
}  

for (const element of randomArray) {
    hash[typeof element]++;
}
console.dir(hash);

//Типи даних (2)

hash = {};

for (const element of randomArray) {
   const type = typeof element;
   if (!hash[type]) {hash[type] = 0};
   hash[type]++;
}

console.dir(hash);

