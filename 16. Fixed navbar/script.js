let navsectionDom = document.getElementById('nav-bar')
let unorderedListDom = document.getElementById('ul-bg')
let smallcontentDom = document.getElementById('smallcontent')
window.addEventListener("scroll", (event)=>{
    let scrollValueY = window.scrollY
    console.log(scrollValueY)
    if (scrollValueY >= 150) {
        navsectionDom.classList.add('shadow-[0_5px_5px_0px_rgba(0,0,0,0.5)]');
        navsectionDom.classList.add('bg-white');
        unorderedListDom.classList.remove('text-white');
        unorderedListDom.classList.add('text-black');
        smallcontentDom.classList.remove('text-white')
        smallcontentDom.classList.add('text-black');
    } else {
        navsectionDom.classList.remove('shadow-[0_5px_5px_0px_rgba(0,0,0,0.5)]');
        navsectionDom.classList.remove('bg-white');
        unorderedListDom.classList.add('text-white');
        unorderedListDom.classList.remove('text-black');
        smallcontentDom.classList.remove('text-black');
        smallcontentDom.classList.add('text-white')
    }
})
function showContent(){
    let smallcontentDom = document.getElementById('smallcontent')
    if(smallcontentDom.style.display === 'none'){
        smallcontentDom.style.display = 'block'
    }
    else{
        smallcontentDom.style.display = 'none'
    }
}