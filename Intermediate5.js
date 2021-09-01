function spinalCase(str) {
  let myArr = str.split('')
  myArr[0] = myArr[0].toLowerCase()
  for (let i = 0; i < str.length; i++){
    if (
      myArr[i] == ' '
      || myArr[i] == '_' 
      || myArr[i] == '-'
    ){
      myArr.splice(i, 1, '-')
    } else if (
      myArr[i] == myArr[i].toUpperCase()
      && myArr[i - 1] != '-' 
    ){ 
      myArr.splice(i, 0, '-')
    }
  }
  str = myArr.join('').toLowerCase()
  console.log(myArr.join('').toLowerCase())
  return myArr.join('').toLowerCase();
}

spinalCase("AllThe-small Things")