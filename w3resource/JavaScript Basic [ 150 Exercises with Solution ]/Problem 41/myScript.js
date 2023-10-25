function check(){
    let a  = document.getElementById('num_one').value
    let b  = document.getElementById('num_two').value
    let c  = document.getElementById('num_three').value
    let x = ''

    if( a == b && b == c && c == a){
        x = 30;
    }
    else if( a == b || b == c || a == c ){
        x = 40;
    }
    else{
        x = 20;
    }
    document.getElementById('result').innerHTML = x;
}