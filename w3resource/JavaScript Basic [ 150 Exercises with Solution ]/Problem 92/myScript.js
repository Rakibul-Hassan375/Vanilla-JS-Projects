function check(){

    let a = document.getElementById('num_one').value
    let b = a.split('')
    let c = []
    // let d = Number( b[0] ) + Number( b[1] )
    // let e = Number( b[1] ) + Number( b[2] )
    for( i=0; i<b.length-1; i++){
        c.push( Number( b[i] ) - Number( b[i+1] ) )
    }
    let d = Math.min(...c)
    let x = Math.abs(d)
    document.getElementById('result').innerHTML = x;

    console.log(b)
    console.log(c)
    console.log(d)
    console.log(x)
}