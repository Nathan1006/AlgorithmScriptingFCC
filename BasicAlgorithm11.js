function titleCase(str) {
    var myArr = str.toLowerCase().split('')
    myArr[0] = myArr[0].toUpperCase()
    for (let i = 0; i < myArr.length; i++){
      if (myArr[i] === ' '){
        let j = i + 1
        myArr[j] = myArr[j].toUpperCase()
      }
    }
    console.log(myArr.join(''));
    return myArr.join('')
  }
  
  titleCase("I'm a little tea pot");