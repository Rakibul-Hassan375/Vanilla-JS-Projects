function check(){

    let a = document.getElementById('num_one').value
    let b = a.split('')
    let c = ''

    for( i=0; i<b.length; i++){

        b[i] = String.fromCharCode( b[i].charCodeAt( b[i] ) +1 )

        if( b[i].charCodeAt ( b[i]) == 123 ){
            b[i] = String.fromCharCode( 97 )
        }

    }

    c = b.join('')

    document.getElementById('result').innerHTML = c;
    
}

// Part One
// b[i].charCodeAt ( b[i].length-1)
// It retrieves the Unicode value of the last character in the string at index i of array b.
// would be the Unicode value of 'o', which is 111

// Part Two
// b[i].charCodeAt ( b[i].length-1) +1
// It increments the Unicode value by 1, resulting in 112.

// Part Three
// String.fromCharCode
// It converts the Unicode value back to its corresponding character. In this case, it converts 112 to the character 'p'.