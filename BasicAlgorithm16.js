function chunkArrayInGroups(arr, size) {
    let myArr = []
    for (let i = 0; i < arr.length; i += size){
      myArr.push(arr.slice(i, i + size))
    }
    return myArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);