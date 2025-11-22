function removeElement(arr, ...items) {
  for (const item of items) {
    const index = arr.indexOf(item);
    if (index != -1) arr.splice(index, 1);
  }

  return arr;
}

const array_1 = [1, 2, 3, 4, 5, 6, 7];
console.log(removeElement(array_1, 1, 2, 3, 4, 5));

const array_2 = ["Kyiv", "Beijing", "Lima"];
console.log(removeElement(array_2, "Beijing", "Lima"));
