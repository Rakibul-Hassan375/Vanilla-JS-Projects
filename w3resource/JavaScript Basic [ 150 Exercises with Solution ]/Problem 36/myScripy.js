function check(){

    let a = document.getElementById('num_one').value
    let y = ''

        if( a.substring(a.length-1,a.length ) == a.substring(a.length-2,a.length-1) ){
            if( a.substring(a.length-2,a.length-1) == a.substring(a.length-3,a.length-2) ){
                if( a.substring(a.length-1,a.length ) == a.substring(a.length-3,a.length-2) ){
                    y = 'Integers is same'
                }
            }
        }
        else{
            y = 'Integers is not same'
        }
    
    document.getElementById('result').innerHTML = y

}

//   r a k i b u l h a
// 0 1 2 3 4 5 6 7 8 9


// a.length-3 = 6

// a.length-1,a.length   =  8,9 = a
// a.length-2,a.length-1 =  7,8 = h
// a.length-3,a.length-2 =  6,7 = l

// a.substring(a.length-1,a.length ) == b, a.substring(a.length-2,a.length-1) == b, a.substring(a.length-3,a.length-2) == b
// a.substring(x-1,x) == b, a.substring(x-2,x-1) == b, a.substring(x-3,x-2) == b