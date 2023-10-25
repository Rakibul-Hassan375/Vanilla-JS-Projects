function check(){
    
    let a = document.getElementById('num_one').value;
    let b = document.getElementById('num_two').value;
    let c = document.getElementById('num_three').value;

    let x = '';

    if( a<b && b<c ){
        x = 'Strict Mode'
    }
    else{
        x = 'Soft Mode'
    }

    document.getElementById('result').innerHTML = x;
}