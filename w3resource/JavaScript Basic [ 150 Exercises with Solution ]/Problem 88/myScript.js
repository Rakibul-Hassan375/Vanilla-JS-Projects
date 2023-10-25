function check(){

    let a = document.getElementById('num_one').value
    let b = []
    let c = 0
    let d = ''

    for( i=0; i<a.length; i+=2 ){
        b.push( a.substr(i,2) )
    }

    for( i=0; i<b.length-1; i++ ){
        if( b[i] % b[b.length-1] == 0 ){
            c++
        }
    }
    
    if( c == b.length-1 ){
        d = 'True'
    }
    else{
        d = 'False'
    }

    document.getElementById('result').innerHTML;
    console.log(b)
    console.log(c)
    console.log(d)

}