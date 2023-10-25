let a = { Name: '', Age: '', Color: '' }

function check(){

    let x = document.getElementById('num_one').value
    let y = document.getElementById('num_two').value
    let z = document.getElementById('num_three').value

    a = { Name: x, Age: y, Color: z }

    let e = Object.keys(a)

    document.getElementById('result').innerHTML = e[0] + ' : ' + a.Name + '<br>' +  
                                                  e[1] + ' : ' + a.Age + '<br>' + 
                                                  e[2] + ' : ' + a.Color;

}

function dlt(){

    let f = document.getElementById('dltFunction').value

    delete a[f] // age
    // a = Name Color

    let e = Object.keys(a) // name color

    let g = ''

    if( a.Name == undefined ){
        g = e[0] + ' : ' + a.Age + '<br>' + e[1] + ' : ' + a.Color
    }
    else if ( a.Age == undefined ){
        g = e[0] + ' : ' + a.Name + '<br>' + e[1] + ' : ' + a.Color
    }
    else if ( a.Color == undefined ){
        g = e[0] + ' : ' + a.Name + '<br>' + e[1] + ' : ' + a.Age
    }

    document.getElementById('result').innerHTML = g;
    
}
