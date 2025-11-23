function unique(array) {
  const result = [];
  for (const el of array) {
    if (!result.includes(el)) result.push(el);
  }
  return result;
}

console.log(unique([2, 1, 1, 3, 2]));
console.log(unique(["top", "bottom", "top", "left"]));
