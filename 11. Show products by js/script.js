let allProductsData = [
    {img: './product-1.jpeg', name:'1', price: 50, catagory: 1},
    {img: './product-2.jpeg', name:'2', price: 50, catagory: 1},
    {img: './product-3.jpeg', name:'3', price: 50, catagory: 1},
    {img: './product-4.jpeg', name:'4', price: 50, catagory: 2},
    {img: './product-5.jpeg', name:'5', price: 50, catagory: 2},
    {img: './product-6.jpeg', name:'6', price: 50, catagory: 2},
    {img: './product-7.jpeg', name:'7', price: 50, catagory: 3},
    {img: './product-8.jpeg', name:'8', price: 50, catagory: 3},
    {img: './product-9.jpeg', name:'9', price: 50, catagory: 3},
    {img: './product-10.jpeg', name:'10', price: 50, catagory: 4},
    {img: './product-11.jpeg', name:'11', price: 50, catagory: 4},
    {img: './product-12.jpeg', name:'12', price: 50, catagory: 4}
]
showProduct()
function showProduct(){
    let showProduts = document.getElementById('product-prime')
    let htmlshow = ''
    allProductsData.map((v,i)=>{
        htmlshow +=
        `
        <div class="border-2 border-black w-[400px]">
            <img class="object-fill h-[400px] w-[400px] border-b-2 border-black" src="${v.img}" alt="">
            <h1 class="flex justify-center text-2xl">${v.name}</h1>
            <h2 class="flex justify-center text-xl">$<span>${v.price}</span></h2>
        </div>
        `
    })
    showProduts.innerHTML = htmlshow
}