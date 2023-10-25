function check(){

    let a = document.getElementById('num_one').value
    let b = a.split('')
    let x = b.length     // 
    let y = 0            // 
    let z = 0            // 

    let c = []
    for( i=0; i<b.length*b.length; i++){
        if( i == x ){
            y++
            x += b.length
            z = 0
        }
        c.push( Math.abs( Number( b[y] ) - Number( b[z] ) ) )
            z++
    }

// 1 2 4 8
// 0 1 2 3

// b.length*b.length  =  1 2 3 4 / 5 6 7 8 / 9 10 11 12 / 13 14 15 16

    // let d = []
    // for( i=0; i<b.length; i++){
    //     d.push( Math.abs( Number( b[1] ) - Number( b[i] ) ) )
    // }

    // let e = []
    // for( i=0; i<b.length; i++){
    //     e.push( Math.abs( Number( b[2] ) - Number( b[i] ) ) )
    // }
    
    // let f = []
    // for( i=0; i<b.length; i++){
    //     f.push( Math.abs( Number( b[3] ) - Number( b[i] ) ) )
    // }

    // let g = []
    // g.push( Math.max(...c) )
    // g.push( Math.max(...d) )
    // g.push( Math.max(...e) )
    // g.push( Math.max(...f) )

    let d = Math.max(...c)

    document.getElementById('result').innerHTML = d;
    
    console.log(b)
    console.log(c)
    // console.log(d)
    // console.log(e)
    // console.log(g)
    // console.log(x)

}
