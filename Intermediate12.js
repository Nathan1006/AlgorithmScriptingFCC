function sumFibs(num) {
    let myFib = 0
    let number = 1
    let lastNumber = 0
    while (number <= num) {
      if (number % 2 !== 0) {
        myFib += number;
      }
      number += lastNumber;
      lastNumber = number - lastNumber;
    }
    console.log(myFib)
    return myFib;
  }
  
  sumFibs(4);