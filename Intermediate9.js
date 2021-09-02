function fearNotLetter(str) {
    let alph = "abcdefghijklmnopqrstuvwxyz"
    let myArr = str.split('')
    let missing = ''
    for (let i = 0; i < myArr.length; i++){
      if (myArr[i] !== alph[i]){
        myArr.splice(i, 0, alph[i])
        missing = alph[i]
        console.log(missing)
      } else if (myArr[i] == alph[i] && i == 25){
        console.log('undefined')
        return undefined
      }
    }
    return missing;
  }
  fearNotLetter("abcdefghijklmnopqrstuvwxyz")
  fearNotLetter("abce");