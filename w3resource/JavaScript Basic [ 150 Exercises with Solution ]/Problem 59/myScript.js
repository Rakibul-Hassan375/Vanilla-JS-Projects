function check(){

    let a = document.getElementById('num_one').value;
    let b = a.length;
    let c = '';

    if( b % 2 == 0 ){
        c = a.slice( 0, b / Number(2) );
    }
    else{
        c = 'False';
    }
    document.getElementById('result').innerHTML = c;
}

// b / Number(2)