const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

function compose(...fns) {
  const handlers = [];

  function composed(x) {
    try {
      for (const fn of fns) {
        if (typeof fn !== "function") throw new Error("Not a function");
      }

      return fns.reduceRight((a, fn) => fn(a), x);
    } catch (error) {
      for (const handler of handlers) handler(error);
    }
  }

  composed.on = (event, handler) => {
    if (event === "error") handlers.push(handler);
  };

  return composed;
}

const f1 = compose(inc, inc);
const f2 = compose(inc, 7, cube);

f2.on("error", (e) => console.log("Womp womp you have an error:", e.message));

console.log(f1(7)); //9
console.log(f2(7)); //Womp womp you have an error: Not a function
                    //undefined
