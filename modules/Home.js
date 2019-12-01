import React, {Component} from 'react'

export default class Home extends Component {

    componentDidMount() {

        const scriptJQuery = document.createElement("script");
        scriptJQuery.async = true;
        scriptJQuery.src = "assets/js/vendor/jquery-3.2.1.min.js";
        document.body.appendChild(scriptJQuery);

        const scriptPoper = document.createElement("script");
        scriptPoper.async = true;
        scriptPoper.src = "assets/js/popper.min.js";
        document.body.appendChild(scriptPoper);

        const scriptBootstrap = document.createElement("script");
        scriptBootstrap.async = true;
        scriptBootstrap.src = "assets/js/bootstrap.min.js";
        document.body.appendChild(scriptBootstrap);

        const scriptPlugin = document.createElement("script");
        scriptPlugin.async = true;
        scriptPlugin.src = "assets/js/plugins.js";
        document.body.appendChild(scriptPlugin);

        const scriptAjaxMail = document.createElement("script");
        scriptAjaxMail.async = true;
        scriptAjaxMail.src = "assets/js/plugins.js";
        document.body.appendChild(scriptAjaxMail);

        const scriptMain = document.createElement("script");
        scriptMain.async = true;
        scriptMain.src = "assets/js/main.js";
        document.body.appendChild(scriptMain);

        const scriptModernizer = document.createElement("script");
        scriptModernizer.async = true;
        scriptModernizer.src = "assets/js/vendor/modernizr-3.5.0.min.js";
        document.body.appendChild(scriptModernizer);

    }

    render() {
        return (
            <div>
                <body>
                {/* Hero Area Start */}
                <div className="ht-hero-section fix">
                    <div className="ht-hero-slider">
                        {/* Single Slide Start */}
                        <div className="ht-single-slide" style={{backgroundImage: "url(assets/img/slider/1.jpg)"}}>
                            <div className="ht-hero-content-one container">
                                <h3>Cold Process Organic</h3>
                                <h1 className="cssanimation leDoorCloseLeft sequence">Savon Stories</h1>
                                <p>We believe that healthy eating, clean air, and gentle character is the best start to
                                    genuine wellbeing.</p>
                                <a href="shop.html" className="default-btn large circle blue hover-blue uppercase">Shop
                                    now</a>
                            </div>
                        </div>
                        {/* Single Slide End */}
                        {/* Single Slide Start */}
                        <div className="ht-single-slide" style={{backgroundImage: "url(assets/img/slider/2.jpg)"}}>
                            <div className="ht-hero-content-one container">
                                <h3>Healthy life with</h3>
                                <h1 className="cssanimation leDoorCloseLeft sequence">Nature Organic</h1>
                                <p>Vegetables are the edible parts of a plant that is used in cooking or can be eaten
                                    raw.</p>
                                <a href="shop.html" className="default-btn">Shop now</a>
                            </div>
                        </div>
                        {/* Single Slide End */}
                    </div>
                </div>
                {/* Hero Area End */}
                {/* Food Categry Area Start */}
                <div className="food-category-area pt-105 pb-70">
                    <div className="container text-center">
                        <div className="section-title-img">
                            <img src="assets/img/banner/text.png" alt=""/>
                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                                vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
                                dignissim qui</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="ht-food-slider row">
                            <div className="col text-center">
                                <div className="single-food-category">
                                    <a href="shop.html" className="food-cat-img"><img src="assets/img/icon/tea.png"
                                                                                      alt=""/></a>
                                    <img src="assets/img/icon/border.png" alt=""/>
                                    <h4><a href="shop.html">tea</a></h4>
                                    <span>(13 items)</span>
                                </div>
                            </div>
                            <div className="col text-center">
                                <div className="single-food-category">
                                    <a href="shop.html" className="food-cat-img"><img src="assets/img/icon/burger.png"
                                                                                      alt=""/></a>
                                    <img src="assets/img/icon/border.png" alt=""/>
                                    <h4><a href="shop.html">bread</a></h4>
                                    <span>(14 items)</span>
                                </div>
                            </div>
                            <div className="col text-center">
                                <div className="single-food-category">
                                    <a href="shop.html" className="food-cat-img"><img src="assets/img/icon/fruit.png"
                                                                                      alt=""/></a>
                                    <img src="assets/img/icon/border.png" alt=""/>
                                    <h4><a href="shop.html">fruits</a></h4>
                                    <span>(8 items)</span>
                                </div>
                            </div>
                            <div className="col text-center">
                                <div className="single-food-category">
                                    <a href="shop.html" className="food-cat-img"><img src="assets/img/icon/drinks.png"
                                                                                      alt=""/></a>
                                    <img src="assets/img/icon/border.png" alt=""/>
                                    <h4><a href="shop.html">juices</a></h4>
                                    <span>(11 items)</span>
                                </div>
                            </div>
                            <div className="col text-center">
                                <div className="single-food-category">
                                    <a href="shop.html" className="food-cat-img"><img
                                        src="assets/img/icon/vegetable.png" alt=""/></a>
                                    <img src="assets/img/icon/border.png" alt=""/>
                                    <h4><a href="shop.html">vegetables</a></h4>
                                    <span>(11 items)</span>
                                </div>
                            </div>
                            <div className="col text-center">
                                <div className="single-food-category">
                                    <a href="shop.html" className="food-cat-img"><img src="assets/img/icon/tea.png"
                                                                                      alt=""/></a>
                                    <img src="assets/img/icon/border.png" alt=""/>
                                    <h4><a href="shop.html">tea</a></h4>
                                    <span>(13 items)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Food Categry Area End */}
                {/* Protuct Area Start */}
                <div className="product-area bg-1 pt-110 pb-80">
                    <div className="container">
                        <div className="section-title text-center">
                            <div className="section-img d-flex justify-content-center">
                                <img src="assets/img/icon/title.png" alt=""/>
                            </div>
                            <h2><span>Organic </span>featured products</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="product-tab-list nav" role="tablist">
                            <a className="active" href="#tab1" data-toggle="tab" role="tab" aria-selected="true"
                               aria-controls="tab1">vegetables</a>
                            <a href="#tab2" data-toggle="tab" role="tab" aria-selected="false"
                               aria-controls="tab2">fruits</a>
                            <a href="#tab3" data-toggle="tab" role="tab" aria-selected="false"
                               aria-controls="tab3">juices</a>
                            <a href="#tab4" data-toggle="tab" role="tab" aria-selected="false"
                               aria-controls="tab4">bread</a>
                        </div>
                        <div className="tab-content text-center">
                            <div className="tab-pane active show fade" id="tab1" role="tabpanel">
                                <div className="product-carousel">
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/1.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/1.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Juicy Grapes</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$86.00</span>
                                                    <span className="old-price">$92.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/2.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/2.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Fresh Banana</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$40.00</span>
                                                    <span className="old-price">$43.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/3.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/3.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Red Capsicum</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$34.00</span>
                                                    <span className="old-price">$37.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/4.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/4.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Rippen Mango</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$20.00</span>
                                                    <span className="old-price">$28.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/5.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/5.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Farm's Onion</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$40.00</span>
                                                    <span className="old-price">$50.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/6.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/6.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Fresh Coconut</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$50.00</span>
                                                    <span className="old-price">$80.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/7.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/7.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Tangerin Juice</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$44.00</span>
                                                    <span className="old-price">$47.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/8.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/8.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Pine Apple</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$33.00</span>
                                                    <span className="old-price">$37.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/9.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/9.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Fresh Cucumber</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$86.00</span>
                                                    <span className="old-price">$92.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/10.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/10.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Fresh Grape</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$40.00</span>
                                                    <span className="old-price">$43.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab2" role="tabpanel">
                                <div className="product-carousel">
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/9.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/9.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Fresh Cucumber</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$86.00</span>
                                                    <span className="old-price">$92.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/10.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/10.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Fresh Grape</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$40.00</span>
                                                    <span className="old-price">$43.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/11.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/11.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Farm's Cucumber</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$34.00</span>
                                                    <span className="old-price">$37.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/12.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/12.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Strawberry Juice</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$20.00</span>
                                                    <span className="old-price">$28.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/13.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/13.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Green Pee's</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$40.00</span>
                                                    <span className="old-price">$50.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/14.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/14.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Fresh Onion</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$50.00</span>
                                                    <span className="old-price">$80.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/15.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/15.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Juicy Orange</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$44.00</span>
                                                    <span className="old-price">$47.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/16.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/16.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Kiwi Juice</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$33.00</span>
                                                    <span className="old-price">$37.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/12.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/12.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Strawberry Juice</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$20.00</span>
                                                    <span className="old-price">$28.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/13.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/13.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Green Pee's</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$40.00</span>
                                                    <span className="old-price">$50.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab3" role="tabpanel">
                                <div className="product-carousel">
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/17.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/17.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Red Beet</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$34.00</span>
                                                    <span className="old-price">$37.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/18.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/18.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Spring Onion</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$20.00</span>
                                                    <span className="old-price">$28.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/19.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/19.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Fresh Tomato</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$40.00</span>
                                                    <span className="old-price">$50.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/20.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/20.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Juicy Watermelon</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$50.00</span>
                                                    <span className="old-price">$80.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/7.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/7.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Tangerin Juice</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$44.00</span>
                                                    <span className="old-price">$47.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/8.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/8.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Pine Apple</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$33.00</span>
                                                    <span className="old-price">$37.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/1.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/1.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Juicy Grapes</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$86.00</span>
                                                    <span className="old-price">$92.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/2.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/2.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Fresh Banana</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$40.00</span>
                                                    <span className="old-price">$43.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab4" role="tabpanel">
                                <div className="product-carousel">
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/12.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/12.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Strawberry Juice</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$20.00</span>
                                                    <span className="old-price">$28.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/13.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/13.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Green Pee's</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$40.00</span>
                                                    <span className="old-price">$50.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/14.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/14.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Fresh Onion</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$50.00</span>
                                                    <span className="old-price">$80.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/15.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/15.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Juicy Orange</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$44.00</span>
                                                    <span className="old-price">$47.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/9.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/9.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Fresh Cucumber</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$86.00</span>
                                                    <span className="old-price">$92.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/12.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/12.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Strawberry Juice</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$20.00</span>
                                                    <span className="old-price">$28.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/13.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/13.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Green Pee's</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$40.00</span>
                                                    <span className="old-price">$50.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/10.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/10.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Fresh Grape</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$40.00</span>
                                                    <span className="old-price">$43.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/11.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/11.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Farm's Cucumber</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$34.00</span>
                                                    <span className="old-price">$37.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="shop.html">
                                                    <img src="assets/img/product/16.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"></i></a>
                                                        </li>
                                                        <li><a href="assets/img/product/16.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"></i></a></li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o color"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5><a href="shop.html">Kiwi Juice</a></h5>
                                                <div className="pro-price">
                                                    <span className="new-price">$33.00</span>
                                                    <span className="old-price">$37.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Protuct Area End */}
                {/* Blog Area Start */}
                <div className="blog-area pb-95">
                    <div className="container">
                        <div className="section-title text-center mb-50">
                            <div className="section-img d-flex justify-content-center">
                                <img src="assets/img/icon/title.png" alt=""/>
                            </div>
                            <h2><span>Organic </span>from our blog</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="custom-row">
                            <div className="blog-carousel">
                                <div className="custom-col text-center">
                                    <div className="single-blog">
                                        <div className="blog-image">
                                            <a href="blog-details.html"><img src="assets/img/blog/1.jpg" alt=""/></a>
                                        </div>
                                        <div className="blog-text">
                                            <h4><a href="blog-details.html">Coconut improve heart and immunity.</a></h4>
                                            <div className="post-meta">
                                                <span className="author-name">post by: <span>Naturecircle Themes</span></span>
                                                <span className="post-date"> - Oct 30,2018</span>
                                            </div>
                                            <p>Coconut milk is one of the healthiest foods on world, health benefits of
                                                coconut milk make it quite popular.</p>
                                            <a href="blog-details.html" className="default-btn">Read more</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="custom-col text-center">
                                    <div className="single-blog">
                                        <div className="blog-image">
                                            <a href="blog-details.html"><img src="assets/img/blog/2.jpg" alt=""/></a>
                                        </div>
                                        <div className="blog-text">
                                            <h4><a href="blog-details.html">The most healthful food you can eat.</a>
                                            </h4>
                                            <div className="post-meta">
                                                <span className="author-name">post by: <span>Naturecircle Themes</span></span>
                                                <span className="post-date"> - Sep 11,2018</span>
                                            </div>
                                            <p>Health benefits of apple include improved digestion, prevention of
                                                stomach disorders, gallstones.</p>
                                            <a href="blog-details.html" className="default-btn">Read more</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="custom-col text-center">
                                    <div className="single-blog">
                                        <div className="blog-image">
                                            <a href="blog-details.html"><img src="assets/img/blog/3.jpg" alt=""/></a>
                                        </div>
                                        <div className="blog-text">
                                            <h4><a href="blog-details.html">Delicious and nutritious vegetable.</a></h4>
                                            <div className="post-meta">
                                                <span className="author-name">post by: <span>Naturecircle Themes</span></span>
                                                <span className="post-date"> - Apr 22,2018</span>
                                            </div>
                                            <p>Research shows drinking beetroot juice benefit digestion, boost athletic
                                                performance. They are a good source.</p>
                                            <a href="blog-details.html" className="default-btn">Read more</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="custom-col text-center">
                                    <div className="single-blog">
                                        <div className="blog-image">
                                            <a href="blog-details.html"><img src="assets/img/blog/1.jpg" alt=""/></a>
                                        </div>
                                        <div className="blog-text">
                                            <h4><a href="blog-details.html">Coconut improve heart and immunity.</a></h4>
                                            <div className="post-meta">
                                                <span className="author-name">post by: <span>Naturecircle Themes</span></span>
                                                <span className="post-date"> - Oct 30,2018</span>
                                            </div>
                                            <p>Coconut milk is one of the healthiest foods on world, health benefits of
                                                coconut milk make it quite popular.</p>
                                            <a href="blog-details.html" className="default-btn">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Blog Area End */}
                </body>
            </div>
        )
    }
}