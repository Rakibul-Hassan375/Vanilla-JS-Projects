function check(){

    let a = document.getElementById('num_one').value;
    let b = document.getElementById('num_two').value;

    // let c = a.split('');
    // let d = b.split('');

    // let e = (c.length-1)/2

    // let x = c.slice( e,e+1 )
    // let y = d.slice( e,e+1 )
    
    let c = [];
    let d = [];

    for( i=0; i<a.length; i+=2 ){
        c.push(a.substr( i,2 ));
    }

    for( i=0; i<b.length; i+=2 ){
        d.push(b.substr( i,2 ));
    }

    let e = (c.length-1)/2;

    let x = c.slice( e,e+1 );
    let y = d.slice( e,e+1 );

    document.getElementById('result').innerHTML =  x + '' + y;
    console.log(c)
    console.log(y)

}