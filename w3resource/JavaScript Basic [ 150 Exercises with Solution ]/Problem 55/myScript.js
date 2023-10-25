function check(){
    
    let a = document.getElementById('num_one').value;
    let b = a.match(/[p]/g);
    let c = a.match(/[t]/g);
    let d = '';

    if( b != null && c != null){

        if( b.length == c.length ){
            d = 'True';
        }
        else{
            d = 'False';
        }
        
    }
    else{
        d = 'False';
    }
        

    document.getElementById('result').innerHTML = d;

}