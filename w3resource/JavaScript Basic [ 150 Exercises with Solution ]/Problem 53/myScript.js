function check(){

    let a = document.getElementById('num_one').value;
    let b = a.indexOf('a'); // 1
    let c = a.indexOf('b'); // 5
    let d = '';

    if( c-b == 4 ){
        d = 'True'
    }
    else{
        d = 'False'
    }
 
            document.getElementById('result').innerHTML = d;
            
}
// rakiib =
// 12345 = 
// 01234 = index