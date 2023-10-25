function sum(){

    let a = document.getElementById('number_one').value;
    let b = document.getElementById('number_two').value;
    let c = '';

    c = Number(a) + Number(b);

        if( a == b ){

            c = c * 3;
        }

        document.getElementById('result').innerHTML = c;
}

// Compute the sum of the two given integers. If the two values are the same, then return triple their sum