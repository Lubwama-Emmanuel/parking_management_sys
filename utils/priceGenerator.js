exports.calculateTime = function (time) {
  let price;
  const getTimeNow = new Date();
  const timeNow = getTimeNow.getHours() * 60 + getTimeNow.getMinutes();
  const timeUsed = timeNow - time;

  if (timeUsed <= 60) {
    price = 4000;
    console.log(price);
  } else {
    price = 1000;
    console.log(price);
  }
  return price;
};
