function check(){

    let a = document.getElementById('num_one').value;
    let b = document.getElementById('num_two').value;
    let c = document.getElementById('num_three').value;
    let d = '';

        if( a >= 50 && a <= 99 || b >= 50 && b <= 99 || c >= 50 && c <= 99 ){

            d = 'True';
        }
        else{

            d = 'False';
        }

            document.getElementById('result').innerHTML = d;
            
}