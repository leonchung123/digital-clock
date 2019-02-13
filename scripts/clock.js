// Leon Chung 2019
// 24 hour clock (military time)
var t;

function startMilitaryTime() {
    clearTimeout(t);
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    document.getElementsByClassName("time")[0].innerHTML = hour + ':' + minutes + ':' + seconds;

    t = setTimeout(startMilitaryTime, 500);
}

function start12HourTime() {
    clearTimeout(t);
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    if (hour == 0) {
        hour = 12;
    }
    else if (hour > 12) {
        hour = hour - 12;
    }

    document.getElementsByClassName("time")[0].innerHTML = hour + ':' + minutes + ':' + seconds + checkPeriod(hour);

    t = setTimeout(start12HourTime, 500);
}

//if minutes or seconds < 10, we add a 0 in front for looks
function checkTime(t) {
    if (t < 10) {
        return ('0' + t);
    }
    else return(t);
}

// for 12 hour clock using AM and PM periods
function checkPeriod(hour) {
    if (hour < 12) {return ' am'}
    return ' pm';
}
