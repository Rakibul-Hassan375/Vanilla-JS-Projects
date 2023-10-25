function check(){

    let a = document.getElementById('num_one').value
    let b = []

    for( i=0; i<a.length; i+=2 ){
        b.push(a.substr(i,2))
    }

    let c = b.slice( 0,1 )
    let d = b.slice( b.length-1 )
    
    document.getElementById('result').innerHTML = c + ',' + d;

}
// 11 22 33