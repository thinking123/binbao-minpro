export function numberWithCommas(x , step = 3) {

  const regStr = `\\B(?=(\\d{${step}})+(?!\\d))`

  // console.log('reg' , regStr)

  const reg = new RegExp(regStr , 'g')
  // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return x.toString().replace(reg, ",");
}


export function isEmpty(str) {
  // if(typeof str !== 'string' || !str){
  //   return false
  // }
  str = str.trim()
  return str.length === 0
}
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rand =  Math.floor(Math.random() * (max - min + 1)) + min
  console.log('rand' , rand)
  return rand
}


export function isMorning() {
  const hour = (new Date()).getHours()
  //5 - 7
  return hour >= 5 && hour <= 7
}
