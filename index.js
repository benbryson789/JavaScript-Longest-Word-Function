function LongestWord(sen) {
 
    const getSplitWord = sen.split(" ");
    let getLongestWord = '';
    
    for (let i = 0; i < getSplitWord.length; i++){
      if (getSplitWord[i].length > getLongestWord.length)
        getLongestWord = getSplitWord[i]
    }
    
    return getLongestWord;
   
    
  }
  
  console.log(LongestWord("fun&!! time"))//fun&!!
  console.log(LongestWord("I love dogs"))//love
  
  // keep this function call here 
  //console.log(LongestWord(readline()));