
function sum(){ 

    let a = document.getElementById('number_one').value;
    let b = document.getElementById('number_two').value - 1;
    let c = '';

        c = a.substring( 0 , b ) + a.substring( Number(b) + 1 , a.length );

    document.getElementById('result').innerHTML = c;

}

// you should pick the size of the array minus 1 (because an array start from 0 and not 1)

//   r a k i b u l       = a
// 0 1 2 3 4 5 6 7

//   w 3 r e s u r c e   = b
// 0 1 2 3 4 5 6 7 8 9


// substring(0)     result:      r a k i b u l
//                             0 1 2 3 4 5 6 7

// substring(1)     result:        a k i b u l
//                             0 1 2 3 4 5 6 7

// substring(2)     result:          k i b u l
//                             0 1 2 3 4 5 6 7

// substring(3)     result:            i b u l
//                             0 1 2 3 4 5 6 7


// substring(0,1)   result:      r a k i b u l  ||   0 =          1 = akibul || r
//                             0 1 2 3 4 5 6 7  ||

// substring(0,2)   result:      r a k i b u l  ||   0 =          2 = kibul || ra
//                             0 1 2 3 4 5 6 7  ||

// substring(0,3)   result:      r a k i b u l  ||   0 =          3 = ibul || rak
//                             0 1 2 3 4 5 6 7  ||

// substring(0,3)   result:      r a k i b u l  ||   0 =          3 = ibul || r
//                             0 1 2 3 4 5 6 7  ||


// substring(1,2)   result:      r a k i b u l  ||   1 = r        2 = kibul || a
//                             0 1 2 3 4 5 6 7  ||

// substring(2,3)   result:      r a k i b u l  ||   2 = ra       3 = ibul || k
//                             0 1 2 3 4 5 6 7  ||

// substring(2,6)   result:      r a k i b u l  ||   2 = ra       6 = l || kibu
//                             0 1 2 3 4 5 6 7  ||

// substring(3,7)   result:      r a k i b u l  ||   3 = rak      7 =  || ibul
//                             0 1 2 3 4 5 6 7  ||


// substring(0)     result:      r a k i b u l
//                             0 1 2 3 4 5 6 7

// a.substring( 0 , 4 ) + a.substring( Number(b) , a.length ) = rakiul

// a.substring( 0 , 4 ) = raki
// a.substring( Number(b) + 1 , a.length ) = ul
//                     5      ,    7

// a.substring( 0 , 3 ) + a.substring( Number(b) , a.length ) = rakiul

// a.substring( 0 , 3 ) = rak
// a.substring( Number(b) , a.length ) = ibul
//                  3     ,    7
