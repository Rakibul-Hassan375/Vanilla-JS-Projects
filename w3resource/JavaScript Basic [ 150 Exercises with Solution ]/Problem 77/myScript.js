function check(){

    let a = document.getElementById('num_one').value

        // let b = []

        // for( i=0; i<a.length; i+=2 ){
        //     b.push(a.substr( i,2 ))
        // }

        // if(  b.includes('11') && b.includes('33') ){
        //     x = 'True'
        // }
        // else if ( b.includes('11') ){
        //     x = 'True'
        // }
        // else if ( b.includes('33') ){
        //     x = 'True'
        // }
        // else{
        //     x = 'False'
        // }

    let b = a.split('')
    let c =/[1]/g
    let d =/[3]/g

    if( a.match(c)?.length && a.match(d)?.length ){
        x = 'True'
    }
    else if( a.match(c)?.length ){
        x = 'True'
    }
    else if( a.match(d)?.length ){
        x = 'True'
    }
    else{
        x = 'False'
    }

    document.getElementById('result').innerHTML = x;
}