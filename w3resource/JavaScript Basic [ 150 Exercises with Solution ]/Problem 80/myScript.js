function check(){

    let a = document.getElementById('num_one').value
    let b = []

    for( i=0; i<a.length; i+=2 ){
        b.push(a.substr( i,2 ))
    }
    
    [ b[0], b[b.length-1] ] = [ b[b.length-1], b[0] ]
    
    // let x = b[0]
    // let y = b[b.length-1]
    // let z = b.slice( 1,b.length-1 )

    document.getElementById('result').innerHTML = b;
    console.log(b)

}