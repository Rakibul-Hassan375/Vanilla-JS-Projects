function check(){

    let a = document.getElementById('num_one').value;

    // let c = [];

    // for( let i = b.length-1; i >= 0; i-- ){
    //     c.push(b[i])
    // }
    
    let b = a.split('')
    let c = b.reverse()
    let d = c.join('')
 
    document.getElementById('result').innerHTML = d;

}

//   w e l c o m e
// 0 1 2 3 4 5 6 7
// how , are , you
// h,o,w,a,r,e,
//howareyou
//e.r.a.w.o.h
