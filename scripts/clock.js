// Leon Chung 2019
// 24 hour clock (military time)
function startTime() {
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    document.getElementsByClassName("time")[0].innerHTML = hour + ':' + minutes + ':' + seconds;

    var t = setTimeout(startTime, 500);
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
