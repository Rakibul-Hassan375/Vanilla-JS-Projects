function check(){

    let a = document.getElementById('num_one').value
    let b = []
    let c = 0

    for( i=0; i<a.length; i+=2 ){
        b.push(a.substr( i,2 ))
    }
    
    for( i=0; i<b.length; i++){
        if(b[i] == 30){
            c+=1
        }
    }

    if( c == 2){
        x = 'True'
    }
    else{
        x = 'False'
    }

    document.getElementById('result').innerHTML = x;
    console.log(c)

}
// let a = [ 1,2,1,2,5,5,6,3,3,5,5,1 ]
// let b = 0

// for( i=0; i<a.length; i++){
//     if(a[i] == 5){
//         b+=1
//     }
// }

