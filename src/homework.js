function search (event){
    event.preventDefault();
    let searchInputElement =document.querySelector("#search-input");
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = searchInputElement.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);



let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();

let year = now.getFullYear(); 

let days = [ "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat" ];
let day = days[now.getDay()];

let months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
let month = months[now.getMonth()];

let date = document.querySelector("#current-date");
date.innerHTML = `   ${day} ${hours}:${minutes} ${month} ${year}` ;