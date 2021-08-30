function findLongestWordLength(str) {
    let splitting = str.split(' ');
    let longestLength = 0;
  
    for (let i = 0; i < splitting.length; i++) {
      if (splitting[i].length > longestLength) {
        longestLength = splitting[i].length;
      }
    }
  
    return longestLength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");