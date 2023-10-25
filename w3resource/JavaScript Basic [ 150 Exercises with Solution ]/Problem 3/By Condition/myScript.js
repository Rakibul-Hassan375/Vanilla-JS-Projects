let a = new Date();
let date = a.getDate();
let month = a.getMonth() + 1;
let year = a.getFullYear();
let b = new Date(date, month, year)

    if (date<10){
        date = '0'+ date;
    }
    if (month<10){
        month = '0' + month;
    }

document.getElementById('result_one').innerHTML = month + '-' + date + '-' + year;
document.getElementById('result_two').innerHTML = date + '-' + month + '-' + year;