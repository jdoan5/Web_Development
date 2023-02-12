function doMath () {
  let form1 = document.form1.answer.value;
  let button = Math.sqrt(form1);
  document.form1.answer.value = button;
}

function doMath2 () {
  let form1 = document.form1.answer.value;
  let button = (form1/100);
  document.form1.answer.value = button;
}

function sign(){
  let form1 = document.form1.answer.value;
  let button = (form1 * -1);
  document.form1.answer.value = button;
}
