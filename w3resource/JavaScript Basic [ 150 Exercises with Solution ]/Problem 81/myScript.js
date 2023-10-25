function check(){

    let a = document.getElementById('num_one').value

    let b = []

    let x = 0

    for( i=0; i<a.length; i+=2 ){
            b.push(a.substr( i,2 ))
        }
    
    for( i=0; i<b.length; i++){
        x += Number(b[i])
    }

    // let b = a.split('')
    // let x = 0

    // for( i=0; i<b.length; i++){
    //     x += Number(b[i])
    // }

    document.getElementById('result').innerHTML = x;
    console.log(b)

}

// Parse each character and add it to the sum