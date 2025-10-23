//Ітерування циклами

//1
function sumOg(...args) {
    let resultik = 0;

    for(let i = 0; i < args.length; i++) {
        resultik += args[i];
    }
    return resultik;
}
console.log(sumOg(1, 2, 10));

//2 
function sumNotOg(...args) {
    let resultik = 0;

    for(let arg of args) {
        resultik += arg;
    }
    return resultik;
}
console.log(sumNotOg(40, -12, -15));

//3
function sumBroskin(...args) {
    let resultik = 0;
    let i = 0;
    while(i < args.length) {
        resultik += args[i];
        i++;
    }
    return resultik;
}
console.log(sumBroskin(6, 1, 1, 1, 1, 1, 1, 1));

//4
function sumMeow(...args) {
    let resultik = 0;
    let i = 0;
    do {
        resultik += args[i];
        i++;
    }
    while(i < args.length);
    return resultik;
}
console.log(sumMeow(213, -200));


//5
function sumBoo(...args) {
    return args.reduce((acc, current) => acc + current);
}
console.log(sumBoo(999, -133, -300, -566, 13));