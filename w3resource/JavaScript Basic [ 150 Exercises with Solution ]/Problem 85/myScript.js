function check(){

    let a = document.getElementById('num_one').value
    let b = a.split('')
    let c = 0
    let d = 0

    if( a.length % 2 == 0 ){

        for( i=0; i<b.length; i+=2 ){
            c += Number( b[i] )
        }

        for( i=1; i<b.length; i+=2 ){
            d += Number( b[i] )
        }
    }

    document.getElementById('result').innerHTML = c + ',' + d;

    console.log(b)
    console.log(c)
    console.log(d)

}
//   0 1 2 3 4 5 6 7
//   2 4 2 4 2 4 2 4