function check(){

    let a =  document.getElementById('num_one').value;
    let x =  Math.abs(a-100)

    let b =  document.getElementById('num_two').value;
    let y =  Math.abs(b-100)
    
    let c = ''
   

        if( x > y ){
            c = b
        }
        if( x < y ){
            c = a
        }

             document.getElementById('result').innerHTML = c;
             
}
//    a  b 
//   120 140

//    x  y
// -20 -40
//    a  b 
