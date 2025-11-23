function contract(fn, ...types) {
  return function (...args) {
    const argTypes = types.slice(0, -1);
    const resType = types[types.length - 1];

    if (args.length !== argTypes.length)
      throw new TypeError(`Expected number of arguments: ${argTypes.length}`);
    
    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] !== argTypes[i].name.toLowerCase())
        throw new TypeError("Argument type is incorrect");
    }

    const result = fn(...args);

    if (typeof result !== resType.name.toLowerCase())
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
