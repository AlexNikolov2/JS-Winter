function last(arr, num) {
  if (num == null) {
    console.log(arr.pop());
  } else {
    console.log(arr.slice(-num));
  }
}
last([7, 9, 0, -2]);
last([7, 9, 0, -2], 3);
last([7, 9, 0, -2], 6);
