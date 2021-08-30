function findElement(arr, func) {
    let myArr = 0;
  
    for (let i = 0; i < arr.length; i++) {
      myArr = arr[i];
      if (func(myArr)) {
        return myArr;
      } 
    }
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);