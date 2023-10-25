function check(){
    let a = document.getElementById('num_one').value;
    let b = document.getElementById('num_two').value;
    let c = '';

    if( a%7 == 0 || a%11 == 0 || b%7 == 0 || b%11 == 0 ){
        c = 'True';
    }
    else{
        c = 'False';
    }
    document.getElementById('result').innerHTML = c;
}