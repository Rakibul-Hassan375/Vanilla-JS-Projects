let cartShowDom = document.getElementById('cart-show-section')
let pageOneDom = document.getElementById('page-one')
let PageTwoDom = document.getElementById('page-two')
let cartIntotalDom = document.getElementById('intotal')
let cartShowItems = document.getElementById('cart-show-item')
let cartNotificationdom = document.getElementById('cart-count')
let allProductsMain = [ 
    {img: '/Projects/Vanilla JS/5. E-commerce-Furniture/V 1.0.0/Asset/product-1.jpeg', name:'High-Back Bench', price: 5.00, quantity: 1 },
    {img: '/Projects/Vanilla JS/5. E-commerce-Furniture/V 1.0.0/Asset/product-2.jpeg', name:'Albany Table', price: 10.00, quantity: 1 },
    {img: '/Projects/Vanilla JS/5. E-commerce-Furniture/V 1.0.0/Asset/product-3.jpeg', name:'Accent Chair', price: 15.00, quantity: 1 },
   ]
let CARTS = []
showProduct()
getFromLocalStorage()
function showProduct(){
    let showProducts = document.getElementById('product-prime')
    let html = ''
    allProductsMain.map((v,i)=>{
        html +=
        `
        <div id="product-prime" class="product-section">
            <div class="product-section-prime">
                <div class="image-btn-section">
                    <img id="main-img-one" src="${v.img}" alt="sofa">
                    <div class="img-btns">
                        <div class="img-btns-one">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div onclick="addToCart(${i})" class="img-btns-two">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                </div>
                <footer class="product-footer">
                    <p id="main-head-one">${v.name}</p>
                    <h4><span>$</span><span id="main-price-one">${v.price}</span></h4>
                </footer>
            </div>
        </div>`
    })
    showProducts.innerHTML = html
}
function addToCart(i){
    if(cartShowDom.style.display == 'none'){
        cartShowDom.style.display = 'block'
        pageOneDom.classList.add('pointEventOnOff')
        PageTwoDom.classList.add('pointEventOnOff')
    }
    else{
        cartShowDom.style.display = 'none'
    }
    let cartnumber = {img: allProductsMain[i].img, name:allProductsMain[i].name, price: allProductsMain[i].price, quantity: allProductsMain[i].quantity }
    CARTS.push(cartnumber)
    intotal()
    showCartToDom()
}
function showCartToDom(){
    let html = ''
    CARTS.map((v,i)=>{
        html +=
        ` <li class="li-cart-show-items-prime">
            <!-- Image -->
            <img class="cart-img" src="${v.img}">
            <!-- Heading, Price, Remove Button -->
            <div class="cart-h-p-r">
                <div class="cart-foot-head">${v.name}</div>
                <div class="cart-foot-price"><span>$</span>${v.price}</div>
                <button class="cart-button" type="button" onclick="cartRemoveSection(${i})">Remove</button>
            </div>
            <!-- Increase and Decrease -->
            <div class="cart-inc-des">
                <i class="fa-solid fa-angle-up increase-cart" onclick="increaseCart(${i})"></i>
                <div id="cart-show-quantity">${v.quantity}</div>
                <i class="fa-solid fa-angle-down decrease-cart" onclick="decreaseCart(${i})"></i>
            </div>
        </li>`
    })
    cartShowItems.innerHTML = html
    saveToLocalStorage()
}
function increaseCart(i){
    CARTS[i].quantity += 1
    intotal()
    showCartToDom()
}
function decreaseCart(i){
    CARTS[i].quantity -= 1
    if(CARTS[i].quantity<0){
        CARTS[i].quantity=0
    }
    intotal()
    showCartToDom()
}
function intotal(){
    let a = 0
    CARTS.map((v,i)=>{
        a += v.quantity*v.price
    })
    cartIntotalDom.innerHTML = 'Total:'+ ' ' + '$' + ' ' + a
    cartNotification()
}
function  cartNotification(){
    let a = 0
    CARTS.map((v,i)=>{
        a += v.quantity
    })
    cartNotificationdom.innerHTML = a
}
function cartRemoveSection(i){
    CARTS.splice(i,1)
    intotal()
    showCartToDom()
}
function openToCart(){
    if(cartShowDom.style.display == 'none'){
        cartShowDom.style.display = 'block'
        pageOneDom.classList.add('pointEventOnOff')
        PageTwoDom.classList.add('pointEventOnOff')
    }
    else{
        cartShowDom.style.display = 'none'
    }
}
function CloseCartShowSection(){
    if(cartShowDom.style.display == 'block'){
        cartShowDom.style.display = 'none'
        pageOneDom.classList.remove('pointEventOnOff')
        PageTwoDom.classList.remove('pointEventOnOff')
    }
    else{
        cartShowDom.style.display = 'block'
    }
}



function saveToLocalStorage(){
    localStorage.setItem('Cart_Info_Save', JSON.stringify(CARTS))
}
function getFromLocalStorage(){
    let a = localStorage.getItem('Cart_Info_Save')
    if(a !== null){
        CARTS = JSON.parse(a)
        showCartToDom()
        intotal()
    }
}