function clock() {

    var hour = document.getElementById("hour");
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");

    var day = document.getElementById("day");
    var date = document.getElementById("date");
    var month = document.getElementById("month");
    var year = document.getElementById("year");

    var d = new Date();

    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    if (h > 12) {
        var hh = h - 12;
        if (hh < 10) {
            var newh = "0" + hh;
        } else {
            var newh = hh;
        }

    } else {
        var newh = h;
    }



    if (m < 10) {
        newm = "0" + m;
    } else {
        newm = m;
    }


    if (s < 10) {
        news = "0" + s;
    } else {
        news = s;
    }


    const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var dy = weeks[d.getDay()];
    var dd = d.getDate();
    var mm = months[d.getMonth()];
    var yy = d.getFullYear();


    hour.innerHTML = newh + " : ";
    min.innerHTML = newm + " : ";
    sec.innerHTML = news;


    day.innerHTML = dy + ", ";
    date.innerHTML = dd + " ";
    month.innerHTML = mm + " - ";
    year.innerHTML = yy;



}

setInterval(clock, 1000);