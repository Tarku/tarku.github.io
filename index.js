const BIRTH_DATE = Date.parse('24 Sep 2005 15:21:00 GMT');

window.onload = function() {
  let age_span = document.getElementById("age");
  let age = 0;
  
  let current_date = Date.now();
  let year_difference = BIRTH_DATE.getFullYear() - current_date.getFullYear()
  
  let month_difference = BIRTH_DATE.getMonth() - current_date.getMonth()
  let day_difference = BIRTH_DATE.getDate() - current_date.getDate()
  
  if (month_difference < 0) {
    if (day_difference < 0) {
      age = year_difference - 1;
    } else {
      age = year_difference;
    }
  } else {
    age = year_difference;
  }
  
  age_span.innerHTML = age
};
