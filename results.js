/*Joshua Colclazier*/
function cookieInfo()
{
  right = Number(getCookie("right"));
}

function finalScore()
{
  var result = document.getElementById("correct");
  result.innerHTML = getCookie("right") + "/3";
var correctAnswers = {};
var right = 0;
}

function begin()
{
  setCookie("right", "0", 1);
}

//taken from W3Schools
function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";path=/";
}

//taken from W3Schools
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length,c.length);
    }
  }
  return "";
}
