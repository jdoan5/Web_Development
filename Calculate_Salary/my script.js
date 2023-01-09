function validateForm() {
  let x = document.forms["formInfo"]["HourlyPay"].value;
  if (x == "") {
    alert("Please fill out all infos");
    return false;
  }
}

function multiple() {
  HourlyPay = document.getElementById("HourlyPay").value;
  WorkHours = document.getElementById("WorkHoursPerWeek").value;
  document.getElementById("result").innerHTML = HourlyPay * WorkHours;
}
