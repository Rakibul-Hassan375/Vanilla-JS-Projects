function check(){

    let a = document.getElementById('num_one').value
    let b = document.getElementById('num_two').value

    let c = a.split('')
    let d = b.split('')

    let x = Number( c.slice(0,1) )  + Number( d.slice(0,1) )
    let y = Number( c.slice(1,2) )  + Number( d.slice(1,2) )
    let z = Number( c.slice(2,3) )  + Number( d.slice(2,3) )

    let e = x % 10
    let f = y % 10
    let g = z % 10

    document.getElementById('result').innerHTML = e +''+ f +''+ g;
    console.log(c)
    console.log(d)
    console.log(x)
    console.log(y)
    console.log(z)
    console.log(e)
    console.log(f)
    console.log(g)
}