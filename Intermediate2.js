function diffArray(arr1, arr2) {
    let array1 = arr1.sort()
    let array2 = arr2.sort()
    var newArr = []
  
    for (let i = 0; i < array1.length; i++){
       for (let o = 0; o < array2.length; o++){
          if (array1[i] === array2[o]){
             delete array1[i]
             delete array2[o]
          } 
       }
    } 
    var newArr = array1.concat(array2);
    console.log(newArr.filter(Boolean))
    return newArr.filter(Boolean);
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);