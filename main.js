const monthEl = document.querySelector(".month");
const dayEl = document.querySelector(".day");
const dayNumEl = document.querySelector(".day-num");
const yearNumEl = document.querySelector(".year-num");
const dateObj = new Date();

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const days = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];



monthEl.innerHTML = months[dateObj.getMonth()];
dayEl.innerHTML = days[dateObj.getDay()]
dayNumEl.innerHTML = dateObj.getDate();
yearNumEl.innerHTML = dateObj.getFullYear();

