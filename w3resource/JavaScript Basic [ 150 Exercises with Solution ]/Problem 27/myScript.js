function otherwise(){

    let a = document.getElementById('insert').value;
    let b = '';
    
        if(a.startsWith('java')){

            b = 'true'
        }
        else{
            
            b = 'false'
        }

    document.getElementById('result').innerHTML = b;
}