function difference(arr1, arr2) {
  const final = [];
  for (const el of arr1) {
    if (!arr2.includes(el)) final.push(el);
  }
  return final;
}

const first = [7, -2, 10, 5, 0];
const second = [0, 10];
console.log(difference(first, second));
