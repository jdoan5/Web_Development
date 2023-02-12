function doMath () {
  let form = document.form.answer.value;
  let button = Math.sqrt(form);
  document.form.answer.value = button;
}

function doMath2 () {
  let form = document.form.answer.value;
  let button = (form/100);
  document.form.answer.value = button;
}

function sign(){
  let form = document.form.answer.value;
  let button = (form * -1);
  document.form.answer.value = button;
}
