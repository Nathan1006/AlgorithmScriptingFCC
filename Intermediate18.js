function truthCheck(collection, pre) {
  const num = collection.length
  let trues = 0
  for (let i = 0; i < collection.length; i++){
    for (let property in collection[i]){
      //console.log(collection[i][property])
      if (
        property == pre 
        && collection[i][property]
      ){ 
        trues++
        console.log(trues)
      }
    }
  } 
  console.log(trues)
  if (trues == num){
    return true 
  } else {
    return false
  }
}
 
truthCheck([{"single": "yes"}], "single")
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")