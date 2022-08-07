const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');

const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');


menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu(event){
    const isAsideOpen = !shoppingCartContainer.classList.contains('inactive');

    if ( isAsideOpen ) {
        shoppingCartContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu(){
    const isAsideOpen = !shoppingCartContainer.classList.contains('inactive');
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');

    if ( isAsideOpen ) {
        shoppingCartContainer.classList.add('inactive')
    }
    if( isProductDetailOpen ){
        closeProductDetailAside();
    }

    mobileMenu.classList.toggle('inactive');
}


function toggleCarritoAside(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');    
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');
 
    if( isMobileMenuOpen ){
        mobileMenu.classList.add('inactive');
    }
    if( isDesktopMenuOpen ){
        desktopMenu.classList.add('inactive');
    }
    if( isProductDetailOpen ){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}


function openProductDetailAside(event){    

    displayInfoInProductDetail(event);
    
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}


function displayInfoInProductDetail(event){

    console.log(event)
    console.log( event.path );
    console.log( event.path[1] );
    console.log( event.path[1].childNodes );
    console.log( event.path[1].childNodes[0] );
    console.log( event.path[1].childNodes[0].src );
    
    const new_img_product_detail = event.path[0].src;

    console.log( event.path[1].childNodes[1] );

    const product_info = event.path[1].childNodes[1];

    const price = product_info.querySelector('div p:first-child');
    const name = product_info.querySelector('div p:nth-child(2)');
    console.log(price, typeof(price));

    


    console.log(productDetailContainer);

    const product_detail_img = productDetailContainer.querySelector('img:nth-child(2)');
    product_detail_img.setAttribute('src', new_img_product_detail);
    product_detail_img.setAttribute('alt', name.textContent);

    const product_detail_price = productDetailContainer.querySelector('.product-info p:nth-child(1)');
    product_detail_price.innerText = price.textContent;

    const product_detail_name = productDetailContainer.querySelector('.product-info p:nth-child(2)');
    product_detail_name.innerText = name.textContent;
    
    
    
}


const productList = [];

productList.push({
    name: 'Bike',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 1200,
    image: 'https://images.pexels.com/photos/1682519/pexels-photo-1682519.jpeg?auto=compress&cs=tinysrgb&w=1600'
});
productList.push({
    name: 'Computador',
    price: 2000,
    image: 'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1600'
});
productList.push({
    name: 'Bike',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function renderProducts(arr){

    for(product of arr){
    
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+ product.price;
        
        const productName = document.createElement('p');
        productName.innerText =  product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
    
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
    //END of the for loop
}



renderProducts(productList);