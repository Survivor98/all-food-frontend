import React, {Component} from 'react'
import axios from "axios/index";

export default class Health extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tags: [] ,
            url: 'http://10.21.38.20:5000',

        }

        this.fetchData = this.fetchData.bind(this);

    }

    componentDidMount() {

        /*const scriptJQuery = document.createElement("script");
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
        document.body.appendChild(scriptModernizer);*/
        this.fetchData()
    }

    fetchData(){
        let url = this.state.url;
        axios.get(url+'/tag').then((response) => {
            console.log(response);
            this.setState({
                filterResult: getDishes
            })
        }).catch((error)=>{
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                {/*<!-- Breadcrumb Area Start -->*/}
                <div className="breadcrumb-area bg-health text-center">
                    <div className="container">
                        <h1>Health</h1>
                        <nav aria-label="breadcrumb">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item active">Health</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/*<!-- Breadcrumb Area End -->*/}
                {/*<!-- Shop Area Start -->*/}
                <div className="shop-area pt-110 pb-100 bg-gray mb-95">
                    <div className="container">
                        <div className="row">
                            <div className="order-xl-2 order-lg-2 col-xl-9 col-lg-8">
                                <div className="ht-product-tab">
                                    <div className="ht-tab-content">
                                        <div className="nav" role="tablist">
                                            <a className="active grid" href="#grid" data-toggle="tab" role="tab"
                                               aria-selected="true" aria-controls="grid">
                                                <i className="fa fa-th"/>
                                            </a>
                                            <a className="list" href="#list" data-toggle="tab" role="tab"
                                               aria-selected="false" aria-controls="list">
                                                <i className="fa fa-list"/>
                                            </a>
                                        </div>
                                        <div className="shop-items">
                                            <span>Showing 1 to 9 of 11 (2 Pages) </span>
                                        </div>
                                    </div>
                                    <div className="shop-results-wrapper">
                                        <div className="shop-results"><span>Show:</span>
                                            <div className="shop-select">
                                                <select name="number" id="number">
                                                    <option value="9">9</option>
                                                    <option value="25">25</option>
                                                    <option value="50">50</option>
                                                    <option value="75">75</option>
                                                    <option value="100">100</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="shop-results"><span>Sort By:</span>
                                            <div className="shop-select">
                                                <select name="sort" id="sort">
                                                    <option value="position">Default sorting</option>
                                                    <option value="p-name">Sort Popularity</option>
                                                    <option value="p-price">Sort Price</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ht-product-shop tab-content text-center">
                                    <div className="tab-pane active show fade" id="grid" role="tabpanel">
                                        <div className="custom-row">
                                            <div className="custom-col">
                                                <div className="single-product-item">
                                                    <div className="product-image">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/1.jpg" alt=""/>
                                                        </a>
                                                        <div className="product-hover">
                                                            <ul className="hover-icon-list">
                                                                <li>
                                                                    <a href="wishlist.html"><i
                                                                        className="icon icon-Heart"></i></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"><i className="icon icon-Restart"/></a>
                                                                </li>
                                                                <li><a href="assets/img/product/1.jpg"
                                                                       data-toggle="modal"
                                                                       data-target="#productModal"><i
                                                                    className="icon icon-Search"></i></a></li>
                                                            </ul>
                                                            <button type="button" className="p-cart-btn">Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="product-rating">
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o"/>
                                                            <i className="fa fa-star-o"/>
                                                        </div>
                                                        <h5><a href="product-details.html">Juicy Grapes</a></h5>
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
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/2.jpg" alt=""/>
                                                        </a>
                                                        <div className="product-hover">
                                                            <ul className="hover-icon-list">
                                                                <li>
                                                                    <a href="wishlist.html"><i
                                                                        className="icon icon-Heart"/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"><i className="icon icon-Restart"/></a>
                                                                </li>
                                                                <li><a href="assets/img/product/2.jpg"
                                                                       data-toggle="modal"
                                                                       data-target="#productModal"><i
                                                                    className="icon icon-Search"></i></a></li>
                                                            </ul>
                                                            <button type="button" className="p-cart-btn">Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="product-rating">
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o"/>
                                                            <i className="fa fa-star-o"/>
                                                        </div>
                                                        <h5><a href="product-details.html">Fresh Banana</a></h5>
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
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/3.jpg" alt=""/>
                                                        </a>
                                                        <div className="product-hover">
                                                            <ul className="hover-icon-list">
                                                                <li>
                                                                    <a href="wishlist.html"><i
                                                                        className="icon icon-Heart"/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"><i className="icon icon-Restart"/></a>
                                                                </li>
                                                                <li><a href="assets/img/product/3.jpg"
                                                                       data-toggle="modal"
                                                                       data-target="#productModal"><i
                                                                    className="icon icon-Search"></i></a></li>
                                                            </ul>
                                                            <button type="button" className="p-cart-btn">Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="product-rating">
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o"/>
                                                            <i className="fa fa-star-o"/>
                                                        </div>
                                                        <h5><a href="product-details.html">Red Capsicum</a></h5>
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
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/4.jpg" alt=""/>
                                                        </a>
                                                        <div className="product-hover">
                                                            <ul className="hover-icon-list">
                                                                <li>
                                                                    <a href="wishlist.html"><i
                                                                        className="icon icon-Heart"/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"><i className="icon icon-Restart"/></a>
                                                                </li>
                                                                <li><a href="assets/img/product/4.jpg"
                                                                       data-toggle="modal"
                                                                       data-target="#productModal"><i
                                                                    className="icon icon-Search"></i></a></li>
                                                            </ul>
                                                            <button type="button" className="p-cart-btn">Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="product-rating">
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o"/>
                                                            <i className="fa fa-star-o"/>
                                                        </div>
                                                        <h5><a href="product-details.html">Rippen Mango</a></h5>
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
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/5.jpg" alt=""/>
                                                        </a>
                                                        <div className="product-hover">
                                                            <ul className="hover-icon-list">
                                                                <li>
                                                                    <a href="wishlist.html"><i
                                                                        className="icon icon-Heart"/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"><i className="icon icon-Restart"/></a>
                                                                </li>
                                                                <li><a href="assets/img/product/5.jpg"
                                                                       data-toggle="modal"
                                                                       data-target="#productModal"><i
                                                                    className="icon icon-Search"/></a></li>
                                                            </ul>
                                                            <button type="button" className="p-cart-btn">Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="product-rating">
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o"/>
                                                            <i className="fa fa-star-o"/>
                                                        </div>
                                                        <h5><a href="product-details.html">Farm's Onion</a></h5>
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
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/6.jpg" alt=""/>
                                                        </a>
                                                        <div className="product-hover">
                                                            <ul className="hover-icon-list">
                                                                <li>
                                                                    <a href="wishlist.html"><i
                                                                        className="icon icon-Heart"/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"><i className="icon icon-Restart"/></a>
                                                                </li>
                                                                <li><a href="assets/img/product/6.jpg"
                                                                       data-toggle="modal"
                                                                       data-target="#productModal"><i
                                                                    className="icon icon-Search"/></a></li>
                                                            </ul>
                                                            <button type="button" className="p-cart-btn">Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="product-rating">
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o"/>
                                                            <i className="fa fa-star-o"/>
                                                        </div>
                                                        <h5><a href="product-details.html">Fresh Coconut</a></h5>
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
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/7.jpg" alt=""/>
                                                        </a>
                                                        <div className="product-hover">
                                                            <ul className="hover-icon-list">
                                                                <li>
                                                                    <a href="wishlist.html"><i
                                                                        className="icon icon-Heart"/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"><i className="icon icon-Restart"/></a>
                                                                </li>
                                                                <li><a href="assets/img/product/7.jpg"
                                                                       data-toggle="modal"
                                                                       data-target="#productModal"><i
                                                                    className="icon icon-Search"/></a></li>
                                                            </ul>
                                                            <button type="button" className="p-cart-btn">Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="product-rating">
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o"/>
                                                            <i className="fa fa-star-o"/>
                                                        </div>
                                                        <h5><a href="product-details.html">Tangerin Juice</a></h5>
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
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/8.jpg" alt=""/>
                                                        </a>
                                                        <div className="product-hover">
                                                            <ul className="hover-icon-list">
                                                                <li>
                                                                    <a href="wishlist.html"><i
                                                                        className="icon icon-Heart"/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"><i className="icon icon-Restart"/></a>
                                                                </li>
                                                                <li><a href="assets/img/product/8.jpg"
                                                                       data-toggle="modal"
                                                                       data-target="#productModal"><i
                                                                    className="icon icon-Search"/></a></li>
                                                            </ul>
                                                            <button type="button" className="p-cart-btn">Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="product-rating">
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o"/>
                                                            <i className="fa fa-star-o"/>
                                                        </div>
                                                        <h5><a href="product-details.html">Pine Apple</a></h5>
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
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/9.jpg" alt=""/>
                                                        </a>
                                                        <div className="product-hover">
                                                            <ul className="hover-icon-list">
                                                                <li>
                                                                    <a href="wishlist.html"><i
                                                                        className="icon icon-Heart"/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"><i className="icon icon-Restart"/></a>
                                                                </li>
                                                                <li><a href="assets/img/product/9.jpg"
                                                                       data-toggle="modal"
                                                                       data-target="#productModal"><i
                                                                    className="icon icon-Search"/></a></li>
                                                            </ul>
                                                            <button type="button" className="p-cart-btn">Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="product-rating">
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o color"/>
                                                            <i className="fa fa-star-o"/>
                                                            <i className="fa fa-star-o"/>
                                                        </div>
                                                        <h5><a href="product-details.html">Fresh Cucumber</a></h5>
                                                        <div className="pro-price">
                                                            <span className="new-price">$86.00</span>
                                                            <span className="old-price">$92.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade text-left" id="list" role="tabpanel">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/1.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"/></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"/></a>
                                                        </li>
                                                        <li><a href="assets/img/product/1.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"/></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <h5><a href="product-details.html">Farm Fresh Black Grape</a></h5>
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o"/>
                                                    <i className="fa fa-star-o"/>
                                                </div>
                                                <div className="pro-price">
                                                    <span className="new-price">$110.00</span>
                                                    <span className="old-price">$122.00</span>
                                                </div>
                                                <p>Go for bananas with very small patches of black and used to make
                                                    banana bread or served with single cream and sugar.</p>
                                                <button type="button" className="p-cart-btn default-btn">Add to cart
                                                </button>
                                            </div>
                                        </div>
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/2.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"/></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"/></a>
                                                        </li>
                                                        <li><a href="assets/img/product/2.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"/></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <h5><a href="product-details.html">Wonderfully Sweet Banana</a></h5>
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o"/>
                                                    <i className="fa fa-star-o"/>
                                                </div>
                                                <div className="pro-price">
                                                    <span className="new-price">$90.00</span>
                                                    <span className="old-price">$99.00</span>
                                                </div>
                                                <p>To eat straight away, go for bananas with very small patches of black
                                                    on the ... Mashed and used to make banana bread.</p>
                                                <button type="button" className="p-cart-btn default-btn">Add to cart
                                                </button>
                                            </div>
                                        </div>
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/3.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"/></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"/></a>
                                                        </li>
                                                        <li><a href="assets/img/product/3.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"/></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <h5><a href="product-details.html">Fresh Red Capcicum</a></h5>
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o"/>
                                                    <i className="fa fa-star-o"/>
                                                </div>
                                                <div className="pro-price">
                                                    <span className="new-price">$190.00</span>
                                                    <span className="old-price">$120.00</span>
                                                </div>
                                                <p>The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600
                                                    pixel resolution. Designed specifically fo..</p>
                                                <button type="button" className="p-cart-btn default-btn">Add to cart
                                                </button>
                                            </div>
                                        </div>
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/4.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"/></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"/></a>
                                                        </li>
                                                        <li><a href="assets/img/product/4.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"/></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <h5><a href="product-details.html">Healthy Juicy Mango</a></h5>
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o"/>
                                                    <i className="fa fa-star-o"/>
                                                </div>
                                                <div className="pro-price">
                                                    <span className="new-price">$80.00</span>
                                                    <span className="old-price">$70.00</span>
                                                </div>
                                                <p>The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600
                                                    pixel resolution. Designed specifically fo..</p>
                                                <button type="button" className="p-cart-btn default-btn">Add to cart
                                                </button>
                                            </div>
                                        </div>
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/6.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"/></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"/></a>
                                                        </li>
                                                        <li><a href="assets/img/product/6.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"/></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <h5><a href="product-details.html">Fresh Large Coconut</a></h5>
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o"/>
                                                    <i className="fa fa-star-o"/>
                                                </div>
                                                <div className="pro-price">
                                                    <span className="new-price">$70.00</span>
                                                    <span className="old-price">$50.00</span>
                                                </div>
                                                <p>The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600
                                                    pixel resolution. Designed specifically fo..</p>
                                                <button type="button" className="p-cart-btn default-btn">Add to cart
                                                </button>
                                            </div>
                                        </div>
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/7.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"/></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"/></a>
                                                        </li>
                                                        <li><a href="assets/img/product/7.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"/></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <h5><a href="product-details.html">Chemical Free Fresh Juice</a></h5>
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o"/>
                                                    <i className="fa fa-star-o"/>
                                                </div>
                                                <div className="pro-price">
                                                    <span className="new-price">$200.00</span>
                                                    <span className="old-price">$100.00</span>
                                                </div>
                                                <p>The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600
                                                    pixel resolution. Designed specifically fo..</p>
                                                <button type="button" className="p-cart-btn default-btn">Add to cart
                                                </button>
                                            </div>
                                        </div>
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/8.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"/></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"/></a>
                                                        </li>
                                                        <li><a href="assets/img/product/8.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"/></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <h5><a href="product-details.html">Fresh Pineapple</a></h5>
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o"/>
                                                    <i className="fa fa-star-o"/>
                                                </div>
                                                <div className="pro-price">
                                                    <span className="new-price">$190.00</span>
                                                    <span className="old-price">$120.00</span>
                                                </div>
                                                <p>The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600
                                                    pixel resolution. Designed specifically fo..</p>
                                                <button type="button" className="p-cart-btn default-btn">Add to cart
                                                </button>
                                            </div>
                                        </div>
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/9.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a href="wishlist.html"><i className="icon icon-Heart"/></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="icon icon-Restart"/></a>
                                                        </li>
                                                        <li><a href="assets/img/product/9.jpg" data-toggle="modal"
                                                               data-target="#productModal"><i
                                                            className="icon icon-Search"/></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <h5><a href="product-details.html">Farm's Fresh Cucumber</a></h5>
                                                <div className="product-rating">
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o color"/>
                                                    <i className="fa fa-star-o"/>
                                                    <i className="fa fa-star-o"/>
                                                </div>
                                                <div className="pro-price">
                                                    <span className="new-price">$190.00</span>
                                                    <span className="old-price">$120.00</span>
                                                </div>
                                                <p>The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600
                                                    pixel resolution. Designed specifically fo..</p>
                                                <button type="button" className="p-cart-btn default-btn">Add to cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pagination-wrapper">
                                    <p>Showing 1 to 9 of 11 (2 Pages)</p>
                                    <nav aria-label="navigation">
                                        <ul className="pagination">
                                            <li className="page-item active"><a className="page-link" href="#">1</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">></a></li>
                                            <li className="page-item"><a className="page-link" href="#">>|</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <div className="sidebar-wrapper">
                                    <h3>Layered Navigation</h3>
                                    <div className="sidebar-widget">
                                        <h3>Categories</h3>
                                        <div className="sidebar-widget-option-wrapper">
                                            <div className="sidebar-widget-option">
                                                <input type="checkbox" id="cat1"/>
                                                <label htmlFor="cat1">Categories1 <span>(4)</span></label>
                                            </div>
                                            <div className="sidebar-widget-option">
                                                <input type="checkbox" id="cat2"/>
                                                <label htmlFor="cat2">Categories2 <span>(5)</span></label>
                                            </div>
                                            <div className="sidebar-widget-option">
                                                <input type="checkbox" id="cat3"/>
                                                <label htmlFor="cat3">Categories5 <span>(3)</span></label>
                                            </div>
                                            <div className="sidebar-widget-option">
                                                <input type="checkbox" id="cat4"/>
                                                <label htmlFor="cat4">Categories6 <span>(3)</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget price-widget">
                                        <h3>Price Filter</h3>
                                        <div className="price-slider-container">
                                            <div id="slider-range"></div>
                                            <div className="price_slider_amount">
                                                <div className="slider-values">
                                                    <input type="text" id="amount" name="price"
                                                           placeholder="Add Your Price"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget">
                                        <h3>Color</h3>
                                        <div className="sidebar-widget-option-wrapper">
                                            <div className="sidebar-widget-option">
                                                <input type="checkbox" id="black"/>
                                                <label htmlFor="black">Black <span>(4)</span></label>
                                            </div>
                                            <div className="sidebar-widget-option">
                                                <input type="checkbox" id="blue"/>
                                                <label htmlFor="blue">Blue <span>(3)</span></label>
                                            </div>
                                            <div className="sidebar-widget-option">
                                                <input type="checkbox" id="brown"/>
                                                <label htmlFor="brown">Brown <span>(3)</span></label>
                                            </div>
                                            <div className="sidebar-widget-option">
                                                <input type="checkbox" id="white"/>
                                                <label htmlFor="white">White <span>(3)</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget">
                                        <h3>Manufacturer</h3>
                                        <div className="sidebar-widget-option-wrapper">
                                            <div className="sidebar-widget-option">
                                                <input type="checkbox" id="dior"/>
                                                <label htmlFor="dior">Christian Dior <span>(6)</span></label>
                                            </div>
                                            <div className="sidebar-widget-option">
                                                <input type="checkbox" id="ferragamo"/>
                                                <label htmlFor="ferragamo">ferragamo <span>(7)</span></label>
                                            </div>
                                            <div className="sidebar-widget-option">
                                                <input type="checkbox" id="hermes"/>
                                                <label htmlFor="hermes">hermes <span>(8)</span></label>
                                            </div>
                                            <div className="sidebar-widget-option">
                                                <input type="checkbox" id="louis"/>
                                                <label htmlFor="louis">louis vuitton <span>(6)</span></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-banner-img">
                                    <a href="#"><img src="assets/img/banner/6.png" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- Shop Area End -->*/}

                {/*<!-- QUICKVIEW PRODUCT -->*/}
                <div className="modal fade" id="productModal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">
                                <i className="fa fa-times"/>
                                </span>
                            </button>
                            <div className="quick-view-container">
                                <div className="column-left">
                                    <div className="tab-content product-details-large" id="myTabContent">
                                        <div className="tab-pane fade show active" id="single-slide1" role="tabpanel"
                                             aria-labelledby="single-slide-tab-1">
                                            <div className="single-product-img">
                                                <img src="assets/img/product/1.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="single-slide2" role="tabpanel"
                                             aria-labelledby="single-slide-tab-2">
                                            <div className="single-product-img">
                                                <img src="assets/img/product/2.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="single-slide3" role="tabpanel"
                                             aria-labelledby="single-slide-tab-3">
                                            <div className="single-product-img">
                                                <img src="assets/img/product/3.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="single-slide4" role="tabpanel"
                                             aria-labelledby="single-slide-tab-4">
                                            <div className="single-product-img">
                                                <img src="assets/img/product/4.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="single-slide5" role="tabpanel"
                                             aria-labelledby="single-slide-tab-5">
                                            <div className="single-product-img">
                                                <img src="assets/img/product/5.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="single-slide6" role="tabpanel"
                                             aria-labelledby="single-slide-tab-6">
                                            <div className="single-product-img"/>
                                            <img src="assets/img/product/6.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="single-product-menu">
                                        <div className="nav single-slide-menu" role="tablist">
                                            <div className="single-tab-menu">
                                                <a className="active" data-toggle="tab" id="single-slide-tab-1"
                                                   href="#single-slide1">
                                                    <img src="assets/img/product/1.jpg" alt=""/>
                                                </a>
                                            </div>
                                            <div className="single-tab-menu">
                                                <a data-toggle="tab" id="single-slide-tab-2" href="#single-slide2">
                                                    <img src="assets/img/product/2.jpg" alt=""/>
                                                </a>
                                            </div>
                                            <div className="single-tab-menu">
                                                <a data-toggle="tab" id="single-slide-tab-3" href="#single-slide3">
                                                    <img src="assets/img/product/3.jpg" alt=""/>
                                                </a>
                                            </div>
                                            <div className="single-tab-menu">
                                                <a data-toggle="tab" id="single-slide-tab-4" href="#single-slide4">
                                                    <img src="assets/img/product/4.jpg" alt=""/>
                                                </a>
                                            </div>
                                            <div className="single-tab-menu">
                                                <a data-toggle="tab" id="single-slide-tab-5" href="#single-slide5">
                                                    <img src="assets/img/product/5.jpg" alt=""/>
                                                </a>
                                            </div>
                                            <div className="single-tab-menu">
                                                <a data-toggle="tab" id="single-slide-tab-6" href="#single-slide6">
                                                    <img src="assets/img/product/6.jpg" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column-right">
                                    <div className="quick-view-text">
                                        <h2>Curabitur a purus</h2>
                                        <h3 className="q-product-price">$34.00<span className="old-price">$37.00</span>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis
                                            vulputate, tristique ut lectus</p>
                                        <div className="input-cart">
                                            <input value="1" type="number"/>
                                            <button className="default-btn">Add to cart</button>
                                        </div>
                                        <div className="share-product">
                                            <h4>Share this product</h4>
                                            <div className="social-link">
                                                <a href="#" target="_blank" className="facebook">
                                                    <i className="fa fa-facebook"/>
                                                </a>
                                                <a href="#" target="_blank" className="twitter">
                                                    <i className="fa fa-twitter"/>
                                                </a>
                                                <a href="#" target="_blank" className="pinterest">
                                                    <i className="fa fa-pinterest"/>
                                                </a>
                                                <a href="#" target="_blank" className="google">
                                                    <i className="fa fa-google-plus"/>
                                                </a>
                                                <a href="#" target="_blank" className="linkedin">
                                                    <i className="fa fa-linkedin"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- END QUICKVIEW PRODUCT -->*/}
            </div>
        )
    }
}
