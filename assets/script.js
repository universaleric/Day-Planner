let description = document.getElementsByClassName("description");
let currentDay = document.getElementById("currentDay");
let currentDate = document.getElementById("currentDate");
let curHour = moment().hour();
let curDay = moment().format("dddd");
let curDate = moment().format("MMM Do, YYYY");
currentDay.innerHTML = curDay;
currentDate.innerHTML = curDate;

let timeArray = ["t9", "t10", "t11", "t12", "t1", "t2", "t3", "t4", "t5"];
let colorArray = ["c9", "c10", "c11", "c12", "c1", "c2", "c3", "c4", "c5"];

for (let i = 0; i < timeArray.length; i++) {
    let colorChange = document.getElementById(colorArray[i]);
    let time = document.getElementById(timeArray[i]).dataset.time;
    time = parseInt(time);
    if(time < 9) {
        time = time + 12;
    }
    console.log(curHour, time, colorChange);
    if (time == curHour) {
        colorChange.classList.add("present");
    }
    else if (time > curHour) {
        colorChange.classList.add("future");
    }
    else {
        colorChange.classList.add("past");
    }
    
}