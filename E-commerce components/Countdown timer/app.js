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

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2022, 1, 28, 11, 30, 0);      //(YYYY, MM, DD, HH, SS, MS)
console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
const month = months[futureDate.getMonth()];

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`;

//future timein in msec
const futureTime = futureDate.getTime();    //returns value in millisecond

let getRemainingTime = () => {
    const today = new Date().getTime();     //returns value in millisecond
    const t = futureTime - today;

    //values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    //calculate all values
    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    //set values array
    const values = [days, hours, minutes, seconds];

    format = (item) => {
        if(item < 10) {
            return item = `0${item}`;
        }
        return item;
    }

    // items.forEach(function (item, index) {
    //     item.innerHTML = values[index];
    // })

    items.forEach((item,index) => {
        item.innerHTML = format(values[index]);
    });

    if(t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
    }
}

//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();