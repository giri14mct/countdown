const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//get info
const giveAway = document.querySelector(".give-away");
const deadline = document.querySelector(".deadline");
const item = document.querySelectorAll(".deadline-format h4");

//getting info and access and change the content of giveaway 

let temp = new Date();
let tempYear = temp.getFullYear();
let tempMonth = temp.getMonth();
let tempDate = temp.getDate();

let future = new Date(tempYear, tempMonth, tempDate + 10, 11, 30, 0);

const year = future.getFullYear();
const hour = future.getHours();
const min  = future.getMinutes();
const date = future.getDate();
const month = months[future.getMonth()];
const day =  weekdays[future.getDay()];

giveAway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year} ${hour}:${min}am`;

const futime = future.getTime();

function getTime() {
   const today = new Date().getTime();
   t = futime - today;
   //values in milliseconds
   let oneDay = 24 * 60 * 60 * 1000;
   let oneHour = 60 * 60 * 1000;
   let oneMin = 60 * 1000;
//calculate the values
   let day = t/oneDay;
   day = Math.floor(day);
   let hour = Math.floor(((t%oneDay)/oneHour));
   let min = Math.floor(((t%oneHour)/oneMin));
   let sec = Math.floor((t%oneMin)/1000);
       
   function format(item){
    if(item<10)
    {
      return item = `0${item}`;
    }
    else{
      return item;
    }
  }
    const values = [day,hour,min,sec];

    item.forEach(function(item,index){
        item.innerHTML = format(values[index]);
    });

    if(t<0){
      clearInterval(interval);
      deadline.innerHTML =`<h4 class="expired">Sorry,This giveaway expired</h4>` ;
    }
  }
  
 const interval = setInterval(getTime,1000);
getTime();