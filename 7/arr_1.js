function removeElement(arr, item) {
  const index = arr.indexOf(item);
  if (index != -1) arr.splice(index, 1);

  return arr;
}

const array_1 = [1, 2, 3, 4, 5, 6, 7];
console.log(removeElement(array_1, 6));

const array_2 = ["Kyiv", "Beijing", "Lima"];
console.log(removeElement(array_2, "Lima"));
