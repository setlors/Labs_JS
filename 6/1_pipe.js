const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

function pipe(...fns) {
  for (const fn of fns) {
    if (typeof fn !== "function") throw new Error("Not a function");
  }
  return (x) => fns.reduce((a, fn) => fn(a), x);
}

let f = pipe(inc, twice, cube);
console.log(f(5)); //1728

f = pipe(inc, inc);
console.log(f(7)); //9

f = pipe(inc, 7, cube); //ERROR
