function doMath() {
  let inputNum1 = document.form.input2.value;
  let result = Math.sqrt(inputNum1);
  document.form.answer.value = result;
  if (inputNum1 == "") {
    alert("please enter a number");
    return false;
  }
}

