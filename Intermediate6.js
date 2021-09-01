function translatePigLatin(str) {
    var myStr = str;
    var vowels = /[aeiou]/gi;
  
    if (myStr[0].match(vowels)) {
      myStr += "way";
    } else if (str.match(vowels) === null) {
  
      myStr += "ay";
    } else {
  
      var vowelIndice = str.indexOf(str.match(vowels)[0]);
  
      myStr = myStr.substr(vowelIndice) + myStr.substr(0, vowelIndice) + "ay";
    }
    return myStr
  }
  translatePigLatin("glove")