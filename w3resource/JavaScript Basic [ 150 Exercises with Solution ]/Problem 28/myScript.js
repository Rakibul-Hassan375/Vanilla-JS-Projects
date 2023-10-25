function check(){

    let a = document.getElementById('nub_one').value;
    let b = document.getElementById('nub_two').value;
    let c = '';

        if( a >= 50 && a <= 99 && b >= 50 && b <= 99 ){

            c = 'Both Integer values are in the range (50-99)';
        }
        else{

            c = 'False';

        }

    document.getElementById('result').innerHTML = c;
}