function check(){

    let a = document.getElementById('num_one').value;
    let b = a.substring( 0,1 );
    let c = a.substring( a.length-1, a.length );
    let x = '';

    if( b == 'p' && c == 'p' ){
        x = a.substring( 1, a.length-1 )
    }
    else if( b == 'p' ){
        x = a.substring( 1, a.length )
    }
    else if( c == 'p' ){
        x = a.substring( 0, a.length-1 )
    }
    else{
        x = 'False'
    }

    document.getElementById('result').innerHTML = x;

}
//    p a b c d p
//  0 1 2 3 4 5 6
//  pabcdp