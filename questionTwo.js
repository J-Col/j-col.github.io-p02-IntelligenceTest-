//Joshua Colclazier
function validate()
{
  var usersAnswer = document.getElementById("userAnswer").value;
  if (isNaN(usersAnswer))
  {
     return window.alert("Must answer in numbers");
  }
  if (usersAnswer.length < 5 || usersAnswer.length > 5)
  {
    return window.alert("Incorrect! Try Again!");
  }
  if (usersAnswer.includes("60416"))
  {
    return window.alert("Correct! Next Question!");
  }
  else
  {
    return window.alert("Incorrect! Try Again!");
  }
}
//Test Cookies in FireFox
