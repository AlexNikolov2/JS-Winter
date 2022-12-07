function pairing(arr) {
  for (const array of arr) {
    const [key, value] = array;
    let obj = { key, value };
    console.log(obj);
  }
}
pairing([
  ["a", 1],
  ["b", 2],
]);
