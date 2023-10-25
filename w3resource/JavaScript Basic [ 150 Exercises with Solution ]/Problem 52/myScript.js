function check(){

    let a = document.getElementById('num_one').value;
    let b = a.split('');
    let c = b.slice(1)
    let d = c.sort();
    let e = a.charAt(0).toUpperCase() + d.join('')

    document.getElementById('result').innerHTML = e;

}

// a.charAt(0)
// a.charAt(a.length - 1)
//d.join('');