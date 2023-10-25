function check(){

    let a = document.getElementById('num_one').value
    let b = document.getElementById('num_two').value

    let c = a.split('')
    let d = c.sort()
    let e = d.reverse()

    let f = e[b-1]

    document.getElementById('result').innerHTML = f;
    console.log(c)
    console.log(e)
    console.log(f)
}