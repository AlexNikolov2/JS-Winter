function forloop(arr) {
  let orange = 0;
  let red = 0;
  let blue = 0;
  let green = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "blue") {
      blue++;
    }
    if (arr[i] == "orange") {
      orange++;
    }
    if (arr[i] == "red") {
      red++;
    }
    if (arr[i] == "green") {
      green++;
    }
  }
  console.log("Red eggs: " + red);
  console.log("Orange eggs: " + orange);
  console.log("Blue eggs: " + blue);
  console.log("Green eggs: " + green);
}
forloop([7, "orange", "blue", "green", "green", "blue", "red", "green"]);
