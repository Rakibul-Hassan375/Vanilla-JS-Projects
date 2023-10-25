function check(){

    let a = document.getElementById('num_one').value
    let c = ''

    // a.substring( a.length-6, a.length ) == 'script'
    // a.endsWith('script')

    if( a.endsWith('script') ){
        c = 'True'
    }
    else{
        c = 'False'
    }
    document.getElementById('result').innerHTML = c;

}

//   s c r i p t
// 0 1 2 3 4 5 6