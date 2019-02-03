export function numberWithCommas(x , step = 3) {

  const regStr = `\\B(?=(\\d{${step}})+(?!\\d))`

  console.log('reg' , regStr)

  const reg = new RegExp(regStr , 'g')
  // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return x.toString().replace(reg, ",");
}


