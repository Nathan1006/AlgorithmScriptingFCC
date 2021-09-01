function sumAll(arr) {
    arr.sort(function(a, b){ return a - b})
    let sum = 0
    let numbers = arr[0]
    while (numbers <= arr[1]){
      sum = sum + 
      numbers++
    }
    console.log(sum)
    return sum;
  }
  
  sumAll([1, 4]);