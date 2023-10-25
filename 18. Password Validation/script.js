function show(){
    let inputDom = document.getElementById('password');
    if(inputDom.type === "password"){
        inputDom.type = "text";
    }
    else{
        inputDom.type = "password";
    }
}
function check(){
    let inputDom = document.getElementById('password');
    let showLengthDom = document.getElementById('length');

    let term1dom = document.getElementById('term-1');
    let term2dom = document.getElementById('term-2');
    let term3dom = document.getElementById('term-3');
    let term4dom = document.getElementById('term-4');
    let term5dom = document.getElementById('term-5');

    showLengthDom.innerHTML = inputDom.value.length;

// Check 1: Password length >= 5
    if(5 <= inputDom.value.length){
        term1dom.classList.remove('text-[red]')
        term1dom.classList.add('text-[green]')
    }
    else{
        term1dom.classList.remove('text-[green]')
        term1dom.classList.add('text-[red]')
    }

    // Check 2: Password length between 1 and 10
    if(10 >= inputDom.value.length && 1 <= inputDom.value.length){
        term2dom.classList.remove('text-[red]')
        term2dom.classList.add('text-[green]')
    }
    else{
        term2dom.classList.remove('text-[green]')
        term2dom.classList.add('text-[red]')
    }

// Check 3: Contains at least one numeric character
    if(/\d/.test(inputDom.value)){
        term3dom.classList.remove('text-[red]')
        term3dom.classList.add('text-[green]')
    }
    else{
        term3dom.classList.remove('text-[green]')
        term3dom.classList.add('text-[red]')
    }

    // Check 4: Contains at least one special character
    if(/[^A-za-z0-9]/.test(inputDom.value)){
        term4dom.classList.remove('text-[red]')
        term4dom.classList.add('text-[green]')
    }
    else{
        term4dom.classList.remove('text-[green]')
        term4dom.classList.add('text-[red]')
    }

 // Check 5: Contains space
    if(/\s/.test(inputDom.value)){
        term5dom.classList.add('text-[red]')
    }
    else{
        term5dom.classList.add('text-[green]')
    }
}