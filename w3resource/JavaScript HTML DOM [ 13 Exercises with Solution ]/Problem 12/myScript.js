
let a = document.getElementById('inpt')  // paragraph
let b = document.getElementById('lbl')   // link

function addColor(){
    let c = a.getElementsByTagName('b')

    for( i=0; i<c.length; i++ ){
        c[i].classList.add('highlight')
    }
}

function removeColor(){
    let c = a.getElementsByTagName('b')

    for( i=0; i<c.length; i++ ){
        c[i].classList.remove('highlight')
    }
}

// b.addEventListener( 'mouseover', function(){
    
// } )

// b.addEventListener( 'mouseout', function(){
//     let c = a.getElementsByTagName('b')

//     for( i=0; i<c.length; i++){
//         c[i].classList.remove('highlight')
//     }
// } )