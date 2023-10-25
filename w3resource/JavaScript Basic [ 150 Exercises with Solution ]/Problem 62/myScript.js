function check(){

    let a = document.getElementById('num_one').value;
    let b = a.substring( a.length-3, a.length );
    let c = a.substring( 0, a.length-3 );

    if( a.length >= 3 ){
        d = b + c;
    }
    else{
        d = 'False'
    }
    
    document.getElementById('result').innerHTML = d;

}