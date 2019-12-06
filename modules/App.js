import React, {Component} from 'react'
import {render} from 'react-dom';
import { Link } from 'react-router'

export default class App extends Component {

    render() {
        return (
            <div>
                {/*<h1>React Router Tutorial</h1>
                <ul role="nav">
                    <li><Link to="/about" activeStyle={{color: 'red'}}>About</Link></li>
                    <li><Link to="/repos" activeClassName="active">Repos</Link></li>
                </ul>*/}
                <header className="header-area header-sticky">
                    <div className="header-container">
                        <div className="row">
                            <div className="col-lg-5 display-none-md display-none-xs">
                                <div className="ht-main-menu">
                                    <nav>
                                        <ul>
                                            <li className="active"><a href="index.html">home</a></li>
                                            <li><a href="shop.html">Discover<i className="fa fa-angle-down"></i></a>
                                                <ul className="ht-mega-menu">
                                                    <li>
                                                        <ul>
                                                            <li className="mega-menu-title">Bags</li>
                                                            <li><a href="shop.html">Crochet</a></li>
                                                            <li><a href="shop.html">Sleeveles</a></li>
                                                            <li><a href="shop.html">Stripes</a></li>
                                                            <li><a href="shop.html">Sweaters</a></li>
                                                            <li><a href="shop.html"><img src="assets/img/banner/menu-1.jpg" alt=""/></a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <li className="mega-menu-title">Bottoms</li>
                                                            <li><a href="shop.html">Flat sandals</a></li>
                                                            <li><a href="shop.html">Heeled sandals</a></li>
                                                            <li><a href="shop.html">Polo Short Sleeve</a></li>
                                                            <li><a href="shop.html">Short Sleeve</a></li>
                                                            <li><a href="shop.html"><img src="assets/img/banner/menu-2.jpg" alt=""/></a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <li className="mega-menu-title">Shirts</li>
                                                            <li><a href="shop.html">Flat sandals</a></li>
                                                            <li><a href="shop.html">Heeled sandals</a></li>
                                                            <li><a href="shop.html">Polo Short Sleeve</a></li>
                                                            <li><a href="shop.html">Short Sleeve</a></li>
                                                            <li><a href="shop.html"><img src="assets/img/banner/menu-3.jpg" alt=""/></a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="shop.html">Shop <i className="fa fa-angle-down"></i></a>
                                                <ul>
                                                    <li><a href="shop-full-width.html">shop full Width</a></li>
                                                    <li><a href="shop-right-sidebar.html">shop Right Sidebar</a></li>
                                                    <li><a href="wishlist.html">Wishlist Page</a></li>
                                                    <li><a href="cart.html">cart Page</a></li>
                                                    <li><a href="checkout.html">checkout Page</a></li>
                                                    <li><a href="product-details.html">Single Shop</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="blog.html">blog <i className="fa fa-angle-down"></i></a>
                                                <ul>
                                                    <li><a href="blog-2-column.html">blog 2 column</a></li>
                                                    <li><a href="blog-3-column.html">blog 3 column</a></li>
                                                    <li><a href="blog-left-sidebar.html">blog Left Sidebar</a></li>
                                                    <li><a href="blog-details.html">blog details</a></li>
                                                    <li><a href="blog-details-left-sidebar.html">blog details left Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-4">
                                <div className="logo text-center">
                                    <a href="index.html"><img src="assets/img/logo/logo.png" alt="NatureCircle"/></a>
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-8">
                                <div className="header-content d-flex justify-content-end">
                                    <div className="search-wrapper">
                                        <a href="#"><span className="icon icon-Search"></span></a>
                                        <form action="#" className="search-form">
                                            <input type="text" placeholder="Search entire store here ..."/>
                                            <button type="button">Search</button>
                                        </form>
                                    </div>
                                    <div className="settings-wrapper">
                                        <a href="#"><i className="icon icon-Settings"></i></a>
                                        <div className="settings-content">
                                            <h4>My Account <i className="fa fa-angle-down"></i></h4>
                                            <ul>
                                                <li><a href="#" className="modal-view button" data-toggle="modal" data-target="#register_box">Register</a></li>
                                                <li><a href="#" className="modal-view button" data-toggle="modal" data-target="#login_box">login</a></li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-menu-area">
                        <div className="mobile-menu container">
                            <nav id="mobile-menu-active">
                                <ul className="menu-overflow">
                                    <li><a href="index.html">HOME</a>
                                        <ul>
                                            <li><a href="index.html">Home One</a></li>
                                            <li><a href="index-2.html">Home Two</a></li>
                                            <li><a href="index-3.html">Home Three</a></li>
                                            <li><a href="index-4.html">Home Four</a></li>
                                            <li><a href="index-5.html">Home Five</a></li>
                                            <li><a href="index-6.html">Home Six</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="shop.html">Shop</a>
                                        <ul>
                                            <li><a href="shop-full-width.html">shop full Width</a></li>
                                            <li><a href="shop-right-sidebar.html">shop Right Sidebar</a></li>
                                            <li><a href="wishlist.html">Wishlist Page</a></li>
                                            <li><a href="cart.html">cart Page</a></li>
                                            <li><a href="checkout.html">checkout Page</a></li>
                                            <li><a href="product-details.html">Single Shop</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="blog.html">Blog</a>
                                        <ul>
                                            <li><a href="blog-2-column.html">blog 2 column</a></li>
                                            <li><a href="blog-3-column.html">blog 3 column</a></li>
                                            <li><a href="blog-left-sidebar.html">blog Left Sidebar</a></li>
                                            <li><a href="blog-details.html">blog details</a></li>
                                            <li><a href="blog-details-left-sidebar.html">blog details left Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="404.html">404</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="modal fade" id="login_box" tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fa fa-close"></i></span></button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-pop-up-content">
                                        <h2>Login to your account</h2>
                                        <form action="#" method="post">
                                            <div className="form-box">
                                                <input type="text" placeholder="User Name" name="username"/>
                                                <input type="password" placeholder="Password" name="pass"/>
                                            </div>
                                            <div className="checkobx-link">
                                                <div className="left-col">
                                                    <input type="checkbox" id="remember_me"/><label htmlFor="remember_me">Remember Me</label>
                                                </div>
                                                <div className="right-col"><a href="#">Forget Password?</a></div>
                                            </div>
                                            <button type="submit">Sign In</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="register_box" tabIndex="-1" role="dialog">
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
                                            <div className="checkobx-link">
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
                </header>

                {this.props.children}
                {/* Footer Area Start */}
                <footer className="footer-area">
                    {/* Footer Top Area Start */}
                    <div className="footer-top bg-4 pt-120 pb-120">

                        {/* Footer Widget Area Start */}
                        <div className="footer-widget-area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-footer-widget">
                                            <div className="footer-logo">
                                                <a href="#"><img src="assets/img/logo/logo.png" alt=""/></a>
                                            </div>
                                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem
                                                consuetudium lectorum.</p>
                                            <div className="footer-text">
                                                <span><i className="icon icon-Pointer"></i>Address : No 40 Baria Sreet 133/2, NewYork, USA.</span>
                                                <span><i className="icon icon-Phone"></i>Phone : +(1234) 567 890</span>
                                                <span><i
                                                    className="icon icon-Mail"></i>Email : demo@naturecircle.com</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-3">
                                        <div className="single-footer-widget">
                                            <h3>Products</h3>
                                            <ul className="footer-widget-list">
                                                <li><a href="shop.html">Prices drop</a></li>
                                                <li><a href="shop.html">New products</a></li>
                                                <li><a href="shop.html">Best sales</a></li>
                                                <li><a href="shop.html">Stores</a></li>
                                                <li><a href="#">Login</a></li>
                                                <li><a href="#">My Account</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-3">
                                        <div className="single-footer-widget">
                                            <h3>Our company</h3>
                                            <ul className="footer-widget-list">
                                                <li><a href="#">Delivery</a></li>
                                                <li><a href="#">Legal Notice</a></li>
                                                <li><a href="#">Documentation</a></li>
                                                <li><a href="#">Secure payment</a></li>
                                                <li><a href="contact.html">Contact us</a></li>
                                                <li><a href="shop.html">Stores</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="single-footer-widget">
                                            <h3>Instagram</h3>
                                            <div className="instagram-image">
                                                <div className="single-insta-img">
                                                    <a href="#"><img src="assets/img/instagram/1.jpg" alt=""/></a>
                                                </div>
                                                <div className="single-insta-img">
                                                    <a href="#"><img src="assets/img/instagram/2.jpg" alt=""/></a>
                                                </div>
                                                <div className="single-insta-img">
                                                    <a href="#"><img src="assets/img/instagram/3.jpg" alt=""/></a>
                                                </div>
                                                <div className="single-insta-img">
                                                    <a href="#"><img src="assets/img/instagram/4.jpg" alt=""/></a>
                                                </div>
                                                <div className="single-insta-img">
                                                    <a href="#"><img src="assets/img/instagram/5.jpg" alt=""/></a>
                                                </div>
                                                <div className="single-insta-img">
                                                    <a href="#"><img src="assets/img/instagram/6.jpg" alt=""/></a>
                                                </div>
                                                <div className="single-insta-img">
                                                    <a href="#"><img src="assets/img/instagram/7.jpg" alt=""/></a>
                                                </div>
                                                <div className="single-insta-img">
                                                    <a href="#"><img src="assets/img/instagram/8.jpg" alt=""/></a>
                                                </div>
                                            </div>
                                            <a href="#">Follow our instagram <i
                                                className="fa fa-angle-double-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Footer Widget Area End */}
                    </div>
                    {/* Footer Top Area End */}
                    {/* Footer Bottom Area Start */}
                    <div className="footer-bottom-area pt-15 pb-30">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 d-flex col-md-6">
                                    <div className="footer-text-bottom">
                                        <p>Copyright &copy; <a href="#">Naturecircle</a>. All Rights Reserved</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="payment-img d-flex justify-content-end">
                                        <img src="assets/img/payment.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer Bottom Area End */}
                </footer>
                {/* Footer Area End */}
            </div>
        )
    }
}
