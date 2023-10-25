function check(){

    let π = 3.14
    let r = document.getElementById('num_one').value
    let h = document.getElementById('num_two').value
    let v = π *(r*r)*h
    let x = v.split('')


    // for( i=0; i<v.length){
    //     x[i]
    // }

    document.getElementById('result').innerHTML = v;
    console.log(v)
    console.log(x)
    console.log()
}

// Volume of a cylinder : V = πr2h