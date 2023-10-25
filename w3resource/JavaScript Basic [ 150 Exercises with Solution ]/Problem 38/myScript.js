function check(){

    let a = document.getElementById('num_one').value
    let c = document.getElementById('num_two').value
    let b = ''

    if( a.length == 5 ){
        b = c + a
    }
    else if( a.length == 4 ){
        b = c + a + c
    }
    else if( a.length == 3 ){
        b = c + c + a + c
    }
    else if( a.length == 2 ){
        b = c + c + a + c + c
    }
    else if( a.length == 1 ){
        b = c + c + c + a + c + c 
    }
    else{
        b = a
    }
            document.getElementById('result').innerHTML = b 
}