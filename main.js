const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.menu');
const menuMobileList = document.querySelector('.mobile-menu');
const asideCarrito = document.querySelector('.product-detail');
const carrito = document.querySelector('.navbar-shopping-cart');

const cardContainer = document.querySelector('.cards-container');

navBarEmail.addEventListener('click', toggleDesktopMenu);
menuMobile.addEventListener('click', toggleMobileMenu);
carrito.addEventListener('click', toggleCarrito);

function toggleCarrito(){
    if(asideCarrito.classList.contains('inactive') || menuMobileList.classList.contains('inactive') ){
        desktopMenu.classList.add('inactive');
        menuMobileList.classList.add('inactive');
    }
    asideCarrito.classList.toggle('inactive');
    
}

function toggleDesktopMenu(){
    if(desktopMenu.classList.contains('inactive')){
        asideCarrito.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    if(menuMobileList.classList.contains('inactive')){
asideCarrito.classList.add('inactive');
    }
    menuMobileList.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'screen',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'computer',
    price: 12,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

    // <div class="product-card">
    //     <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    //     <div class="product-info">
    //       <div>
    //         <p>$120,00</p>
    //         <p>Bike</p>
    //       </div>
    //       <figure>
    //         <img src="./icons/bt_add_to_cart.svg" alt="">
    //       </figure>
    //     </div>
    //   </div>

for (product of productList){
    const productCart = document.createElement('div');
    productCart.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$ ' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productFigure = document.createElement('figure');

    const addCart = document.createElement('img') ;
    addCart.setAttribute('src', './icons/bt_add_to_cart.svg' )

    productFigure.appendChild(addCart);

    productDiv.append(productPrice, productName);

    productInfo.append(productDiv, productFigure);

    productCart.append(productImg, productInfo);

    cardContainer.append(productCart);
}