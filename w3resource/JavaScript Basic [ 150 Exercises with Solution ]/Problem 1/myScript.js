let a = new Date();

// Todays Date
    let date = a.getDate();
    console.log(a)

    document.getElementById('date').innerHTML = "Today's date" + ' = ' + date;

// Today's Day Name / Weekday
    let weekDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    let day = weekDay[a.getDay()];

        document.getElementById('weekDay').innerHTML = "Today's weekday" + ' = ' + day;

// Present Year
    let year = a.getFullYear();

        document.getElementById('year').innerHTML = "This year" + ' = ' + year;

// Present / Current Time
    let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
// Second Method
    let tim2 = a.toLocaleString('en-US',{hour:'numeric', minute:'numeric', second:'numeric', hour12: true});

        document.getElementById('time').innerHTML = "Current Time (No:1)" + ' = ' + time;
        document.getElementById('tim2').innerHTML = "Current Time (No:2)" + ' = ' + tim2;