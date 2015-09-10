var piglatin = function(inputStr) {
  var vowels = "a e i o u";
  var words = inputStr.split(" ");
  for (var i = 0; i < words.length; i++) {
    var wordLength = words[i].length;
    if (wordLength >= 1) {
      var firstChar = (words[i][0]).toLowerCase();
      if (vowels.includes(firstChar)) {
        words[i] = words[i] + "ay";
        continue;
      }
      //consonant check next letter too
      else if (wordLength > 1 ) {
        var secChar = words[i][1].toLowerCase();
        if (vowels.includes(secChar)) {
          words[i] = words[i].slice(1) + firstChar + "ay";
        } else {
          //consonant check third letter
          if (wordLength > 2) {
            var thirdChar = words[i][2].toLowerCase();
            if (vowels.includes(thirdChar)) {
              words[i] = words[i].slice(2) + firstChar + secChar + "ay";
            } else {
              words[i] = words[i].slice(3)  + firstChar + secChar + thirdChar + "ay";
            }
          }
        }
      }
    }
  }
  var result = words.join(" ");
  return result;
};
