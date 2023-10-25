function check(){

    let a = document.getElementById('num_one').value
    let b = a.split('')
    let c = b.length
    let d = ''

    for( i=0; i<b.length; i++){
        if( b[i] % 2 == 0 && b[i+1] != undefined && b[i+1] % 2 == 0 ){
            d += b[i] + '-'
        }
        else{
            d += b[i]
        }
    }

    document.getElementById('result').innerHTML = d;

    console.log(c)
    console.log(d)
}
// 0 1 2 3 4 5 6 7 8 9
// 1 2 3 4 6 6
//  f f f t t 
// t-t