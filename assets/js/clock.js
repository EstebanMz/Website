const UTC_OFFSET = -3; //  UTC-03:00, Buenos Aires, Argentina

function clock() {
    let hours = document.getElementById("hour");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    let hourNow = new Date().getUTCHours() + UTC_OFFSET;
    let minutesNow = new Date().getUTCMinutes();
    let secondsNow = new Date().getUTCSeconds();

    hours.innerHTML = hourNow < 10 ? `0${hourNow}` : hourNow;
    minutes.innerHTML = minutesNow < 10 ? `0${minutesNow}` : minutesNow;
    seconds.innerHTML = secondsNow < 10 ? `0${secondsNow}` : secondsNow;
}

setInterval(clock, 1000);
