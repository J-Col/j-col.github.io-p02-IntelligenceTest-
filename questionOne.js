//Joshua Colclazier
function validate ()
{
function checkAnswer()
{
  var usersAnswer = document.getElementById("userAnswer").value;
  if (isNaN(usersAnswer))
  {
     return window.alert("Must answer in numbers");
  }
  if (usersAnswer.length < 4 || usersAnswer.length > 4)
  {
    return window.alert("Incorrect! Try Again!");
  }
  else
  {
    return window.alert("Incorrect! Try Again!");
  }
}
function validateCorrect()
{
  if (usersAnswer.includes("1626"))
  {
    return window.alert("Correct! Next Question!");
  }
}
}
//Test Cookies in FireFox
