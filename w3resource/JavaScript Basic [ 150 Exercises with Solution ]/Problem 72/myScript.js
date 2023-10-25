function check(){

    let a = document.getElementById('num_one').value
    let b = []

    for( i=0; i<a.length; i+=2 ){
        b.push(a.substr(i,2))
    }

    if( b[0] == b[b.length - 1] ){
        c = 'True'
    }
    else{
        c = 'False'
    }

    document.getElementById('result').innerHTML = c;
    console.log(b[0])

}

//   112233