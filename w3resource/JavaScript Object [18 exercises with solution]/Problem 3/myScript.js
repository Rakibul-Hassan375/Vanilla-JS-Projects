let a = { Name: '', Age: '', Color: '' }

function check(){

    let x = document.getElementById('num_one').value
    let y = document.getElementById('num_two').value
    let z = document.getElementById('num_three').value

    a = { Name: x, Age: y, Color: z }

    let e = Object.keys(a)

    let d =  e.length

    document.getElementById('result').innerHTML = e[0] + ' : ' + a.Name + '<br>' +  
                                                  e[1] + ' : ' + a.Age + '<br>' + 
                                                  e[2] + ' : ' + a.Color + '<br>' + 
                                                'The length of the JS object is' + ' ' + d;

    console.log(d)

}

// let key =  'name'
// let value =  'Rakibul'
// let f = {}
// f[key] = value
// console.log(f)