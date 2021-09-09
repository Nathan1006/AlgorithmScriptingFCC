function orbitalPeriod(arr) {
    var GM = 398600.4418
    var earthRadius = 6367.4447
    
    for (let i in arr) {
      var orbitsLengthPower3 = Math.pow((arr[i].avgAlt + earthRadius), 3)
      
      var rightHand = Math.pow((orbitsLengthPower3 / GM), 0.5)

      var orbitalPer = Math.round(2 * Math.PI * rightHand)

      arr[i] = {name: arr[i].name, orbitalPeriod: orbitalPer}
    }
    return arr;
  }
  
  orbitalPeriod([{name : "sutnik", avgAlt : 35873.5553}]);