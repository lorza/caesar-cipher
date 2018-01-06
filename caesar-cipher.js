var shift = function(str, a) {
	if(a < 0) {
  	return shift(str, a + 26);
  }
  
  var output = "";
  
  for(var i=0; i < str.length; i++) {
		var char = str[i]
    
    // check if character a letter
    if(char.match(/[a-z]/i)) {
    	var unicode = str.charCodeAt(i);
      
      if((unicode >= 65) && (unicode <=90)) {
      	char = String.fromCharCode(((code - 65 + a) % 26) + 65);
      }
      else if((unicode >= 97) && (unicode <=122)) {
				char = String.fromCharCode(((unicode -97 + a) % 26) + 97);
      }
      
      output += char;
    }
  }
  console.log(output);
  return output;
}

shift("christian", 3);