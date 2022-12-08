function clock() {
  let date;

  setInterval(() => {
    console.log(
      new Date().toLocaleTimeString("bg", { timeZone: "Europe/Sofia" })
    );
  }, 1000);
}
clock();
