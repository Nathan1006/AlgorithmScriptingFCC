function largestOfFour(arr) {
    let largest = [];
    for (let i = 0; i < arr.length; i++) {
      let biggest = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > biggest) {
          biggest = arr[i][j];
        }
      }
      largest[i] = biggest;
    }
  
    return largest;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);