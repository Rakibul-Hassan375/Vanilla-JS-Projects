function timer(){

    let a = new Date();

    let b = a.getHours();
    let c = a.getMinutes();
    let d = a.getSeconds();
    
    let e = a.getHours();

        if(b > 12){             // 13 - 24  20, 8, 08
            b -= 12;

            if(b < 10){         // 1 - 9
                b = '0' + b;
            }
        }

        if(e <= 12){            // 12 - 1
            e = 'AM'
        }
        else{
            e = 'PM'
        }

        if(c < 10){
            c = '0' + c;
        }

        if(d < 10){
            d = '0' + d;
        }

    document.getElementById('result').innerHTML = b + ' ' + e + ':' + c + ':' + d;
}

setInterval(function(){
    timer();
}, 500 )