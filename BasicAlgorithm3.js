function factorialize(num) {
    for ( var factorial = 1; num > 0; num--){
      factorial *= num
    }
    return factorial
  }
  
  factorialize(5);