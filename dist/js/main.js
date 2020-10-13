$(function() {
    let products = [{
            id: 1,
            name: "Buck Deer Hand Painted Outdoor Garden Statue Decoration",
            price: "40.00",
            img: "//cdn.shopify.com/s/files/1/0278/0859/6071/products/47_1024x1024.png?v=1575571159",
            gallery: [
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/22_1024x1024.png?v=1575571159",
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/47_1024x1024.png?v=1575571159",
            ],
            category: "decor",
            type: "dress",
            tag: ["Vintage", "Awesome", "Summer"],
            color: "Red",
            vendor: "Gap",
        },
        {
            id: 2,
            name: "Matte Winter White Glittered Star Shatterproof Christmas Ornaments",
            price: "40.00",
            img: "//cdn.shopify.com/s/files/1/0278/0859/6071/products/24_1024x1024.png?v=1575571106",
            gallery: [
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/24_1024x1024.png?v=1575571106",
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/49_1024x1024.png?v=1575571106",
            ],
            category: "decor",
            type: "jeans",
            tag: ["Awesome", "Summer", "Beachwear"],
            color: "Orange",
            vendor: "Guess",

        },
        {
            id: 3,
            name: "Decorated Wreath 40 cm",
            price: "40.00",
            img: "//cdn.shopify.com/s/files/1/0278/0859/6071/products/4_1024x1024.png?v=1575571462",
            gallery: [
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/29_1024x1024.png?v=1575571462",
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/4_1024x1024.png?v=1575571462",
            ],
            category: "decor",
            type: "polo",
            tag: ["Summer", "Beachwear", "Winter"],
            color: "Blue",
            vendor: "Lacoste",

        },
        {
            id: 4,
            name: "Decorated Christmas Decoration 20cm",
            price: "40.00",
            img: "//cdn.shopify.com/s/files/1/0278/0859/6071/products/1_1024x1024.png?v=1575571448",
            gallery: [
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/26_1024x1024.png?v=1575571448",
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/1_1024x1024.png?v=1575571448",
            ],
            category: "decor",
            type: "shirt",
            tag: ["Beachwear", "Winter", "Shorts"],
            color: "Blue",
            vendor: "Levi's",

        },
        {
            id: 5,
            name: "Decorated Christmas Decoration",
            price: "40.00",
            img: "//cdn.shopify.com/s/files/1/0278/0859/6071/products/2_1024x1024.png?v=1575571449",
            gallery: [
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/27_1024x1024.png?v=1575571449",
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/2_1024x1024.png?v=1575571449",
            ],
            category: "decor",
            type: "shoes",
            tag: ["Winter", "Shorts", "Cool"],
            color: "Grey",
            vendor: "Polo",

        },
        {
            id: 6,
            name: "Brown and Green Country Rustic Deer Christmas Tabletop Decoration",
            price: "40.00",
            img: "//cdn.shopify.com/s/files/1/0278/0859/6071/products/15_1024x1024.png?v=1575571171",
            gallery: [
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/40_1024x1024.png?v=1575571171",
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/15_1024x1024.png?v=1575571171",
            ],
            category: "decor",
            type: "sweater",
            tag: ["Nice", "Shorts", "Cool"],
            color: "Grey",
            vendor: "Zara",
        },
        {
            id: 7,
            name: "Christmas Decorations",
            price: "40.00",
            img: "//cdn.shopify.com/s/files/1/0278/0859/6071/products/10_1024x1024.png?v=1575571190",
            gallery: [
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/35_1024x1024.png?v=1575571190",
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/10_1024x1024.png?v=1575571190",
            ],
            category: "decor",
            type: "dress",
            tag: ["Nice", "Vintage", "Cool"],
            color: "Blue",
            vendor: "Gap",

        },
        {
            id: 8,
            name: "Ball",
            price: "248.00",
            img: "//cdn.shopify.com/s/files/1/0278/0859/6071/products/1_f42e37b9-1065-462a-889d-cf0cf54b15c4_1024x1024.jpg?v=1581581844",
            gallery: [
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/1_f42e37b9-1065-462a-889d-cf0cf54b15c4_1024x1024.jpg?v=1581581844",
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/2_c8503d5d-05b8-430c-a4a7-ed0d2226d605_1024x1024.jpg?v=1581581844",
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/3_1024x1024.jpg?v=1581581844",
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/4_1024x1024.jpg?v=1581581844",
            ],
            category: "trees",
            type: "jeans",
            tag: ["Nice", "Vintage", "Awesome"],
            vendor: "Guess",
            color: "Grey"

        },
        {
            id: 9,
            name: "Baseball Bag",
            price: "25.89",
            img: "//cdn.shopify.com/s/files/1/0278/0859/6071/products/baseball_bag_600x.jpg?v=1581669086",
            gallery: [
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/baseball_bag_600x.jpg?v=1581669086",
            ],
            category: "trees",
            type: "polo",
            tag: ["Summer", "Vintage", "Awesome"],
            color: "Grey",
            vendor: "Lacoste",

        },
        {
            id: 10,
            name: "Baseball Ball",
            price: "25.89",
            img: "//cdn.shopify.com/s/files/1/0278/0859/6071/products/baseball_ball_600x.jpg?v=1581669104",
            gallery: [
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/baseball_ball_600x.jpg?v=1581669104",
            ],
            category: "trees",
            type: "shirt",
            tag: ["Summer", "Beachwear", "Awesome"],
            color: "Light Blue",
            vendor: "levi's",

        },
        {
            id: 11,
            name: "Baseball Gloves",
            price: "25.89",
            img: "//cdn.shopify.com/s/files/1/0278/0859/6071/products/Baseball_Gloves_600x.jpg?v=1581669116",
            gallery: [
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/Baseball_Gloves_600x.jpg?v=1581669116",
            ],
            category: "trees",
            type: "shoes",
            tag: ["Summer", "Beachwear", "Winter"],
            color: "Orange",
            vendor: "Polo",

        },
        {
            id: 12,
            name: "Baseball Shoes",
            price: "25.89",
            img: "//cdn.shopify.com/s/files/1/0278/0859/6071/products/baseball_Shoes_600x.jpg?v=1581669129",
            gallery: [
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/baseball_Shoes_600x.jpg?v=1581669129",
            ],
            category: "trees",
            type: "sweater",
            tag: ["Shorts", "Beachwear", "Winter"],
            color: "Orange",
            vendor: "Zara",

        },
        {
            id: 13,
            name: "Basket",
            price: "29.00",
            img: "//cdn.shopify.com/s/files/1/0278/0859/6071/products/Basket_600x.jpg?v=1581493204",
            gallery: [
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/Basket_600x.jpg?v=1581493204",
            ],
            category: "trees",
            type: "dress",
            tag: ["Shorts", "Cool", "Winter"],
            color: "Orange",
            vendor: "Gap",

        },
        {
            id: 14,
            name: "Baseball Ball",
            price: "29.00",
            img: "//cdn.shopify.com/s/files/1/0278/0859/6071/products/Basketball_Ball_600x.jpg?v=1581493225",
            gallery: [
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/Basketball_Ball_600x.jpg?v=1581493225",
            ],
            category: "trees",
            type: "jeans",
            tag: ["Shorts", "Cool", "Nice"],
            color: "Orange",
            vendor: "Guess",
        },
        {
            id: 15,
            name: "Baseball Clothing",
            price: "29.00",
            img: "//cdn.shopify.com/s/files/1/0278/0859/6071/products/Basketball_Clothing_600x.jpg?v=1581493276",
            gallery: [
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/Basketball_Clothing_600x.jpg?v=1581493276",
            ],
            category: "trees",
            type: "polo",
            tag: ["Vintage", "Cool", "Nice"],
            color: "Red",
            vendor: "Lacoste",
        },
        {
            id: 16,
            name: "Cream and Gold Gown Christmas Tree Topper",
            price: "40.00",
            img: "//cdn.shopify.com/s/files/1/0278/0859/6071/products/17_1024x1024.png?v=1575571425",
            gallery: [
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/42_1024x1024.png?v=1575571425",
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/17_1024x1024.png?v=1575571425",
            ],
            category: "favorites",
            type: "shirt",
            tag: ["Vintage", "Awesome", "Nice"],
            color: "Blue",
            vendor: "Levi's",
        },
        {
            id: 17,
            name: "Standing Santa Gnomes with Red and Gray Sweater Christmas Decoration",
            price: "40.00",
            img: "//cdn.shopify.com/s/files/1/0278/0859/6071/products/14_1024x1024.png?v=1575571147",
            gallery: [
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/39_1024x1024.png?v=1575571147",
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/14_1024x1024.png?v=1575571147",
            ],
            category: "favorites",
            type: "sweater",
            tag: ["Vintage", "Awesome", "Summer"],
            color: "Blue",
            vendor: "Polo",
        },
        {
            id: 18,
            name: "Clear Transparent Shatterproof Christmas Ball Ornament",
            price: "40.00",
            img: "//cdn.shopify.com/s/files/1/0278/0859/6071/products/9_1024x1024.png?v=1575571390",
            gallery: [
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/34_1024x1024.png?v=1575571390",
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/9_1024x1024.png?v=1575571390",
            ],
            category: "favorites",
            type: "shoes",
            tag: ["Winter", "Awesome", "Summer"],
            color: "Grey",
            vendor: "Zara",

        },
        {
            id: 19,
            name: "Shatterproof Christmas Ornament",
            price: "40.00",
            img: "//cdn.shopify.com/s/files/1/0278/0859/6071/products/6_1024x1024.png?v=1575571536",
            gallery: [
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/31_1024x1024.png?v=1575571536",
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/6_1024x1024.png?v=1575571536",
            ],
            category: "favorites",
            type: "dress",
            tag: ["Winter", "Shorts", "Summer"],
            color: "Blue",
            vendor: "Guess",

        },
        {
            id: 20,
            name: "Club Pack of 12 Brown Plush Reindeer Antler Snap-On Headband Accessories",
            price: "40.00",
            img: "//cdn.shopify.com/s/files/1/0278/0859/6071/products/13_1024x1024.png?v=1575571406",
            gallery: [
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/38_1024x1024.png?v=1575571406",
                "//cdn.shopify.com/s/files/1/0278/0859/6071/products/13_1024x1024.png?v=1575571406",
            ],
            category: "favorites",
            type: "polo",
            tag: ["Winter", "Shorts", "Cool"],
            color: "Blue",
            vendor: "Polo",

        },
    ];

    // create a click event for the dollar button in the main page
    $("body").on("click", ".dollar", function() {
        $(".currency_val").text("$ US Dollars");
        $(".dollar").addClass("active");
        $(".euro").removeClass("active");
        $(".britishPounds").removeClass("active");
    });
    $("body").on("click", ".euro", function() {
        $(".currency_val").text("€ Euro");
        $(".dollar").removeClass("active");
        $(".euro").addClass("active");
        $(".britishPounds").removeClass("active");
    });
    $("body").on("click", ".britishPounds", function() {
        $(".currency_val").text("£ British Pounds");
        $(".dollar").removeClass("active");
        $(".euro").removeClass("active");
        $(".britishPounds").addClass("active");
    });

    // Scroll : toTop , header, add product
    $(window).scroll(function() {
        const headerTop = $("html").scrollTop();
        if (headerTop > 245) {
            $(".header-2").fadeIn();
        } else {
            $(".header-2").fadeOut();
        }

        if (headerTop > 530) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }

        if (headerTop > 850) {
            $(".justify-product").fadeIn();
        } else {
            $(".justify-product").fadeOut();
        }
    });

    // Time lag to top
    $("#toTop").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    // list filter products ---> owl-carousel
    const decors = products.filter(val => val.category === "decor");
    const trees = products.filter(val => val.category === "trees");
    const favorites = products.filter(val => val.category === "favorites");
    let cart = [];
    renderProduct(decors, ".owl_2");
    renderProduct(trees, ".owl_3");
    renderProduct(favorites, ".owl_4");

    // able the check button if agree with term
    checkOutBtn("#check-agree", ".check-out");
    checkOutBtn("#check-agree2", ".check-out2");
    checkOutBtn("#check-agree3", ".check-out3");
    checkOutBtn("#check-agree4", ".check-out4");
    $("body").on("change", "#check-agreeView", function() {
        if ($("#check-agreeView").prop("checked") === true) {
            $(".check-outView").prop("disabled", false);
            $(".check-outView").addClass("opacity-tt");
        } else {
            $(".check-outView").prop("disabled", true);
            $(".check-outView").removeClass("opacity-tt");
        }
    });

    $(".check-out").click(function(e) {
        e.preventDefault();
        window.location.href = "/check-out.html";
    });
    $(".check-out2").click(function(e) {
        e.preventDefault();
        window.location.href = "/check-out.html";
    });
    $(".check-out3").click(function(e) {
        e.preventDefault();
        window.location.href = "/check-out.html";
    });
    $(".check-out4").click(function(e) {
        e.preventDefault();
        window.location.href = "/check-out.html";
    });
    $(".logo").click(function(e) {
        e.preventDefault();
        window.location.href = "/";
    });
    $(".btn-create_account").click(function(e) {
        e.preventDefault();
        window.location.href = "/account.html";
    });
    $(".no-product").click(function(e) {
        e.preventDefault();
        window.location.href = "/cart.html";
    });
    $(".item-img").click(function(e) {
        e.preventDefault();
        window.location.href = "/products.html";
        localStorage.setItem("filter_products", JSON.stringify(products))
    });
    $(".btn_shopProduct").click(function(e) {
        e.preventDefault();
        window.location.href = "/products.html";
        localStorage.setItem("filter_products", JSON.stringify(products))
    });
    $(".btn-viewCart").click(function(e) {
        e.preventDefault();
        window.location.href = "/cart.html";
    });

    // owl-carousel
    $(".owl_1.owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 10000,
    });
    $(".owl_2.owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        navText: [`<i class="fas fa-chevron-left"></i>`, `<i class="fas fa-chevron-right"></i>`],
    });
    $(".owl_3.owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        navText: [`<i class="fas fa-chevron-left"></i>`, `<i class="fas fa-chevron-right"></i>`],
    });
    $(".owl_4.owl-carousel").owlCarousel({
        items: 5,
        margin: 20,
    });

    // lightbox img 
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
    })

    // checked-dropdown
    $(".check-dropdown").click(function(e) {
        e.preventDefault();
        $(".dropdown-categories").slideToggle(500);
    });
    $(".btn-cart").click(function(e) {
        e.preventDefault();
        $(".dropdown-cart").slideToggle(500);
    });
    $(".check-dropdown2").click(function(e) {
        e.preventDefault();
        $(".dropdown-inner").slideToggle(200);
    });
    $(".setting-check").click(function(e) {
        e.preventDefault();
        $(".dropdown-inner2").slideToggle(200);
    });
    $(".btn-user").click(function(e) {
        e.preventDefault();
        $(".dropdown-user").slideToggle(500);
    });
    $("body").on("click", ".check-ttt2", function() {
        $(".additional-tt").slideToggle(500);
    });
    $("body").on("click", ".check-ttt", function() {
        $(".description-tt").slideToggle(500);
    });

    //search: filter the search result and render it for auto search
    searchGroup(".search-item", ".search-list", products);
    searchGroup(".search-item-2", ".search-list-2", products);

    // take data localStorage
    const products_inCart_new = localStorage.getItem("products_inCart") || [];
    const products_inView = products_inCart_new.length ? JSON.parse(products_inCart_new) : [];
    var products_inCart = [...products_inView];
    renderFullCart(products_inCart);

    const contact_info_raw = localStorage.getItem("contact_information") || {};
    const contact_info_get = contact_info_raw.length ? JSON.parse(contact_info_raw) : {};
    var contact_information = {...contact_info_get };

    const viewItem_get = localStorage.getItem("viewItem") || {};
    const viewItem = viewItem_get.length ? JSON.parse(viewItem_get) : {};

    // Add products ---> Cart
    $("body").on("click", ".add_product", function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(".modal").show();
        const currentId = $(this).parents(".item").data("id");
        const currentItem = products.find(val => val.id === currentId);
        const idx = products_inCart.findIndex(val => val.id === currentId);
        if (idx === -1) {
            currentItem.quantity = 1;
            currentItem.total = currentItem.quantity * currentItem.price;
            products_inCart.push(currentItem);
            renderShowModal(currentItem);
        } else {
            products_inCart[idx].quantity += 1;
            renderShowModal(products_inCart[idx]);
        }

        // luu localStorage
        localStorage.setItem("products_inCart", JSON.stringify(products_inCart));
        renderFullCart(products_inCart);
    });

    // close modal
    $(".close").click(function(e) {
        e.preventDefault();
        $(".modal").hide();
    });

    // btn-delete products
    $("body").on("click", ".delete-products", function(e) {
        e.stopPropagation();
        let cartId = $(this).parents(".product-content").data("id");
        cart = products_inCart.find(val => val.id === cartId);
        const idx = products_inCart.findIndex(val => val.id === cartId);
        if (cart.quantity > 1) {
            cart.quantity -= 1;
        } else {
            products_inCart.splice(idx, 1);
        }

        // save localStorage
        localStorage.setItem("products_inCart", JSON.stringify(products_inCart));
        renderFullCart(products_inCart);
    });
    $(".clear_shopCart").click(function(e) {
        e.preventDefault();
        products_inCart = [];

        // save localStorage
        localStorage.setItem("products_inCart", JSON.stringify(products_inCart));
        renderFullCart(products_inCart);
    });

    // btn update products
    $("body").on("click", ".update_cart", function() {
        $.each($('.val-quantity'), (index, value) => {
            let valQuantity = $(value).val();
            let cartId = $(value).parents(".product-content").data("id");
            const idx = products_inCart.findIndex(val => val.id === cartId);
            products_inCart[idx].quantity = valQuantity;
        });

        // save localStorage
        localStorage.setItem("products_inCart", JSON.stringify(products_inCart));
        renderFullCart(products_inCart);
    });

    // btn add product in page view-product
    $("body").on("click", ".add_product2", function() {
        let cartId = $(".val-quantity2").parents(".tt-right").data("id");
        let val_quantity = $(".val-quantity2").val();
        const currentItem = products.find(val => val.id === cartId);
        const idx = products_inCart.findIndex(val => val.id === cartId);
        if (idx === -1) {
            currentItem.quantity = val_quantity;
            currentItem.total = currentItem.quantity * currentItem.price;
            products_inCart.push(currentItem);
        } else {
            products_inCart[idx].quantity = val_quantity;
        }
        // $(".val-quantity2").val("1");

        // luu localStorage
        localStorage.setItem("products_inCart", JSON.stringify(products_inCart));
        renderFullCart(products_inCart);
    });

    //input: check addClass in page check-out
    addClassInput("#ip1", ".email-phone");
    addClassInput("#ip2", ".first_name");
    addClassInput("#ip3", ".last_name");
    addClassInput("#ip4", ".address_tt");
    addClassInput("#ip5", ".apartment_tt");
    addClassInput("#ip6", ".city_tt");
    addClassInput("#ip7", ".country_tt");
    addClassInput("#ip8", ".postal_tt");

    // create a click effect
    slideToggle(".tt-title", ".collapse_by");
    slideToggle(".tt-title1", ".options_type");
    slideToggle(".tt-title2", ".options_color");
    slideToggle(".tt-title3", ".options_size");
    slideToggle(".tt-title4", ".options_price");
    slideToggle(".tt-title5", ".options_vendor");
    slideToggle(".tt-title6", ".options_tag");

    // increase or decrease quantities of the product
    $("body").on("click", ".btn_minus", function() {
        let val_quantity = $(this).parents(".plusMinus_quantity ").parent().find(".val-quantity").val();
        if (val_quantity > 1) {
            val_quantity -= 1;
        }
        $(this).parents(".plusMinus_quantity ").parent().find(".val-quantity").val(val_quantity);
    });
    $("body").on("click", ".btn_plus", function() {
        let val_quantity = $(this).parents(".plusMinus_quantity ").parent().find(".val-quantity").val();
        if (val_quantity < 10) {
            val_quantity++;
        }
        $(this).parents(".plusMinus_quantity ").parent().find(".val-quantity").val(val_quantity);
    });
    $("body").on("click", ".btn_minus2", function() {
        let val_quantity = $(".val-quantity2").val();;
        if (val_quantity > 1) {
            val_quantity -= 1;
        }
        $(".val-quantity2").val(val_quantity);
    });
    $("body").on("click", ".btn_plus2", function() {
        let val_quantity = $(".val-quantity2").val();
        if (val_quantity < 10) {
            val_quantity++;
        }
        $(".val-quantity2").val(val_quantity);
    });

    $(".product_tt").click(function(e) {
        e.preventDefault();
        window.location.href = '/products.html';
        // save the all product to local storage
        localStorage.setItem("filter_products", JSON.stringify(products));
    });

    if (window.location.pathname == "/viewProduct.html") {
        const relatedProducts = products.filter(val => val.category === viewItem.category);
        renderProduct(relatedProducts, ".owl_5");
        $(".owl_5.owl-carousel").owlCarousel({
            items: 4,
            loop: true,
            margin: 40,
            dots: false,
            nav: true,
            autoplay: true,
            autoplayTimeout: 4000,
            navText: [`<i class="fas fa-chevron-left"></i>`, `<i class="fas fa-chevron-right"></i>`],
        });
        renderContentProduct(viewItem);
    }

    // renderProduct va filterProduct
    if (window.location.pathname == "/products.html") {
        const filter_raw = localStorage.getItem("filter_products") || [];
        const filter_get = filter_raw.length ? JSON.parse(filter_raw) : [];
        let filter_list = [...filter_get];
        select_ft = 0;
        type_ft = 0;
        color_ft = 0;
        size_ft = 0;
        price_ft = 0;
        vendor_ft = 0;
        tags_ft = 0;
        grid_ft = 2;
        filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);

        // render products in page: Products ---> gridView render
        $(".show-one").click(function(e) {
            e.preventDefault();
            $(".click-show").removeClass("opacity-tt");
            $(this).addClass("opacity-tt");
            grid_ft = 1;
            filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
        });
        $(".show-two").click(function(e) {
            e.preventDefault();
            $(".click-show").removeClass("opacity-tt");
            $(this).addClass("opacity-tt");
            grid_ft = 2;
            filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
        });
        $(".show-three").click(function(e) {
            e.preventDefault();
            $(".click-show").removeClass("opacity-tt");
            $(this).addClass("opacity-tt");
            grid_ft = 3;
            filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
        });

        // filter type 
        $(".options_type a").click(function(e) {
            e.preventDefault();
            $(".options_type a").not(this).removeClass("active");
            $(this).toggleClass("active");
            let type_ft = $(this).text();
            switch (type_ft) {
                case "Dress":
                    type_ft = 1;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "Jeans":
                    type_ft = 2;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "Polo":
                    type_ft = 3;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "Shirt":
                    type_ft = 4;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "Shoes":
                    type_ft = 5;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "Sweater":
                    type_ft = 6;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;
                default:
                    type_ft = 0;
                    break;
            }
            if ($(".options_type").find("a.active").length === 0) {
                type_ft = 0;
                filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
            }
        });

        // filter color
        $(".options_color a").click(function(e) {
            e.preventDefault();
            $(".options_color a").not(this).removeClass("active");
            $(this).toggleClass("active");
            let color_ft = $(this).text();
            switch (color_ft) {
                case "Blue":
                    color_ft = 1;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "Green":
                    color_ft = 2;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "Grey":
                    color_ft = 3;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "Light Blue":
                    color_ft = 4;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "Orange":
                    color_ft = 5;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "Red":
                    color_ft = 6;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;
                default:
                    color_ft = 0;
                    break;
            }
            if ($(".options_color").find("a.active").length === 0) {
                color_ft = 0;
                filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
            }
        });

        // filter size
        $(".options_size a").click(function(e) {
            e.preventDefault();
            $(".options_size a").not(this).removeClass("active");
            $(this).toggleClass("active");
            let size_ft = $(this).text();
            switch (size_ft) {
                case "S":
                    size_ft = 1;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "M":
                    size_ft = 2;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "L":
                    size_ft = 3;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;
                default:
                    size_ft = 0;
                    break;
            }
            if ($(".options_size").find("a.active").length === 0) {
                size_ft = 0;
                filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
            }
        });

        // filter price
        $(".options_price a").click(function(e) {
            e.preventDefault();
            $(".options_price a").not(this).removeClass("active");
            $(this).toggleClass("active");
            let price_ft = $(this).text();
            switch (price_ft) {
                case "$10-$100":
                    price_ft = 1;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "$300-$400":
                    price_ft = 2;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "$400-$500":
                    price_ft = 3;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;
                default:
                    price_ft = 0;
                    break;
            }
            if ($(".options_price").find("a.active").length === 0) {
                select_ft = 0;
                filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
            }
        });

        // filter vendor
        $(".options_vendor a").click(function(e) {
            e.preventDefault();
            $(".options_vendor a").not(this).removeClass("active");
            $(this).toggleClass("active");
            let vendor_ft = $(this).text();
            switch (vendor_ft) {
                case "Gap":
                    vendor_ft = 1;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "Guess":
                    vendor_ft = 2;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "Lacoste":
                    vendor_ft = 3;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "Levi's":
                    vendor_ft = 4;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "Polo":
                    vendor_ft = 5;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "Zara":
                    vendor_ft = 6;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;
                default:
                    vendor_ft = 0;
                    break;
            }
            if ($(".options_vendor").find("a.active").length === 0) {
                vendor_ft = 0;
                filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
            }
        });

        // filter vendor
        $(".options_tag a").click(function(e) {
            e.preventDefault();
            $(".options_tag a").not(this).removeClass("active");
            $(this).toggleClass("active");
            let tags_ft = $(this).text();
            switch (tags_ft) {
                case "Vintage":
                    tags_ft = 1;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "Summer":
                    tags_ft = 2;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "Beachwear":
                    tags_ft = 3;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "Winter":
                    tags_ft = 4;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "Shorts":
                    tags_ft = 5;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;

                case "Cool":
                    tags_ft = 6;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;
                case "Nice":
                    tags_ft = 7;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;
                default:
                    tags_ft = 0;
                    break;
            }
            if ($(".options_tag").find("a.active").length === 0) {
                select_ft = 0;
                filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
            }
        });
        $(".product-select-filters").change(function(e) {
            switch ($(this).val()) {
                case "manual":
                    select_ft = 0;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;
                case "Name-Ascending":
                    select_ft = 1;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;
                case "Name-Descending":
                    select_ft = 2;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;
                case "Price-Ascending":
                    select_ft = 3;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;
                case "Price-Descending":
                    select_ft = 4;
                    filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, filter_list);
                    break;
            }
        });
    }

    // catch click event to product information
    $("body").on("click", ".btn-view .img-box", function(e) {
        e.preventDefault();
        window.location.href = "/viewProduct.html";
        let viewId = $(this).parents(".btn-view").data("id");
        const viewItem = products.find(val => val.id === viewId);
        localStorage.setItem("viewItem", JSON.stringify(viewItem));
        renderContentProduct(viewItem);
    });
    $("body").on("click", ".tt-product_name", function(e) {
        e.preventDefault();
        window.location.href = "/viewProduct.html";
        let viewId = $(this).parents(".btn-view").data("id");
        const viewItem = products.find(val => val.id === viewId);
        localStorage.setItem("viewItem", JSON.stringify(viewItem));
        renderContentProduct(viewItem);
    });

    // check in page viewProduct
    $("body").on("click", ".check-outView", function() {
        // window.location.href = "/check-out.html";
        let val_quantity = $(".val-quantity2").val();
        viewItem.quantity = val_quantity;
        localStorage.setItem("viewItem", JSON.stringify(viewItem));
        renderCheckCart(viewItem);
    });

    // catch click event on image
    $("body").on("click", ".btn-gallery", function() {
        $(".btn-gallery").removeClass("opacity-tt2");
        $(this).addClass("opacity-tt2");
        let imgPath = $(this).attr('src');
        $("#main-img").attr('src', imgPath);
        $("#main-img").attr('data-zoom-image', imgPath);
    });


    // render sumTotal va gan method ban dau
    calcSumTotal(products_inCart, 20);

    // catch the event in the page checkOut
    $("body").on("click", ".checkOut_content .continue-btn", function() {

        $(".continue-btn").empty();
        $(`<i class="fas fa-spinner"></i>`).appendTo(".continue-btn");

        // Delays loading time
        setTimeout(() => {
            $(window).scrollTop(0);
            $(".continue-btn").empty();
            $(`<span>Continue to shipping</span>`).appendTo(".continue-btn");

            let all_input = $(this).parents(".form_group").find("input:text").parent().not("#ip2").not("#ip5");

            let email_phone_input = $("#ip1").val();
            let firstName_input = $("#ip2").val().trim();
            let lastName_input = $("#ip3").val().trim();
            let address_input = $("#ip4").val().trim();
            let apartment_input = $("#ip5").val().trim();
            let city_input = $("#ip6").val().trim();
            let country_input = $("#ip7").val().trim();
            let code_input = $("#ip8").val().trim();

            // Check if the input is empty
            all_input.find("input").removeClass("wrong");
            [...all_input.find("input")].map(input => {
                if (input.value.trim().length === 0) {
                    all_input.find(input).addClass("wrong");
                    all_input.find(input).parent().find(".error-label").css("display", "block");
                }
            })

            // Check input email phone
            if (!isNaN(email_phone_input.trim())) {
                if (!email_phone_input.trim().match(/(09|01[2|6|8|9])+([0-9]{8})\b/)) {
                    $("#ip1").addClass("wrong");
                    $("#ip1").parent().find(".error-label").css("display", "block");
                }
            } else if (!email_phone_input.trim().match(/^[a-z][a-z0-9_\.]{0,}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm)) {
                $("#ip1").addClass("wrong");
                $("#ip1").parent().find(".error-label").css("display", "block");

            } else {
                $("#ip1").parent().find(".error-label").css("display", "none");
            }

            // save entered information
            if (all_input.find("input.wrong").length === 0) {
                contact_information = {
                    id: $(".email-phone input").val().trim(),
                    lastName: lastName_input,
                    firstName: firstName_input,
                    address: address_input,
                    apartment: apartment_input,
                    city: city_input,
                    postalCode: code_input,
                };
                // if ($("#save").prop("checked") === true) {
                localStorage.setItem("contact_information", JSON.stringify(contact_information));
                // }
                $(".checkOut_content").hide();
                $(".checkOut_step").show();
                $(".shipping-tt").css("color", "#333");
                $(".information-tt").css("color", "#34AE6E");
                $(".information-tt").addClass("opacity-tt");
                renderPayInformation(contact_information);
            };

        }, 2000);
    });
    $("body").on("click", ".checkOut_step .continue-btn", function(e) {
        e.preventDefault();
        $(".continue-btn").empty();
        $(`<i class="fas fa-spinner"></i>`).appendTo(".continue-btn");

        setTimeout(() => {
            $(".continue-btn").empty();
            $(`<span>Continue to shipping</span>`).appendTo(".continue-btn");
            $(".shipping-option").hide();
            $(".tt-payment").show();
        }, 2000);
    });
    $("body").on("click", ".breadcrumb .information-tt", function() {
        $(".checkOut_content").show();
        $(".checkOut_step").hide();
    });

    // initialization method cho shipping
    $("body").on("click", ".method", function() {
        $(".select-check").removeClass("check-tt");
        $(this).find(".select-check").addClass("check-tt");
        let method = $(this).find(".method-price").data("price");
        calcSumTotal(products_inCart, method);
    });

    // zoom img in page viewProduct
    $('#zoom-img').zoom();
});

// function renderPayInformation
function renderPayInformation(contact_information) {
    $(".checkOut_step").empty();
    $(`
    <div class="shipping-information">
        <div class="shipping-contact">
            <div class="contact-info row">
                <div class="col-lg-2">
                    <p class="title">Contact</p>
                </div>
                <div class="col-lg-8 info">
                    <p class="info-contact">${contact_information.id}</p>
                </div>
                <div class="col-lg-2 change flex">
                    <a class="change-btn" href="">Change</a>
                </div>
            </div>
            <div class="shipping-to row">
                <div class="col-lg-2">
                    <p class="title">Ship to</p>
                </div>
                <div class="col-lg-8 info">
                    <ul class="info-shipping">
                        <li><span>Name : </span> ${contact_information.firstName} ${contact_information.lastName}</li>
                        <li><span>Address : </span> ${contact_information.address}</li>
                        <li><span>Apartment : </span> ${contact_information.apartment}</li>
                        <li><span>City : </span> ${contact_information.city}</li>
                        <li><span>Postal : </span> ${contact_information.postalCode}</li>
                    </ul>
                </div>
                <div class="col-lg-2 change flex">
                    <a class="change-btn" href="">Change</a>
                </div>
            </div>
        </div>
        <div class="shipping-option">
            <h4 class="title">Shipping method</h4>
            <div class="shipping-method">
                <div class="method row flex a-center j-between">
                    <div class="col-lg-1 select-check check-tt"></div>
                    <div class="col-lg-9 method-name">
                        <p>Normal Shipping</p>
                    </div>
                    <div class="col-lg-2 method-price" data-price="20">
                        $20.00
                    </div>
                </div>
                <div class="method row flex a-center j-between">
                    <div class="col-lg-1 select-check"></div>
                    <div class="col-lg-9 method-name">
                        <p>Express Shipping</p>
                    </div>
                    <div class="col-lg-2 method-price" data-price="40">
                        $40.00
                    </div>
                </div>
                <div class="method row flex a-center j-between">
                    <div class="col-lg-1 select-check"></div>
                    <div class="col-lg-9 method-name">
                        <p>
                            <span>Super Express </span>
                        </p>
                    </div>
                    <div class="col-lg-2 method-price" data-price="80">
                        $80.00
                    </div>
                </div>
            </div>
        </div>
        <div class="tt-payment">
            <div class="payment-option">
                <h4 class="title_tt">Payment</h4>
                <p class="info_tt">All transactions are secure and encrypted.</p>
            </div>
            <div class="payment-warning">
                <p class="warning_tt"><i class="fas fa-exclamation-triangle"></i>This store can'taccept real orders or real payments.</p>
            </div>
            <div class="payment-method">
                <p class="method_tt">Cash on Delivery (COD)</p>
            </div>
        </div>
        <div class="to_shipping row flex a-center">
            <div class="col-lg-7 return_cart">
                <a href="/cart.html">Return to cart</a>
            </div>
            <div class="col-lg-5 continue">
                <button class="continue-btn">Continue to shipping</button>
            </div>
        </div>
    </div>
    `).appendTo(".checkOut_step");
}

//function slideToggle
function slideToggle(selector1, selector2) {
    $(selector1).click(function(e) {
        e.preventDefault();
        $(selector2).slideToggle();
    });
}

//function add class "show_label" in page check_out
function addClassInput(selector, selector2) {
    $(selector).keyup(function(e) {
        e.preventDefault();
        if ($(this).val()) {
            $(selector2).addClass("show_label");
        } else {
            $(selector2).removeClass("show_label");
        }
    });
}

// function hiddenDropdown
function hiddenDropdown(selector) {
    $("body").click(function(e) {
        e.preventDefault();
        const dropdown = $(selector)[0];
        if (!dropdown.contains(e.target)) {
            $(selector).slideUp();
        }
    });
}
// function check-out
function checkOutBtn(selector1, selector2) {
    $(selector1).change(function(e) {
        e.preventDefault();
        if ($(selector1).prop("checked") === true) {
            $(selector2).prop("disabled", false);
            $(selector2).addClass("opacity-tt");
        } else {
            $(selector2).prop("disabled", true);
            $(selector2).removeClass("opacity-tt");
        }
    });
}


// renderContentProduct
function renderContentProduct(product) {
    $(".name_viewProduct").text(`${product.name}`);
    renderGallery(product);
    $(".right-viewProducts").empty();
    $(`
        <div class="tt-right" data-id=${product.id}>
            <p class="sku">SKU: <span>${product.id}</span></p>
            <p class="availability">Availability: <span>Many in stock</span></p>
            <h1 class="name tt-product_name">${product.name}</h1>
            <h3 class="price">$${product.price}</h3>
            <div class="star-icon">
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <span class="review-tt">No review</span>
            </div>
            <div class="btn-content flex a-center j-between">
                <button class="shipping"><i class="fas fa-gift"></i>Shipping</button>
                <button class="askAbout"><i class="far fa-envelope"></i>Ask about this product</button>
            </div>
            <div class="group_btn flex a-center j-between">
                <div class="plusMinus_quantity flex a-center">
                    <button class="btn_minus2"></button>
                    <input class="val-quantity2" type="text" value="1">
                    <button class="btn_plus2"></button>
                </div>
                <button class="add_product2">
                    <i class="fas fa-cart-plus"></i>
                    <span>Add to Cart</span>
                </button>
            </div>
            <div class="cart-checks">
                <div class="tt-agree flex a-center">
                    <input type="checkbox" class="check-agreeItem" id="check-agreeView">
                    <label for="check-agreeView" class="note-agree">I agree with the terms and conditions</label>
                </div>
                <div class="">
                    <input type="submit" class="check-outView" value="BUY NOW" disabled="">
                </div>
            </div>
            <div class="group-btn2">
                <button class="wishlist">
                    <i class="far fa-heart"></i>
                    <span>ADD TO WISHLIST</span>
                </button>
                <button class="compare">
                    <i class="fas fa-balance-scale"></i>
                    <span>ADD TO COMPARE</span>
                </button>
            </div>
            <p class="vendor">Vendor: <span>Christmas Shop</span></p>
            <p class="type">Product Type: <span>${product.type}</span></p>
            <p class="barcode">Barcode: <span>123456789</span></p>
            <p class="tags">Tags: <span>${product.tag}</span></p>
            <h5 class="check-ttt">DESCRIPTION</h5>
            <div class="description-tt">
                <p>We are proud to present our best premium Shopify theme - Wokiee.</p>
                <p>This is multi-purpose software that can be used for any type of the store. Great variety of available options will make customization process very easy.</p>
                <p>Please, take a look at feature list and compare with our competitors.</p>
                <p>You can buy our theme and start your business online with minimal time investments.</p>
                <p>Wokiee support DropShipping app Oberlo.</p>
                <p>Wokiee Shopify theme is powerfool tool to create personal webshop.</p>
            </div>
            <h5 class="check-ttt2">ADDITIONAL INFORMATION</h5>
            <div class="additional-tt">
                <p class="color">Color: <span>Blue, Purple, White</span></p>
                <p class="size">Size: <span>20, 24</span></p>
                <p class="material">Material: <span>100% Polyester</span></p>
            </div>
            <h5 class="review">REVIEW</h5>
        </div>
        `).appendTo(".right-viewProducts");
    $(`
        <div class="col-lg-3"></div>
        <div class="col-lg-3">
            <div class="tt-fixed-product flex">
                <div class="tt-img">
                    <img src=${product.img} alt="Sticky Image">
                </div>
                <div class="tt-description">
                    <h3 class="tt-title tt-product_name">${product.name}</h3>
                    <div class="tt-price">
                        <span>$${product.price}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="tt-row-custom01 flex j-between">
                <div class="plusMinus_quantity flex a-center">
                    <button class="btn_minus2"></button>
                    <input class="val-quantity2" type="text" value="1">
                    <button class="btn_plus2"></button>
                </div>
                <button class="add_product2">
                    <i class="fas fa-cart-plus"></i>
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
        <div class="col-lg-3"></div>
        `).appendTo(".justify-viewProduct");
}
// renderGallery
function renderGallery(product) {
    $(".list_gallery").empty();
    let img_add = product.gallery;
    img_add.map(val => {
        $(`
            <li>
                <img class="btn-gallery" src=${val} alt="">
            </li>
            `).appendTo(".list_gallery");
    });
    $("#main-img").attr('src', product.gallery[0]);

}

// function search
function searchGroup(selector1, selector2, products) {
    $(selector1).keyup(function(e) {
        e.preventDefault();
        const searchInput = $(selector1).val();
        const searchExp = new RegExp(searchInput, "ig");
        const filterProducts = products.filter(val => val.name.match(searchExp));
        if (searchInput.length > 0 && filterProducts.length > 0) {
            $(selector2).fadeIn();
            const ListProducts = filterProducts.map(val => {
                return {
                    ...val,
                    name: val.name.replace(searchExp, (math) => {
                        return `<span style= "color: red;">${math}</span>`;
                    })
                }
            });
            $(".search-res").empty();
            ListProducts.map(val => {
                $(`
                <li class="btn-view" data-id="${val.id}">
                    <a href="" class="flex a-center img-box">
                        <img src=${val.img} alt="">
                        <span class="tt-product_name">${val.name}</span>
                    </a>
                </li>`).appendTo(".search-res");
            })
        } else {
            $(selector2).hide();
        }
    })
}

// function products ---> owl-carousel
function renderProduct(list, selector) {
    list.map(val => {
        $(`
            <div data-id=${val.id} class="item btn-view">
                <div class="img-box">
                    <a href="">
                        <i class="far fa-heart tooltip">
                            <span class="tooltip-left">You need to login</span>
                        </i>
                    </a>
                    <a href=""><img src=${val.img} alt=""></a>
                </div>
                <div class="description">
                    <div class="star-icon">
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <h3><a href="" class="tt-product_name">${val.name}</a></h3>
                    <p>$ ${val.price}</p>
                    <button class="add_product">
                        <i class="fas fa-cart-plus"></i>
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        `).appendTo(selector);
    });
};

// renderFullCart
function renderFullCart(list) {
    renderQuantity(list);
    renderCartTotal(list);
    renderCart(list);
    renderShoppingCart(list);
    renderCheckCart(list);
    // renderCheckCart2(list)
}

// renderShowModal 
function renderShowModal(product) {
    $(".show_modal").empty();
    $(`
    <h5><i class="fas fa-check"></i>Added to cart successfully!</h5>
    <img src=${product.img} alt="">
    <p class="name">${product.name}</p>
    <p class="quantity">QTY:<span>${product.quantity}</span></p>
    <p class="total">TOTAL: $${product.price*product.quantity}</p>
    `).appendTo(".show_modal");
}

// renderCheckCart
function renderCheckCart(list) {
    $(".order-info-view").empty();
    list.map(val => {
        $(`
        <li class="order-product-info row a-center j-between btn-view" data-id=${val.id}>
            <div class="col-lg-2 order-img">
                <img src=${val.img} alt="">
                <span class="order-quantity">${val.quantity}</span>
            </div>
            <div class="col-lg-8 order-name">
                <p class="tt-product_name">${val.name}</p>
            </div>
            <div class="col-lg-2 order-price">
                <p>$${val.price*val.quantity}</p>
            </div>
        </li>
        `).appendTo(".order-info-view");
    })
}

function renderCheckCart2(product) {
    $(".order-info-view").empty();
    $(`
        <li class="order-product-info row a-center j-between btn-view" data-id=${product.id}>
            <div class="col-lg-2 order-img">
                <img src=${product.img} alt="">
                <span class="order-quantity">${product.quantity}</span>
            </div>
            <div class="col-lg-8 order-name">
                <p class="tt-product_name">${product.name}</p>
            </div>
            <div class="col-lg-2 order-price">
                <p>$${product.price*product.quantity}</p>
            </div>
        </li>
        `).appendTo(".order-info-view");
}

// renderShoppingCart
function renderShoppingCart(list) {
    $(".list_shoppingCart").empty();
    list.map(val => {
        $(`
        <li class="row flex a-center product-content btn-view" data-id=${val.id}>
            <div class="col-lg-6 row flex a-center">
                <div class="col-lg-2">
                    <img src=${val.img} alt="">
                </div>
                <div class="col-lg-10">
                    <a href="" class="tt-product_name">${val.name}</a>
                </div>
            </div>
            <div class="col-lg-6 row flex a-center">
                <div class="col-lg-4">
                    <span>$${val.price}</span>
                </div>
                <div class="col-lg-4 plusMinus_quantity flex a-center">
                    <button class="btn_minus"></button>
                    <input class="val-quantity" type="text" value=${val.quantity}>
                    <button class="btn_plus"></button>
                </div>
                <div class="col-lg-4 flex j-between a-center">
                    <span>$${val.quantity * val.price}</span>
                    <button class="delete-products"><i class="far fa-trash-alt"></i></button>
                </div>
            </div>
        </li>

        `).appendTo(".list_shoppingCart");
    })
}

// list products in Cart
function renderCart(list) {
    $(".cart-list").empty();
    list.map(val => {
        $(`
            <li>
                <div class="product-content btn-view" data-id=${val.id}>
                <div class="row">
                    <div class="col-xs-4">
                        <img src=${val.img} alt="">
                    </div>
                    <div class="col-xs-7">
                        <h5><a href="" class="tt-product_name">${val.name}</a></h5>
                        <span class="cart-quantity">${val.quantity}X </span>
                        <span class="cart-price">$${val.total}</span>
                    </div>
                    <div class="col-xs-1">
                        <button class="delete-products">
                            <i class="far fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
                </div>
            </li>
        `).appendTo(".cart-list");
    });
};

function renderQuantity(list) {
    if (list.length > 0) {
        $(".quantity-item").show();
        $(".no-product").hide();
        $(".view-cart").show();

        $(".yes_products").show();
        $(".no_products").hide();

        $(".quantity-item").empty();
        $(".quantity-item").text(list.length);
    } else {
        $(".quantity-item").hide();
        $(".no-product").show();
        $(".view-cart").hide();

        $(".yes_products").hide();
        $(".no_products").show();
    }
}

function renderCartTotal(list) {
    let total = calcTotalPrice(list);
    $(".sum-total").empty();
    $(".sum-total").text(`$${total}`);
}

function calcSumTotal(list, method) {
    total = calcTotalPrice(list);
    let calcTotal = total + method;
    $(".calc-total_shipping").empty();
    $(".tt-total_shipping").empty();
    $(".calc-total_shipping").text(` $${calcTotal}`);
    $(".tt-total_shipping").text(` $${method}`);
}

function calcTotalPrice(list) {
    return total = list.reduce((acc, val) => acc + val.total * val.quantity, 0);
}

// filter Products
function filterProducts(select_ft, type_ft, color_ft, size_ft, price_ft, vendor_ft, tags_ft, grid_ft, list) {
    switch (select_ft) {
        case 0:
            list = list;
            break;
        case 1:
            list.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
            break;
        case 2:
            list.sort((a, b) => (a.name > b.name ? -1 : b.name > a.name ? 1 : 0));
            break;
        case 3:
            list.sort((a, b) => a.price > b.price ? 1 : b.price > a.price ? -1 : 0);
            break;
        case 4:
            list.sort((a, b) => a.price > b.price ? -1 : b.price > a.price ? 1 : 0);
            break;
        default:
            break;
    }
    switch (type_ft) {
        case 1:
            list = list.filter((val) => val.type === "dress");
            break;
        case 2:
            list = list.filter((val) => val.type === "jeans");
            break;
        case 3:
            list = list.filter((val) => val.type === "polo");
            break;
        case 4:
            list = list.filter((val) => val.type === "shirt");
            break;
        case 5:
            list = list.filter((val) => val.type === "shoes");
            break;
        case 6:
            list = list.filter((val) => val.type === "sweater");
            break;
        default:
            break;
    }
    switch (color_ft) {
        case 1:
            list = list.filter((val) => val.color === "Blue");
            break;
        case 2:
            list = list.filter((val) => val.color === "Green");
            break;
        case 3:
            list = list.filter((val) => val.color === "Grey");
            break;
        case 4:
            list = list.filter((val) => val.color === "Light Blue");
            break;
        case 5:
            list = list.filter((val) => val.color === "Orange");
            break;
        case 6:
            list = list.filter((val) => val.color === "Red");
            break;
        default:
            break;
    }
    switch (size_ft) {
        case 1:
            list = list;
            break;
        case 2:
            list = list;
            break;
        case 3:
            list = list;
            break;
        default:
            break;
    }
    switch (price_ft) {
        case 1:
            list = list.filter((val) => val.price >= 10 && val.price <= 100);
            break;
        case 2:
            list = list.filter((val) => val.price >= 300 && val.price <= 400);
            break;
        case 3:
            list = list.filter((val) => val.price >= 400 && val.price <= 500);
            break;
        default:
            list = list;
            break;
    }
    switch (vendor_ft) {
        case 1:
            list = list.filter((val) => val.vendor === "Gap");
            break;
        case 2:
            list = list.filter((val) => val.vendor === "Guess");
            break;
        case 3:
            list = list.filter((val) => val.vendor === "Lacoste");
            break;
        case 4:
            list = list.filter((val) => val.vendor === "Levi's");
            break;
        case 5:
            list = list.filter((val) => val.vendor === "Polo");
            break;
        case 6:
            list = list.filter((val) => val.vendor === "Zara");
            break;
        default:
            break;
    }
    switch (tags_ft) {
        case 1:
            list = list.filter((val) => val.tag.includes("Vintage"));
            break;
        case 2:
            list = list.filter((val) => val.tag.includes("Awesome"));
            break;
        case 3:
            list = list.filter((val) => val.tag.includes("Summer"));
            break;
        case 4:
            list = list.filter((val) => val.tag.includes("Beachwear"));
            break;
        case 5:
            list = list.filter((val) => val.tag.includes("Winter"));
            break;
        case 6:
            list = list.filter((val) => val.tag.includes("Shorts"));
            break;
        case 7:
            list = list.filter((val) => val.tag.includes("Cool"));
            break;
        case 7:
            list = list.filter((val) => val.tag.includes("Nice"));
            break;
        default:
            break;
    }
    if (grid_ft === 1) {
        renderListing2(list, 12, ".product-list");
    } else if (grid_ft === 2) {
        renderListing(list, 6, ".product-list");
    } else if (grid_ft === 3) {
        renderListing(list, 4, ".product-list");
    }
};

// function renderList products
function renderListing(products, number, selector) {
    $(selector).empty();
    products.map(val => {
        $(`
        <div class="col-lg-${number}">
            <div data-id=${val.id} class="item tt-products-item btn-view">
                <div class="img-box">
                    <a href="">
                        <i class="far fa-heart tooltip">
                            <span class="tooltip-left">You need to login</span>
                        </i>
                    </a>
                    <a href=""><img src=${val.img} alt=""></a>
                </div>
                <div class="description">
                    <div class="star-icon">
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <h3><a href="" class="tt-product_name">${val.name}</a></h3>
                    <p>$ ${val.price}</p>
                    <button class="add_product">
                        <i class="fas fa-cart-plus"></i>
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
            <div>
        `).appendTo(selector);
    });
}

function renderListing2(products, number, selector) {
    $(selector).empty();
    products.map(val => {
        $(
            `<div data-id=${val.id} class="col-lg-${number} item tt-products-item2 row btn-view">
            <a href="" class="col-lg-2 img-box">
                <img src=${val.img} alt=""/>
            </a>
            <div class="col-lg-10">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="star-icon">
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        </div>
                        <a class="name tt-product_name" href="">${val.name}</a>
                        <p class="info">We are proud to present our best premium Shopify theme - Wokiee. This is multi-purpose software that can be used for any type of the store. Great variety of available...</p>
                    </div>
                    <div class="col-lg-4 flex f-column">
                        <div class="content-right">
                            <p class="price">$${val.price}</p>
                            <button class="add_product">
                                <i class="fas fa-cart-plus"></i>
                                <span>Add to Cart</span>
                            </button>
                            <p class="heart"><i class="far fa-heart"></i></p>
                        </div>
                    </div>
               </div>
            </div>
        </div>`).appendTo(selector);
    });
}