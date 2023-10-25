function check(){

    let a = document.getElementById('num_one').value;
    let b = document.getElementById('num_two').value;
    let c = Number(a) + Number(b)
    let d = Math.abs( Number(a) - Number(b) )
    let x = '';

        if( a == 8 || b == 8){
            x = 'True'
        }
        else if( c == 8){
            x = 'True'
        }
        else if ( d == 8){
            x = 'True'
        }
        else{
            x = 'False'
        }

    document.getElementById('result').innerHTML = x;
    
}

// else if( c == 8 ){
//     x = 'True'
// }
// else{
//     x = 'False'
// }