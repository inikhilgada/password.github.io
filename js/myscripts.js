
function fn1()
{
	var chars1 = document.getElementById("text1").value;
  var chars2 = document.getElementById("text2").value;
  var a = chars1.length;
  var b = chars2.length;
  if(a>b)
    {
      max=a;
      min=b;
    }
  else{

    max=b;
    min=a;
  }
  var length = Math.floor(Math.random() * (max-min+1))+min;
  document.getElementById("demo1").innerHTML =" "+generateRandomString(chars1+chars2,length);
}
function generateRandomString(str,length){  
  var random_string = '';
    if(length > 0){
      for(var i=0; i < length; i++){
          random_string += str.charAt(Math.floor(Math.random() * str.length));
      }
  }
    return random_string;
}
