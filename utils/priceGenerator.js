function isDayTime(intialTime) {
  const hours = new Date().getHours();
  const dayTime = intialTime > 6 && hours < 20;
  return dayTime ? "day" : "night";
}

exports.calculateTime = function (model, time) {
  let price;
  const getTimeNow = new Date();
  const timeNow = ((getTimeNow.getHours() * 60) + getTimeNow.getMinutes());
  const hours = time.split(":")[0];
  const timeThen = parseInt((hours * 60) + time.split(":")[1]);
  const timeSpent = timeNow - timeThen;
  const timeOfDay = isDayTime(hours);
  console.log(timeNow, timeThen)
  console.log(typeof(timeThen))
  console.log(typeof(timeNow))
  console.log("timeSpent is here",typeof(timeSpent), timeSpent)

  if (model === "trucks") {
    if (timeSpent <= 180) {
      price = 2000;
      return price;
    } else {
      timeOfDay ? (price = 5000) : (price = 10000);
      return price;
    }
  }
};
