function myReplace(str, before, after) {
    let myArr = str.split(' ')
    let oldWord = before.split('')
    let newWord = after.split('')
      console.log(oldWord)
    if (oldWord[0] == oldWord[0].toUpperCase()){
      newWord[0] = newWord[0].toUpperCase()
      console.log()
    } else if (oldWord[0] == oldWord[0].toLowerCase()){
      newWord[0] = newWord[0].toLowerCase()
      console.log()
    } 
  
    for (let i = 0; i < myArr.length; i++){
      if (myArr[i] == before){
        myArr[i] = newWord.join('')
      }
    }
    console.log(myArr.join(' '))
    return myArr.join(' ');
  }
  
  myReplace("His name is Tom", "Tom", "john")