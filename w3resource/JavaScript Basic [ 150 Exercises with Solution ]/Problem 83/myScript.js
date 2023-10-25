function check(){

    let a = document.getElementById('num_one').value
    let b = a.split(' ')
    let c = b[0].length // no need
    let d = [] 
    let y = ''

    for( i=0; i<b.length; i++){
        d.push( b[i].length )
    }

    for( i=0; i<b.length; i++){
        if (b[i].length > y.length){
            y = b[i]
        }
    }

    let x = Math.max(...d) // no need

    document.getElementById('result').innerHTML = y;
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(x)
    console.log(y)
}
// 0  1   2   3
// u are an nigga
// 1  3   2   5 
//Math.max(b.length)