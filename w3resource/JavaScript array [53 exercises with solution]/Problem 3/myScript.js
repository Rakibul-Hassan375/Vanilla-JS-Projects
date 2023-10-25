function check(){

    let a = document.getElementById('num_one').value;
    let b = document.getElementById('num_two').value;
    let c = '';
    let d = '';
    let e = '';

    if( a.length >= b ){
        c = a.substr(0,b);
        e = c.split('');
    }
    else{
        d = 'Not enough Length';
    }

    document.getElementById('result').innerHTML = e;

}