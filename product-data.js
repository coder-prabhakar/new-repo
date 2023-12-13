function productUpload(section, array){
    for(let i = 0; i<array.length; i++){
        // Div Creating
        const newProduct = document.createElement("div");
        // Product Image Creating
        const productImage = document.createElement("div");
        productImage.classList.add("product-image");
        productImage.style.backgroundImage = `url(${array[i].image})`;
        newProduct.appendChild(productImage)
        // Product Name Creating
        const productName = document.createElement("p");
        productName.classList.add("product-name");
        productName.innerHTML = array[i].title;
        newProduct.appendChild(productName)
        // Product Rating Creating
        const productRating = document.createElement('div');
        productRating.classList.add("product-rating");
        let storeStar = "";
        for(let e = 0; e<5; e++){
            if(array[i].rating[e] == 2){
                storeStar += ` <i class="fa-solid fa-star"></i>`;
            } else if(array[i].rating[e] == 1) {
                storeStar += ` <i class="fa-solid fa-star-half-stroke"></i>`;
            } else {
                storeStar += ` <i class="fa-regular fa-star"></i>`;
            }
        }
        productRating.innerHTML = storeStar;
        newProduct.appendChild(productRating);
        // Product Price Creating
        const productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i> ${array[i].price}`;
        newProduct.appendChild(productPrice);
        // Product Button Creating
        const productButton = document.createElement("p");
        productButton.classList.add("product-button");
        productButton.setAttribute("onclick", `addToCart("${array[i].image}","${array[i].title}")`)
        productButton.innerHTML = `Add to Cart <i class="fa-solid fa-cart-shopping"></i>`;
        newProduct.appendChild(productButton);

        section.appendChild(newProduct)
    }
}


const menData = [
        {
            "image":"image/Men_s_Bomber_Puffer_Jacket.png",
            "title":"Men's Bomber Puffer Jacket",
            "rating":"22200",
            "price": "15000"
        },{
            "image":"image/Coreteq_Unisex_Cap.png",
            "title":"Coreteq Unisex Cap",
            "rating":"22210",
            "price": "350"
        },{
            "image":"image/Ben_Martin_Men_s_Jeans.png",
            "title":"Ben Martin Men's Jeans",
            "rating":"22100",
            "price": "1000"
        },{
            "image":"image/PARAGON_Blot_Men__Shoes.png",
            "title":"PARAGON Blot Men Shoes",
            "rating":"22220",
            "price": "1500"
        },{
            "image":"image/TIMEWEAR_Analog_Men_s_Watch.png",
            "title":"TIMEWEAR Analog Men's Watch",
            "rating":"22222",
            "price": "999"
        },{
            "image":"image/Nike_Men_s_Jacket.png",
            "title":"Nike Men's Jacket",
            "rating":"22210",
            "price": "599"
        },{
            "image":"image/ASIAN_Delta-20_Men_s_Shoes.png",
            "title":"ASIAN Delta-20 Men's Shoes",
            "rating":"22222",
            "price": "795"
        },{
            "image":"image/Fire-Boltt_Luxury_Watch.png",
            "title":"Fire Boltt Luxury Watch",
            "rating":"22221",
            "price": "5000"
        },{
            "image":"image/Billford_Men_Jeans.png",
            "title":"Billford Men Jeans",
            "rating":"22221",
            "price": "1100"
        }
];

const menSection = document.querySelector('#men .product-container');
productUpload(menSection,menData);

const womenData = [
    {
        "image":"image/Cotton_Kurti_Tunic_for_Women.png",
        "title":"Cotton Kurti Tunic for Women",
        "rating":"22200",
        "price": "1000"
    },{
        "image":"image/Synthetic_Leather_Sandals.png",
        "title":"Synthetic Leather Sandals",
        "rating":"22222",
        "price": "899"
    },{
        "image":"image/Stretchable_Shapewear_Jeans.png",
        "title":"Stretchable Shapewear Jeans",
        "rating":"22100",
        "price": "1000"
    },{
        "image":"image/TAGAS_Standerd_Western_Top.png",
        "title":"TAGAS Standerd Western Top",
        "rating":"22210",
        "price": "700"
    },{
        "image":"image/Nifty_Women_s_Slim_Jeans.png",
        "title":"Nifty Women's Slim Jeans",
        "rating":"22220",
        "price": "1200"
    },{
        "image":"image/Vendoz_Women_Sandals.png",
        "title":"Vendoz Women Sandals",
        "rating":"22220",
        "price": "450"
    },{
        "image":"image/ADISA_Floral_Print_Bag.png",
        "title":"ADISA Floral Print Bag",
        "rating":"22222",
        "price": "1800"
    },{
        "image":"image/Marc_Loire_Fashion_Sandals.png",
        "title":"Marc Loire Fashion Sandals",
        "rating":"22221",
        "price": "1200"
    },{
        "image":"image/FELISIA_Rayon_Dress.png",
        "title":"FELISIA Rayon Dress",
        "rating":"22222",
        "price": "22000"
    }
];

const womenSection = document.querySelector('#women .product-container');
productUpload(womenSection,womenData);