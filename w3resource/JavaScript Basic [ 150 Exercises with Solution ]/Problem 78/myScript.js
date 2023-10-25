function check(){

    let a = document.getElementById('num_one').value

    let b = a.split('')
    let c =/[1]/g
    let d =/[3]/g

    if( a.match(c)?.length && a.match(d)?.length ){
        x = 'False'
    }
    else if( a.match(c)?.length ){
        x = 'False'
    }
    else if( a.match(d)?.length ){
        x = 'False'
    }
    else{
        x = 'True'
    }

    document.getElementById('result').innerHTML =x;
}