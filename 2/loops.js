//Цикли (1)

const range = (start, end) => {
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}
console.log(range(15, 30));

//Цикли (2)

const rangeOdd = (start, end) => {
    let array = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) continue;
        array.push(i); 
    }
    return array;
}
console.log(rangeOdd(15, 30));