// var today = new Date();
// // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// // const time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds()
// function getTime() {
//     const time = new Date()
//     return (time.getHours()+':'+time.getMinutes())
// }
// console.log(today.toDateString())
function calculateTime(time) {
  let price;
  const getTimeNow = new Date();
  console.log(getTimeNow.getHours())
  console.log(getTimeNow.getMinutes())
  const timeNow = ((getTimeNow.getHours() * 60) +  getTimeNow.getMinutes());

  const timeUsed = timeNow - time;
  if (timeUsed <= 60){
    price = 4000
  }
  return price;
}
console.log(calculateTime(14))
