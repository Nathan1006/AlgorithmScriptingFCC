function steamrollArray(arr) {
    let myArr = []
  
    for (let i = 0; i < arr.length; i++){
      if (Array.isArray(arr[i])){
        myArr.push(...steamrollArray(arr[i]))
      } else {
        myArr.push(arr[i])
      }
    }
  
    return myArr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);