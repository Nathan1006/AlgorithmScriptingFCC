// Everything commented out was part of the first solution I attempted to utilize

function mutation(arr) {
    const check = arr[0].toLowerCase().split('')
    const needed = arr[1].toLowerCase().split('')
    // var checked = 0
    /* for (let i = 0; i < check.length; i++){
      for (let o = 0; o < needed.length; o++){
        if (needed[o] == check[i]){
          checked++
        } 
      }
    }
    */
    for (let i = 0; i < needed.length; i++){
      let found = false
      for (let o = 0; o < check.length; o++){
        if (check[o] == needed[i]){
          found = true
        }
      }
      if (found == false){
        return false
      } 
    }
    return true
  }
    /* if (checked === needed.length){
      return true
    } else {
      return false
    }
  */
  mutation(["hello", "hey"]);