function doMath() {
  let inputNum1 = document.form1.input2.value;
  let result = Math.sqrt(inputNum1);
  document.form1.answer.value = result;
  if (inputNum1 == "") {
    alert("please enter a number");
    return false;
  }
}

