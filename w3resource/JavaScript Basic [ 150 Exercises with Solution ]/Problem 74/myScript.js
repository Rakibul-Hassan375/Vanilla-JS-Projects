function check(){

    let a = document.getElementById('num_one').value
    let b = []

    for( i=0; i<a.length; i+=2 ){
        b.push(a.substr(i,2))
    }

    let c = Math.max.apply(0, b)

    for( i=0; i<b.length; i++){
        if( b[i] != c ){
            b[i] = c
        }
    }

    document.getElementById('result').innerHTML = b;

}
// .apply(0, b)
// (...b)