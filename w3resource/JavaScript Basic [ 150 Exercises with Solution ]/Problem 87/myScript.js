function check(){

    let a = document.getElementById('num_one').value
    let b = document.getElementById('num_two').value
    let c = []
    let d = []
    let x = []
    let y = []
    let z = ''

    for( i=0; i<a.length; i+=2 ){
        c.push( a.substr( i,2 ) )
    }

    for( i=0; i<a.length; i+=2 ){
        d.push( b.substr( i,2 ) )
    }

    for( i=0; i<c.length; i++){
        x += c[i].length
    }

    for( i=0; i<d.length; i++){
        y += d[i].length
    }

    if( x == y ){
        z = 'True'
    }
    else{
        z = 'False'
    }

    document.getElementById('result').innerHTML = z;
    console.log(c)
    console.log(d)
    console.log(x)
    console.log(y)

}