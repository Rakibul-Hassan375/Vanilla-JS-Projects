function check(){

    let a = document.getElementById('num_one').value
    let b = []
    let c = 0
    let d = 0
    let e = 1
    let f = 0

    for( i=0; i<a.length; i+=2 ){
        b.push( a.substr(i,2) )
    }

    for( i=0; i<b.length-1; i++ ){
        c += Number( b[i] )
    }
    // if( c == b[b.length-1] ){
    //     x = 'True'
    // }
    // else{
    //     x = 'False'
    // }

    for( i=0; i<b.length-1; i++ ){
        if( i == 0){
            d = Number( b[i] )
        }
        else{
            d -= Number( b[i] )
        }
    }
    // if( d == b[b.length-1] ){
    //     x = 'True'
    // }
    // else{
    //     x = 'False'
    // }

    for( i=0; i<b.length-1; i++ ){
        e *= Number( b[i] )
    }
    // if( e == b[b.length-1] ){
    //     x = 'True'
    // }
    // else{
    //     x = 'False'
    // }

    for( i=0; i<b.length-1; i++ ){
        if( i == 0 ){
            f = Number( b[i] )
        }
        else{
            f /= Number( b[i] )
        }
    }
    // if( f == b[b.length-1] ){
    //     x = 'True'
    // }
    // else{
    //     x = 'False'
    // }



    if( c == b[b.length-1] ){
        x = 'True'
    }
    else if( d == b[b.length-1] ){
        x = 'True'
    }
    else if( e == b[b.length-1] ){
        x = 'True'
    }
    else if( f == b[b.length-1] ){
        x = 'True'
    }
    else{
        x = 'False'
    }

    document.getElementById('result').innerHTML =x;
    
    console.log(b[b.length-1])
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
    console.log(f)
    console.log(x)
    
}