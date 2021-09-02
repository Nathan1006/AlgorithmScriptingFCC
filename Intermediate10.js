function uniteUnique(arr) {
    let myArr = arr
    console.log(myArr)
    for (let i = 1; i < arguments.length; i++){
      for (let o = 0; o <= arguments[i].length; o++){
        for (let l = 0; l <= myArr.length; l++){
          if (arguments[i][o] === myArr[l]){
            arguments[i].pop(arguments[i][o])
          }
        }
      }
      myArr.push(arguments[i])
    }
    console.log(myArr)
    return arr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  uniteUnique([1, 2, 3], [5, 2, 1])