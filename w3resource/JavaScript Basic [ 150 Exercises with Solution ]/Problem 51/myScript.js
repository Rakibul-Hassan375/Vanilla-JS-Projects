function check(){

    let a = document.getElementById('num_one').value

    // let b = a.charAt(0).toUpperCase() + a.slice(1)

    let b = a.split(' ')

    for( i = 0; i < b.length; i++ ){
        b[i] = b[i].charAt(0).toUpperCase() + b[i].slice(1)
    }

    let c = b.join(' ')

    document.getElementById('result').innerHTML = c;
}
//         length = 3
// b = ['my' , 'name', 'is']
//       0       1       2
//      m y   n a m e   i s
//      0 1   0 1 2 3   0 1
//      m     n         i    =    (m,n,i)