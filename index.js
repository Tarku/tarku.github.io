const BIRTH_DATE = new Date('Sept 24, 05 17:20:18');

window.onload = function() {
  
  let age_span = document.getElementById("age");
  let age = 0;
  
  let current_date = new Date();
  
  let year_difference = current_date.getFullYear() - BIRTH_DATE.getFullYear();
  
  let month_difference = current_date.getMonth() - BIRTH_DATE.getMonth();
  let day_difference = current_date.getDate() - BIRTH_DATE.getDate();
  
  if (month_difference < 0) {
    age = year_difference;
  } else {
    age = year_difference - 1;
  }
  
  age_span.innerHTML = age
};
