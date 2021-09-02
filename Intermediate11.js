function convertHTML(str) {
    let myArr = str.split('')
    console.log(myArr)
    for (let i = 0; i < myArr.length; i++) {
      switch (myArr[i]) {
        case '&':
          myArr[i] = '&amp;';
          break
        case '>':
          myArr[i] = '&gt;';
          break
        case '<':
          myArr[i] = '&lt;';
          break
        case "'": 
          myArr[i] = '&apos;';
          break
        case '"':
          myArr[i] = '&quot;'
          break
      }
    }
    console.log(myArr.join(''))
    return myArr.join('');
  }
  
  convertHTML("Dolce & Gabbana");