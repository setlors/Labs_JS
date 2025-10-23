//Ітерування у двовимірному масиві

function max(arr) {
    let setMax = 0;
    for(let row of arr) {
        for(let element of row) {
            if(element > setMax) {
                setMax = element;
            }
        }
    } 
    return setMax;
}

let matrix = max([
    [11, 22, 3],
    [42, 5, 67],
    [7, 18, 9]
])
console.log(matrix);