let headDom = document.getElementById('head');
let imageDom = document.getElementById('image-main');
let nameDom = document.getElementById('name-main');
let paragraphDom = document.getElementById('para-main');

let myInfoStorage = [
    {head:'Product 1 - A Wall Mounted Wardrobe', image:'./Assect/product-1.jpeg', name:'Khalid Imran', paragraph:'This is a wall mounted wardrobe'},
    {head:'Product 2 - A Pair of Chair', image:'./Assect/product-2.jpeg', name:'Mayen Bappy', paragraph:'Two pair of colourful chair'},
    {head:'Product 3 - A Small Cabinet', image:'./Assect/product-3.jpeg', name:'Afran Shourov', paragraph:'A small cabinet with large space'}
]

let currentIndex = 0;

function updateSliderContent(){
    let currentArryIndex = myInfoStorage[currentIndex];
    headDom.innerHTML = currentArryIndex.head
    imageDom.src = currentArryIndex.image
    nameDom.innerHTML = currentArryIndex.name
    paragraphDom.innerHTML = currentArryIndex.paragraph
}

// Initialize the slider with the first testimonial
updateSliderContent()

// right button
function rightBtn(){
    if(currentIndex < myInfoStorage.length - 1){
        currentIndex ++
        updateSliderContent()
    }
    else if(currentIndex == myInfoStorage.length - 1){
        currentIndex = 0
        updateSliderContent()
    }
}

// left button
function leftBtn(){
    if(currentIndex > 0){
        currentIndex --
        updateSliderContent()
    }
    else if(currentIndex == 0){
        currentIndex = myInfoStorage.length - 1
        updateSliderContent()
    }
}