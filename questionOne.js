function validate()
{
  var usersAnswer = document.getElementById("userAnswer").value;
  if (isNaN(usersAnswer))
  {
     return window.alert("Must answer in numbers");
  }
  if (usersAnswer.length < 4)
  {
    return window.alert("Incorrect! Try Again!");
  }
  else if (usersAnswer.length > 4)
  {
    return window.alert("Incorrect! Try Again!");
  }
  if (usersAnswer.includes("1626"))
  {
    window.alert("Correct! Next Question!");
  }
}
