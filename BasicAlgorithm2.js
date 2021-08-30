function reverseString(str) {
    let myStr = ""
    for (let i = str.length - 1; i >= 0; i--){
      myStr += str[i]
    }
    return myStr;
  }
  
  reverseString("hello");