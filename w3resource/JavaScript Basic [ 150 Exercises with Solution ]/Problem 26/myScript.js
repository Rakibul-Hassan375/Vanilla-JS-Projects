function changeString(){

    let a = document.getElementById('inpt').value;
    let b = '';

    if ( a.length >= 3){

        b = a.substring( a.length - 3 ) + a.substring( 0 ) + a.substring( a.length - 3 );

    }
    else{
        
        b = a;
    }

    document.getElementById('result').innerHTML = b;
}

//    r a k i b u l h a  s  s
//  0 1 2 3 4 5 6 7 8 9 10 11
//This is done by taking the last 3 characters and adding them at both the front and back
//The string length must be 3 or more 