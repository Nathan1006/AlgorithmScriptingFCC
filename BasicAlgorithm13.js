function bouncer(arr) {
    let myArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]){
        myArr.push(arr[i]);
      }
    }
    return myArr;
  }
  
  
  bouncer([7, "ate", "", false, 9]);