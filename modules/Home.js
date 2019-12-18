import React, {Component} from 'react'
import { Link, IndexLink } from 'react-router'
import axios from "axios/index";

export default class Home extends Component {

    constructor(props) {
        super(props);
        let url = 'http://10.21.38.20:5000';

        this.state = {
            selectedDishes: [],
            url: 'http://10.21.38.20:5000',
            addFavSign: '0',
            showDetailObj: null
        }

        this.addtoFavourite = this.addtoFavourite.bind(this);
        this.getSelectedDishes = this.getSelectedDishes.bind(this);
        this.validHero = this.validHero.bind(this);
        this.handleShowSelectedDetail = this.handleShowSelectedDetail.bind(this);
        this.handleQuitDetail = this.handleQuitDetail.bind(this);

    }

    componentDidMount() {
        // this.getSelectedDishes();
        /*const scriptJQuery = document.createElement("script");
        scriptJQuery.async = true;
        scriptJQuery.src = "assets/js/vendor/jquery-3.2.1.min.js";
        document.body.appendChild(scriptJQuery);*/


        /*const scriptPoper = document.createElement("script");
        scriptPoper.async = true;
        scriptPoper.src = "assets/js/popper.min.js";
        document.body.appendChild(scriptPoper);

        const scriptBootstrap = document.createElement("script");
        scriptBootstrap.async = true;
        scriptBootstrap.src = "assets/js/bootstrap.min.js";
        document.body.appendChild(scriptBootstrap);*/

        /*const scriptPlugin = document.createElement("script");
        scriptPlugin.async = true;
        scriptPlugin.src = "assets/js/plugins.js";
        document.body.appendChild(scriptPlugin);*/

        /*const scriptAjaxMail = document.createElement("script");
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

        // this.validHero();
        this.getSelectedDishes();

    }

    validHero(){
        var heroSlider = document.getElementById('ht-hero-slider');
        // var heroSlider = $('.ht-hero-slider');
        heroSlider.slick({
            arrows: true,
            prevArrow:"<button type='button' class='slick-prev'><i class='fa fa-angle-left'></i></button>",
            nextArrow:"<button type='button' class='slick-next'><i class='fa fa-angle-right'></i></button>",
            autoplay: true,
            autoplaySpeed: 50000,
            dots: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            fade: true,
            infinite: true,
            slidesToShow: 1,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false
                    }
                },
                {
                    breakpoint: 479,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
        heroSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var sliderTitle = document.querySelector('.ht-hero-slider h1');
            var currentTitle = document.querySelector('.slick-current h1');
            sliderTitle.removeClass('cssanimation leDoorCloseLeft sequence');
            currentTitle.addClass('cssanimation leDoorCloseLeft sequence');
        });
        heroSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
            var sliderTitle = document.querySelector('.ht-hero-slider h1');
            var currentTitle = document.querySelector('.slick-current h1');
            sliderTitle.removeClass('cssanimation leDoorCloseLeft sequence');
            currentTitle.addClass('cssanimation leDoorCloseLeft sequence');
        });

    }

    getSelectedDishes(){
        let url = 'http://10.21.38.20:5000';
        let selectedDishes = [];
        axios.get(url+'/dish/param',
            {params:{
                    limit: 20
                }
            }).then((response) => {
            console.log(response);
            selectedDishes = response.data.data
            this.setState({
                selectedDishes: selectedDishes
            })
        }).catch((error)=>{
                console.log(error);
            }
        );

    }

    componentWillMount(){
        console.log('1');
        if (document.querySelector("script[src*='"+"assets/js/main.js"+"']")) {
            let elem = document.querySelector("script[src*='assets/js/main.js']");
            document.body.removeChild(elem);
            const scriptMain = document.createElement("script");
            scriptMain.async = true;
            scriptMain.src = "assets/js/main.js";
            document.body.appendChild(scriptMain);
        }
    }

    addtoFavourite(key, event){
        let url = this.state.url;
        if(localStorage.userName === "undefined"){
            window.alert('You need to login for adding dish to favourite!');
        } else {
            let jwt_token = localStorage.jwtToken;
            axios.post(url+'/favorite_dish',
            {
                headers: {"Authorization" : `Bearer`+jwt_token},
                params: {
                    dishId: key
                }
            }).then((response) => {
                console.log(response);
                this.setState({
                    addFavSign: '1'
                }, ()=>{
                    setTimeout(()=>{
                        this.setState({
                            addFavSign: '0'
                        })
                    },5000)
                })
            }).catch((error)=>{
                    console.log(error);
                }
            );
        }
    }

    handleShowSelectedDetail(key){
        this.setState({
            showDetailObj: this.state.selectedDishes[key]
        })
    }

    handleQuitDetail() {
        this.setState({
            showDetailObj: null
        })

    }

    render() {
        const addtoFavourite = this.addtoFavourite;
        let selectedDishes = this.state.selectedDishes;
        let addFavSign = this.state.addFavSign;
        let showDetailObj = this.state.showDetailObj;
        const handleQuitDetail = this.handleQuitDetail;
        const handleShowSelectedDetail = this.handleShowSelectedDetail;

        return (
            <div>
                {addFavSign === '1'?
                    <div id="favBlock" className="alert alert-danger" role="alert">
                        Add to favourite success!
                    </div> : ''
                }
                <div>
                    {/* Hero Area Start */}
                    <div className="ht-hero-section fix">
                        <div className="ht-hero-slider" id="ht-hero-slider">
                            {/* Single Slide Start */}
                            <div className="ht-single-slide bg-home-1">
                                <div className="ht-hero-content-one container">
                                    <h3>Don't know what to eat today?</h3>
                                    <h1 className="cssanimation leDoorCloseLeft sequence">Discover More</h1>
                                    <p>We will recommend healthy recipes according to your need everyday.</p>
                                    {/*<Link to="/Discover" className="default-btn large circle blue hover-blue uppercase">Discover More</Link>*/}
                                </div>
                            </div>
                            {/* Single Slide End */}
                            {/* Single Slide Start */}
                            <div className="ht-single-slide bg-home-2">
                                <div className="ht-hero-content-one container">
                                    <h3>Want to eat healthy?</h3>
                                    <h1 className="cssanimation leDoorCloseLeft sequence">Discover More</h1>
                                    <p>Healthy menues will can be viewed in our website.</p>
                                    {/*<Link to="/Discover" className="default-btn">Discover More</Link>*/}
                                </div>
                            </div>
                            {/* Single Slide End */}
                        </div>
                    </div>
                    {/* Hero Area End */}
                </div>
                {/* Food Categry Area Start */}
                {/*For Show Dishs / Ingredient */}
                {/*<div className="food-category-area pt-105 pb-70">
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
                </div>*/}
                {/* Food Categry Area End */}
                {/* Protuct Area Start */}
                {/*<div className="product-area pt-110 pb-80">
                    <div className="container">
                        <div className="section-title text-center">
                            <div className="section-img d-flex justify-content-center">
                                <img src="assets/img/icon/title.png" alt=""/>
                            </div>
                            <h2><span>Recommend </span>Dishes</h2>
                            <p>Special For You</p>
                        </div>
                    </div>
                    <div className="container">*/}
                        {/*<div className="product-tab-list nav" role="tablist">
                            <a className="active" href="#tab1" data-toggle="tab" role="tab" aria-selected="true"
                               aria-controls="tab1">vegetables</a>
                            <a href="#tab2" data-toggle="tab" role="tab" aria-selected="false"
                               aria-controls="tab2">fruits</a>
                            <a href="#tab3" data-toggle="tab" role="tab" aria-selected="false"
                               aria-controls="tab3">juices</a>
                            <a href="#tab4" data-toggle="tab" role="tab" aria-selected="false"
                               aria-controls="tab4">bread</a>
                        </div>*/}
                        {/*<div className="tab-content text-center">
                            <div className="tab-pane active show fade" id="tab1" role="tabpanel">
                                <div className="product-carousel">

                                    <div className="custom-col">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <a className="modal-view button" data-toggle="modal" data-target="#showDishDetail">
                                                    <img src="assets/img/product/1.jpg" alt=""/>
                                                </a>
                                                <div className="product-hover">
                                                    <ul className="hover-icon-list">
                                                        <li>
                                                            <a onClick={addtoFavourite} value=""><i className="icon icon-Heart"></i></a>
                                                        </li>
                                                    </ul>
                                                    <button type="button" className="p-cart-btn">
                                                        <a className="modal-view button" data-toggle="modal" data-target="#showDishDetail">View Detail</a>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <h5>Juicy Grapes</h5>
                                                <div className="pro-price">
                                                    <span className="new-price">tags</span>
                                                    <span className="old-price">$92.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal fade" id="showDishDetail" tabIndex="-1" role="dialog">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fa fa-close"></i></span></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="form-pop-up-content">
                                                        <h2>Sign Up</h2>
                                                        <form action="#" method="post">
                                                            <div className="form-box">
                                                                <input type="text" placeholder="Full Name" name="fullname"/>
                                                                <input type="text" placeholder="User Name" name="username"/>
                                                                <input type="email" placeholder="Email" name="email"/>
                                                                <input type="password" placeholder="Password" name="pass"/>
                                                                <input type="password" placeholder="Confirm Password" name="re_pass"/>
                                                            </div>
                                                            {/*<div className="checkobx-link">
                                                                <div className="left-col">
                                                                    <input type="checkbox" id="remember_reg"/><label htmlFor="remember_reg">Remember Me</label>
                                                                </div>
                                                            </div>
                                                            <button className="text-uppercase" type="submit">Register</button>
                                                        </form>
                                                    </div>
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
                        </div>*/}
                {/*</div>
                </div>*/}
                {/* Protuct Area End */}

                {/* Protuct Area Start */}
                <div className="product-area pt-110 pb-80">
                    <div className="container">
                        <div className="section-title text-center">
                            <div className="section-img d-flex justify-content-center">
                                <img src="assets/img/icon/title.png" alt=""/>
                            </div>
                            <h2><span>Selected </span>Dishes</h2>
                            <p>Hit Dishes in the community</p>
                        </div>
                    </div>
                    <div className="container">
                        {/*<div className="product-tab-list nav" role="tablist">
                            <a className="active" href="#tab1" data-toggle="tab" role="tab" aria-selected="true"
                               aria-controls="tab1">vegetables</a>
                            <a href="#tab2" data-toggle="tab" role="tab" aria-selected="false"
                               aria-controls="tab2">fruits</a>
                            <a href="#tab3" data-toggle="tab" role="tab" aria-selected="false"
                               aria-controls="tab3">juices</a>
                            <a href="#tab4" data-toggle="tab" role="tab" aria-selected="false"
                               aria-controls="tab4">bread</a>
                        </div>*/}
                        <div className="tab-content text-center">
                            <div className="tab-pane active show fade" id="tab1" role="tabpanel">
                                <div className="product-carousel">
                                    {selectedDishes.map(
                                        (object, i)=>{
                                            return(
                                                <div className="custom-col custom-item" key={i}>
                                                    <div className="single-product-item">
                                                        <div className="product-image">
                                                            <a className="modal-view button" data-toggle="modal" data-target="#showDishDetail">
                                                                <img src={'assets/img/product/d'+(i % 7)+'.jpg'} alt=""/>
                                                            </a>
                                                            <div className="product-hover">
                                                                <ul className="hover-icon-list">
                                                                    <li>
                                                                        <a><i onClick={addtoFavourite.bind(this, i)} key={i} className="icon icon-Heart"></i></a>
                                                                    </li>
                                                                </ul>
                                                                <button type="button" className="p-cart-btn">
                                                                    <a onClick={handleShowSelectedDetail.bind(this, i)} key={i} className="modal-view button" data-toggle="modal" data-target="#showDishDetail">View Detail</a>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product-text">
                                                            <div className="pro-price">
                                                                <h5 className="my-3 new-price">{object.dishName.slice(0,)}</h5>
                                                            </div>
                                                            <p className="">Cooking Time: {object.cookingTime} <br/> Submit Time: {object.submitTime}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            {/*<div className="tab-pane fade" id="tab2" role="tabpanel">
                                <div className="product-carousel">
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
                            </div>*/}
                        </div>
                        <div className="modal fade" id="showDishDetail" tabIndex="-1" role="dialog">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" onClick={this.handleQuitDetail} className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fa fa-close"></i></span></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="quick-view-container">
                                            <div className="quick-view-text">
                                                {showDetailObj !== null?
                                                    (<div>
                                                        <div className="form-pop-up-content">
                                                            <h2>Basic Info</h2>
                                                        </div>
                                                        <div className="dishDetailTextBlock">
                                                            <h4 className="my-2">{showDetailObj.dishName}</h4>
                                                            <p>Dish ID: {showDetailObj.dishId}</p>
                                                            <p>Submit Time: {showDetailObj.submitTime}</p>
                                                            <p>Cooking Time: {showDetailObj.cookingTime}</p>
                                                        </div>
                                                            {/*/<h4 className="my-3">Tags</h4>*/}
                                                        <div className="form-pop-up-content">
                                                            <h2>Tags</h2>
                                                        </div>
                                                        <div className="dishDetailTextBlock">
                                                            <p>Easy or not: {showDetailObj.tag.easy}</p>
                                                            <p>Dish Type:
                                                                {
                                                                    showDetailObj.tag.dishType.map((object, i)=> <span key={i}>{object} </span>)
                                                                }
                                                            </p>
                                                            <p>Festival:
                                                                {
                                                                    showDetailObj.tag.festival.map((object, i)=> <span key={i}>{object} </span>)
                                                                }
                                                            </p>
                                                            <p>Target People:
                                                                {
                                                                    showDetailObj.tag.targetPeople.map((object, i)=> <span key={i}>{object} </span>)
                                                                }
                                                            </p>
                                                            <p>Taste:
                                                                {
                                                                    showDetailObj.tag.taste.map((object, i)=> <span key={i}>{object} </span>)
                                                                }
                                                            </p>
                                                            <p>Region:
                                                                {
                                                                    showDetailObj.tag.region.map((object, i)=> <span key={i}>{object} </span>)
                                                                }
                                                            </p>
                                                        </div>
                                                        <div className="form-pop-up-content">
                                                            <h2>Ingredients</h2>
                                                        </div>
                                                        <div className="dishDetailTextBlock">
                                                            <p className="tags">
                                                                {
                                                                    showDetailObj.ingredient.map((object, i)=>
                                                                        <span className="badge badge-info mx-1" key={i}>{object} </span>)
                                                                }
                                                            </p>
                                                        </div>
                                                        <div className="form-pop-up-content">
                                                            <h2>Nutrition</h2>
                                                        </div>
                                                        <div className="dishDetailTextBlock">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <p className="">Sugar: {showDetailObj.nutrition["sugar"]}</p>
                                                                    <p className="">Cholesterol: {showDetailObj.nutrition["cholesterol"]}</p>
                                                                    <p className="">Fat: {showDetailObj.nutrition["fat"]}</p>
                                                                    <p className="">Protein: {showDetailObj.nutrition["protein"]}</p>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <p className="">Saturated Fat: {showDetailObj.nutrition["saturatedFat"]}</p>
                                                                    <p className="">Sodium: {showDetailObj.nutrition["sodium"]}</p>
                                                                    <p className="">Calories: {showDetailObj.nutrition["calories"]}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-pop-up-content">
                                                            <h2>Description</h2>
                                                        </div>
                                                        <div className="dishDetailTextBlock">
                                                            <p>{showDetailObj.description}</p>
                                                        </div>
                                                        <div className="form-pop-up-content">
                                                            <h2>Steps</h2>
                                                        </div>
                                                        <div className="dishDetailTextBlock">
                                                            <ul>
                                                                {showDetailObj.steps.map((object, i)=>{
                                                                    <li key={i}>{object}</li>
                                                                })
                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>):''
                                                }
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
                {/*<div className="blog-area pb-95">
                    <div className="container">
                        <div className="section-title text-center mb-50">
                            <div className="section-img d-flex justify-content-center">
                                <img src="assets/img/icon/title.png" alt=""/>
                            </div>
                            <h2><span>Selected</span>Menu</h2>
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
                Blog Area End */}

            </div>
        )
    }
}