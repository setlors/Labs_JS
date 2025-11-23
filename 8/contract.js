function contract(fn, ...types) {
  return function (...args) {
    const arg = types.slice(0, -1);
    const res = types[types.length - 1];

    if (args.length !== arg.length)
      throw new TypeError(`Expected number of arguments: ${arg.length}`);

    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] !== arg[i].name.toLowerCase())
        throw new TypeError("Argument type is incorrect");
    }

    const result = fn(...args);

    if (typeof result !== res.name.toLowerCase())
      throw new TypeError("Result type is incorrect");

    return result;
  };
}

//Testing

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.dir(addNumbers(2, 3));

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.dir(concatStrings("Hello ", "world!"));
