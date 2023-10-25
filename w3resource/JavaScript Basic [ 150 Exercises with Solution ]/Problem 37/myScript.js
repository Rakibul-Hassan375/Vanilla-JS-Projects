function check(){

    let a = document.getElementById('num_one').value;

    let x = a.substring(0,1)
    let y = a.substring(1,2)
    let z = a.substring(2,3)

    let b = ''
    
        if( a.length>=3 ){
            if(  isUpperCase(x) == true  ){
                 x = x.toLowerCase()
            }
            if( isUpperCase(y) == true ){
                y = y.toLowerCase()
            }
            if( isUpperCase(z) == true ){
                z = z.toLowerCase()
            }
            b = x + y + z + a.substring( 3,a.length )
        }
        else{
            b = 'false'
        }

    document.getElementById('result').innerHTML = b
}

function isUpperCase( character ){
    return character.toUpperCase() === character && character.toLowerCase() !== character
}


// a.substring(0,1)
// a.substring(1,2)
// a.substring(2,3)
// == a.containsUppercase()

// const isUpperCase = (character) => {
//   return character.toUpperCase() === character && character.toLowerCase() !== character
// }

//  W
//  W  ===  W && w !== W
// true