function check(){

    let a = document.getElementById('num_one').value;
    let b = a.substring(a.length-3, a.length)
    let c = '';

    if( a.length >=3 ){

        for( i=1; i<=4; i++ ){
            c += b
        }
    }
    else{
        c = 'False'
    }
            document.getElementById('result').innerHTML = c;

}

//   r a k i b u l
// 0 1 2 3 4 5 6 7

// for( i=1; i<=b; i++){
//     d += c;
// }