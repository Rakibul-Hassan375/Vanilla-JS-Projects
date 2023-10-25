function check(){
    
    let a = document.getElementById('num_one').value;
    let b = (a.length - 3)/2;
    let c = ''

    if( a.length % 2 == 1 ){
        c = a.substring( b, b+3 )
    }
    else{
        c = 'False'
    }

    document.getElementById('result').innerHTML = c;

}