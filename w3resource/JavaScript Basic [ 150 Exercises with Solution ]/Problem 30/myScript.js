function checkString(){

    let a = document.getElementById('inpt').value;
    let b = '';

    if ( a.substring(4,5) == 's' && a.substring(5,6) == 'c' && a.substring(6,7) == 'r' &&     // a.substring( 4 , 10) == 'string'
         a.substring(7,8) == 'i' && a.substring(8,9) == 'p' && a.substring(9,10) == 't'   ) {

        b = a.substring( 0, 4 ) + a.substring( 10, a.length )
    }
    else{

        b = a
    }
        
            document.getElementById('result').innerHTML = b
}

//   j a v a s c r i p  t  l  a  n  g  u  a  g  e 
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18

// a.substring( 4 , 10)
// a.substring( 0 , 4)

//                  a.substring( a.length - 6 ) = script
// a.substring(0) - a.substring( a.length - 6 )
// a.substring( 0, 4 ) = java

// (4,5) = s, (5,6) = c, (6,7) = r, (7,8) = i, (8,9) = p, (9,10) = t
// str.substring(10, 4) = 