function newSting(){

    let a  = document.getElementById('giv_stg').value;
    let b = '';

        if ( a.length > 1 ){

             b = a.substring( a.length - 1 ) + a.substring( 1, a.length -1) + a.substring( 0, 1 );
        }
        else{

             b = a;
        }

    document.getElementById('new_stg').innerHTML = b;
    
}

// if(  a.substring(a.length) > 1  ){}

//   r a k i b u l
// 0 1 2 3 4 5 6 7

// a.length = 7

// b = a.substring( a.length - 1 ) + rakibul.substring(1,7-1) + a.substring( 0, 1 )
//   =     last character          +         middle           +   first character
//   =         (7-1)               +          (1,6)           +       (0,1)
//   =           6                 +          (1,6)           +       (0,1)
//   =           l                 +          akibu           +         r

//     kalo
//     a.substring( a.length )
//              4 
//            4 > 1
