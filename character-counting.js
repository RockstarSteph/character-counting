
//var ourStr = result["userinput"];


function countLetters (str) {
  var result = {};
  var ourStr = str.split(" ").join("").split("");
  //console.log(ourStr);
  for (i=0; i<ourStr.length; i++){
    var letter = ourStr[i];
    // push this value into our result objec?

    if (result[letter]) {
      result[letter] += 1
    } else {
      result[letter] = 1;
    }
  }

//result.forEach(function(el, i)){
//}

//result["i"] = "number of counts"

//for ( result in )
return result;
}

console.log(countLetters("lighthouse in the house"));
// when we call the function it should return an object with each letter of str and their count

// to add key to obj "person" person["phoneNumbers"] = ["514-333-9999", ""];
