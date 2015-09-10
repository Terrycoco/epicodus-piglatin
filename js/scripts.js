var piglatin = function(inputStr) {
  var words = inputStr.split(" ");
  for (var i = 0; i < words.length; i++) {
    debugger
    var wordStart = getWordStart(words[i]);

    words[i] = words[i].slice(wordStart.length) +  wordStart + "ay";
  }
  var result = words.join(" ");
  return result;
};

var isVowel = function(letter) {
  letter = letter.toLowerCase();
  return ("a e i o u").includes(letter);
};

var getWordStart = function(word) {
  switch (word.length) {
  case 0:
    return false;
    break;
  case 1:
    return word;
    break;
  case 2:
    if (isVowel(word[0])) {
      return "";
    } else {
      return word[0];
    }
    break;
  default:  //3 or more letters
    if (isVowel(word[0])) { //starts with vowel
      return "";
    } else {  //starts with consonant
      if (isVowel(word[1])) {
        if (word.slice(0,2) === "qu") {
          return "qu";
        } else {
          return word[0];
        }
      } else {  //next letter is consonant too
        if (isVowel(word[2])) {
          return word.slice(0,2);
        } else {
          return word.slice(0,3);
        }
      }
    }
    break;
  }
};
