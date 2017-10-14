function decod(input)
{
input = input.toLowerCase();
var run = 0;
var len = input.length;
var buildEncrypt = "";
while(run < len){
	var letter = input.substring(run,run+1);
	if(letter == "lb"){
  	buildEncrypt += "a";
  }
  if(letter == "lc"){
  	buildEncrypt += "b";
  }
  if(letter == "ld"){
  	buildEncrypt += "c";
  }
  if(letter == "le"){
  	buildEncrypt += "d";
  }
  if(letter == "lf"){
  	buildEncrypt += "e";
  }
  if(letter == "lg"){
  	buildEncrypt += "f";
  }
  if(letter == "lh"){
  	buildEncrypt += "g";
  }
  if(letter == "li"){
  	buildEncrypt += "h";
  }
  if(letter == "lj"){
  	buildEncrypt += "i";
  }
  if(letter == "lk"){
  	buildEncrypt += "j";
  }
  if(letter == "ll"){
  	buildEncrypt += "k";
  }
  if(letter == "lm"){
  	buildEncrypt += "l";
  }
  if(letter == "ln"){
  	buildEncrypt += "m";
  }
  if(letter == "lo"){
  	buildEncrypt += "n";
  }
  if(letter == "lp"){
  	buildEncrypt += "o";
  }
  if(letter == "lq"){
  	buildEncrypt += "p";
  }
  if(letter == "lr"){
  	buildEncrypt += "q";
  }
  if(letter == "ls"){
  	buildEncrypt += "r";
  }
  if(letter == "lt"){
  	buildEncrypt += "s";
  }
  if(letter == "lu"){
  	buildEncrypt += "t";
  }
  if(letter == "lv"){
  	buildEncrypt += "u";
  }
  if(letter == "lw"){
  	buildEncrypt += "v";
  }
  if(letter == "lx"){
  	buildEncrypt += "w";
  }
  if(letter == "ly"){
  	buildEncrypt += "x";
  }
  if(letter == "lz"){
  	buildEncrypt += "y";
  }
  if(letter == "la"){
  	buildEncrypt += "z";
  }
  
  //Uppercase
  if(letter == "ub"){
  	buildEncrypt += "A";
  }
  if(letter == "uc"){
  	buildEncrypt += "B";
  }
  if(letter == "ud"){
  	buildEncrypt += "C";
  }
  if(letter == "ue"){
  	buildEncrypt += "D";
  }
  if(letter == "uf"){
  	buildEncrypt += "E";
  }
  if(letter == "ug"){
  	buildEncrypt += "F";
  }
  if(letter == "uh"){
  	buildEncrypt += "G";
  }
  if(letter == "ui"){
  	buildEncrypt += "H";
  }
  if(letter == "uj"){
  	buildEncrypt += "I";
  }
  if(letter == "uk"){
  	buildEncrypt += "J";
  }
  if(letter == "ul"){
  	buildEncrypt += "K";
  }
  if(letter == "um"){
  	buildEncrypt += "L";
  }
  if(letter == "un"){
  	buildEncrypt += "M";
  }
  if(letter == "uo"){
  	buildEncrypt += "N";
  }
  if(letter == "up"){
  	buildEncrypt += "O";
  }
  if(letter == "uq"){
  	buildEncrypt += "P";
  }
  if(letter == "ur"){
  	buildEncrypt += "Q";
  }
  if(letter == "us"){
  	buildEncrypt += "R";
  }
  if(letter == "ut"){
  	buildEncrypt += "S";
  }
  if(letter == "uu"){
  	buildEncrypt += "T";
  }
  if(letter == "uv"){
  	buildEncrypt += "U";
  }
  if(letter == "uw"){
  	buildEncrypt += "V";
  }
  if(letter == "ux"){
  	buildEncrypt += "W";
  }
  if(letter == "uy"){
  	buildEncrypt += "X";
  }
  if(letter == "uz"){
  	buildEncrypt += "Y";
  }
  if(letter == "ua"){
  	buildEncrypt += "Z";
  }
  
  //web-safe characters
  
  if(letter == "+ps"){
  	buildEncrypt += "+";
  }
  if(letter == "ms"){
  	buildEncrypt += "-";
  }
  if(letter == "ds"){
  	buildEncrypt += "_";
  }
  if(letter == "pr"){
  	buildEncrypt += "%";
  }
  if(letter == "at"){
  	buildEncrypt += "&";
  }
  if(letter == "te"){
  	buildEncrypt += "~";
  }
  if(letter == "dl"){
  	buildEncrypt += "$";
  }
  if(letter == "ca"){
  	buildEncrypt += ",";
  }
  if(letter == "sl"){
  	buildEncrypt += "/";
  }
  if(letter == "co"){
  	buildEncrypt += ":";
  }
  if(letter == "sc"){
  	buildEncrypt += ";";
  }
  if(letter == "eq"){
  	buildEncrypt += "=";
  }
  if(letter == "qu"){
  	buildEncrypt += "?";
  }
  if(letter == "ta"){
  	buildEncrypt += "@";
  }
  if(letter == "pd"){
  	buildEncrypt += "#";
  }
	run++;
}
  return buildEncrypt;
}
