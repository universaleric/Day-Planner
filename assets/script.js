let description = document.getElementsByClassName("description");
let currentDay = document.getElementById("currentDay");
let currentDate = document.getElementById("currentDate");
let curHour = moment().format('h');
console.log(curHour);
let curDay = moment().format("dddd");
let curDate = moment().format("MMM Do, YYYY");
currentDay.innerHTML = curDay;
currentDate.innerHTML = curDate;

