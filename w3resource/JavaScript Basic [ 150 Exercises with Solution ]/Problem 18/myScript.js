function sum(){

    let a = document.getElementById('number_one').value;
    let b = document.getElementById('number_two').value;
    let c = '';

    c = Number(a) + Number(b);

        if ( a == 50 || b == 50 || c == 50 ){

            c = 'TRUE';

        }
        else{

            c = 'False';
        }

    document.getElementById('result').innerHTML = c;
}

// check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.