function check(){

    let a = document.getElementById('num_one').value
    let b = 'Acute angle'
    let c = 'Right angle'
    let d = 'Obtuse angle'
    let e = 'Straight angle'
    let x = ''

    if( a < 90 ){
        x = b
    }
    else if( a == 90 ){
        x = c
    }
    else if( 90 < a && a < 180 ){
        x = d
    }
    else if( a == 180 ){
        x = e
    }
    else{
        x = 'False'
    }
    
    document.getElementById('result').innerHTML = x;
    console.log(x)
}