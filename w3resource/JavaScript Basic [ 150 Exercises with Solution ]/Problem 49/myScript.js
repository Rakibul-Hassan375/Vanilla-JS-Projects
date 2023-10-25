function check(){

    let a = document.getElementById('num_one').value;
    let b = a.split('')

    for( i = 0; i < b.length; i++ ){
        b[i] = String.fromCharCode( b[i].charCodeAt( b[i].length-1 ) +1 );
    }

    // a.substring( 0, a.length-1 ) + String.fromCharCode(a.charCodeAt(a.length-1)+1 );

    let c = b.join('')


    document.getElementById('result').innerHTML = c;

}

//   r a k i b u l
//   0 1 2 3 4 5 6 7