function check(){

    let a = document.getElementById('num_one').value
    let b = a.split()
    let c = a.split('')

    if( Array.isArray(a) ){
        x = 'True'
    }
    else{
        x = 'False'
    }

    if( Array.isArray(b) ){
        y = 'True'
    }
    else{
        y = 'False'
    }

    if( Array.isArray(c) ){
        z = 'True'
    }
    else{
        z = 'False'
    }

    document.getElementById('result').innerHTML = x + ' ' + y + ' ' + z;

    console.log(b)
    console.log(c)
    console.log(x)
}