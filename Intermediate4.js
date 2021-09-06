function whatIsInAName(collection, source) {
    var myArr = []
    let propsFound = 0
  
    // Only change code below this line
    for (let i = 0; i < collection.length; i++){
      propsFound = 0
      for (let key in source){
        if (
          (collection[i].hasOwnProperty(key))
          && collection[i][key] == source[key]
          ){
            propsFound++
          }
        if(propsFound == Object.keys(source).length){
          myArr.push(collection[i]);
        }
      }
    }
}  