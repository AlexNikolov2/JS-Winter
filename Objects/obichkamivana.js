function cleverLily(input) {
  age = Number(input[0]);
  priceWasher = Number(input[1]);
  priceToy = Number(input[2]);

  let suma = 10;

  for (let i = 1; i < age; i = i + 1) {
    if (i % 2 === 0) {
      suma = suma + (i - 2) * 10; // check this
    } else {
      suma = suma + priceToy; // check this
    }
    console.log(suma);
  }

  suma = suma - (Math.floor(age / 2) + 1);

  if (suma >= priceWasher) {
    let m = suma - priceWasher;
    console.log(`Yes! ${m.toFixed(2)}`);
  } else if (suma < priceWasher) {
    let n = priceWasher - suma;
    console.log(`No! ${n.toFixed(2)}`);
  }
}

cleverLily(["10", "170.00", "6"]);
