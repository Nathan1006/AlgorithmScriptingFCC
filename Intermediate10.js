function uniteUnique(arr) {
    let myArr = []
    let argument = [...arguments]
  
    for (let i = 0; i < argument.length; i++){
      for (let o = 0; o < argument[i].length; o++){
        if (!myArr.includes(argument[i][o])){
          myArr.push(argument[i][o])
        }
      }
    }
    console.log(myArr)
    return myArr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  uniteUnique([1, 2, 3], [5, 2, 1])