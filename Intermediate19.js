function addTogether() {
    const [first, second] = arguments
    if (Number.isInteger(first) == false){
      return undefined; 
    }
    if (second == undefined){
      return (second) => addTogether(first,second)
    }
    if (Number.isInteger(second) == false){
      return undefined; 
    }
    return first + second
  }
  
  addTogether(2,3);