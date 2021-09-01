function destroyer(arr) {
    let targets = Array.from(arguments).slice(1)
  
    for (let i = 0; i < arr.length; i++){
      for (let o = 0; o < targets.length; o++){
        if (targets[o] == arr[i]){
          delete arr[i]
        }
      }
    }
  
    console.log(arr.filter(Boolean))
    return arr.filter(Boolean)
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);