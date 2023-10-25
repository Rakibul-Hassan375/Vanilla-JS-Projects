function check(){

    let a = document.getElementById('num_one').value
    let b = a.split('')

    if( b[0] == 1 ){
        c = 'True'
    }
    else{
        c = 'False'
    }
    document.getElementById('result').innerHTML = c;

}