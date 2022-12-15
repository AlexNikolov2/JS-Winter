function photoDay(photoTime, scenesNum, scenesTime) {
  let setup = photoTime * 0.15;

  let totaltime = scenesNum * scenesTime + setup;

  if (totaltime > photoTime) {
    console.log(
      `Time is up! To complete the movie you need ${Math.round(
        totaltime - photoTime
      )} minutes.`
    );
  } else {
    console.log(
      `You managed to finish the movie on time! You have ${Math.round(
        photoTime - totaltime
      )} minutes left!`
    );
  }
}
photoDay(120, 10, 11);
