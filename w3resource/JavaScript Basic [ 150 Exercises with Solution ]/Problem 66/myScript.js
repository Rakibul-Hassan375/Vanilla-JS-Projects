function check(){

    let a = document.getElementById('num_one').value
    let b = a.substring(0,3)
    let c =''

    if ( a.substring(0,3) == 'new' ){
        c =  a
    }
    else if( a.substring(0,3) == 'los' ){
        c =  a
    }
    else{
        c = 'False'
    }
    document.getElementById('result').innerHTML = c;
    console.log(b)
}