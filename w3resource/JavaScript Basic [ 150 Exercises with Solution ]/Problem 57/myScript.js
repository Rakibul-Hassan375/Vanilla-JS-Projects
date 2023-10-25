function check(){

    let a = document.getElementById('num_one').value;
    let b = document.getElementById('num_two').value;
    // let c = a.split(' ')
    let d = ''

        for( i=1; i<=b; i++){
            d += a;
        }
        
    document.getElementById('result').innerHTML = d;
    console.log(c)

}