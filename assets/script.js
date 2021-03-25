let currentDay = document.getElementById("currentDay");
let currentDate = document.getElementById("currentDate");
let curDay = moment().format("dddd");
let curDate = moment().format("MMM Do, YYYY");
currentDay.innerHTML = curDay;
currentDate.innerHTML = curDate;