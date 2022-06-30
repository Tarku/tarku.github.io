const BIRTH_DATE = new Date('Sept 24, 05 17:20:18');

window.onload = function() {
  
  let age_span = document.getElementById("age");
  let age = 0;
  
  let current_date = new Date();
  
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
