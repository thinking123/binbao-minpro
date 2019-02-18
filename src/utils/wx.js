export async function getStorage(key) {
  const res = await wepy.getStorage(key)
  console.log('getStorage' , key , res)
  return res
}


export async function setStorage(key , data) {
  await wepy.setStorage(key , data)
  console.log('setStorage' , key , data)
}
