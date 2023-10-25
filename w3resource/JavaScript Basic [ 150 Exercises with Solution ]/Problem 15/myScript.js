function difference(){

    let a = document.getElementById('number').value
    let b = '';

        b = a - 13

            if ( b > 0 ){

                b = b*2
                
            }

    document.getElementById('result').innerHTML = b
}