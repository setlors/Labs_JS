function seq(...funcs) {
  const chain = [...funcs];

  function check(arg) {
    if (typeof arg === "function") {
      chain.push(arg);
      return check;
    }
    return chain.reduceRight((a, b) => b(a), arg);
  }
  return check;
}

console.log(seq((x) => x + 7)((x) => x * 2)(5));
console.log(seq((x) => x * 2)((x) => x + 7)(5));
console.log(seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7));
