import React from 'react';
import { Link } from 'react-router-dom';


const Shop = () => {
  return (
    <div>

      {/* preloader area start */}
      {/* <div className="preloader" id="preloader">
            <div className="preloader-inner">
              <div id="wave1">
              </div>
              <div className="spinner">
                <div className="dot1" />
                <div className="dot2" />
              </div>
            </div>
          </div> */}
      {/* preloader area end */}
      {/* search popup area start */}
      <div className="body-overlay" id="body-overlay" />
      <div className="td-search-popup" id="td-search-popup">
        <form action="https://themefie.com/html/foodka/index.html" className="search-form">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search....." />
          </div>
          <button type="submit" className="submit-btn"><i className="fa fa-search" /></button>
        </form>
      </div>
      {/* //. search Popup */}
      {/* navbar start */}
        <header className="navbar-area">
          <nav className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div className="responsive-mobile-menu">
                <button className="menu toggle-btn d-block d-lg-none" data-target="#themefie_main_menu"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span className="icon-left"></span>
                  <span className="icon-right"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="themefie_main_menu">

                <ul className="navbar-nav menu-open">
                  <li className="current-menu-item menu-item-has-children">
                    <Link to={"/"}>HOME</Link>

                    <ul className="sub-menu ps-0">
                      <li><Link to={"/"}>Home 01</Link>

                      </li>

                    </ul>
                  </li>
                  <li className="current-menu-item menu-item-has-children">
                    <Link to={"#"}>PAGES</Link>
                    <ul className="sub-menu ps-0">
                      <li><Link to={"/about"}>About</Link></li>
                      <li><Link to={"/blog"}>Blog</Link></li>
                      <li><Link to={"/blog-details"}>Blog Details</Link></li>
                      <li><Link to={"/menu"}>Menu</Link></li>
                      <li><Link to={"/menu-list"}>Menu List</Link></li>
                      <li><Link to={"/shop"}>Shop</Link></li>
                      <li><Link to={"/single-product"}>Shop Details</Link></li>
                      <li><Link to={"/cart"}>Cart</Link></li>
                      <li><Link to={"/checkout"}>Checkout</Link></li>
                    </ul>


                  </li>
                  <li>
                    <Link to={"/about"}>ABOUT US</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>CONTACTS</Link>
                  </li>
                </ul>

              </div>
              <div className="logo">
                <Link className="main-logo" to={'./hom1'}><img src="assets/img/logo.png" alt="img" /></Link>
              </div>
              <div className="nav-right-part nav-right-part-mobile">
                <ul>
                  <li><Link className="search" to={'#'}><i className="ri-search-line"></i></Link>
                  </li>
                  <li className="phone-contact d-md-block d-none"><i className="ri-phone-fill float-start"></i>
                    +997 509 153 849
                  </li>
                  <li className="menu-cart"><Link to={"/cart"}>CART <span>1</span></Link></li>
                  <li>49.50 $</li>
                </ul>
              </div>
              <div className="nav-right-part nav-right-part-desktop">
                <ul>
                  <li><Link className="search" to={'#'}> <i className="ri-search-line"></i></Link>
                  </li>
                  <li className="phone-contact"><i className="ri-phone-fill float-start"></i>
                    +997 509 153 849
                  </li>
                  <li className="menu-cart"><Link to={"/cart"}>CART <span>1</span></Link></li>
                  <li>49.50 $</li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      {/* navbar end */}
      {/* bredcrumb Area Start*/}
      <section className="breadcrumb-area">
        <div className="banner-bg-img" />
        <div className="banner-shape-1"><img src="assets/img/banner/shape-1.png" alt="img" /></div>
        <div className="banner-shape-2"><img src="assets/img/banner/shape-2.png" alt="img" /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 align-self-center">
              <div className="banner-inner text-center">
                <h3>Choose you items
                </h3>
                <h1>SHOP PAGE</h1>
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="https://www.themefie.com/html/foodka/home.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Shop</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb Area End */}
      {/* shop Area Start*/}
      <section className="shop-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row justify-content-center">
                <div className="col-sm-6 align-self-center pb-4">
                  <p className="mb-0">Showing 1–8 of 12 results</p>
                </div>
                <div className="col-sm-6 align-self-center pb-4">
                  <select className="single-select float-sm-end">
                    <option>Default sorting</option>
                    <option value="asc">Pizza</option>
                    <option value="desc">Burger</option>
                    <option value="pop">Ramen</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/1.png" alt="img" />
                      <a className="fav-btn" href="#"><i className="ri-heart-line" /></a>
                    </div>
                    <div className="wrap-details">
                      <h5><a href="single-product.html">Margherita Pizza</a></h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-half-line pe-0" />
                          </span>
                          (200)
                        </div>
                        <h6 className="price">$17.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <a className="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/2.png" alt="img" />
                      <a className="fav-btn" href="#"><i className="ri-heart-line" /></a>
                    </div>
                    <div className="wrap-details">
                      <h5><a href="single-product.html">Maxican Pizza Test Better</a></h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-half-line pe-0" />
                          </span>
                          (928)
                        </div>
                        <h6 className="price">$29.00</h6>
                      </div>
                      <div className="btn-area">
                        <a className="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/3.png" alt="img" />
                      <a className="fav-btn" href="#"><i className="ri-heart-line" /></a>
                    </div>
                    <div className="wrap-details">
                      <h5><a href="single-product.html">Roasted Garlic Chicken Pizza </a></h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-half-line pe-0" />
                          </span>
                          (462)
                        </div>
                        <h6 className="price">$27.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <a className="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/4.png" alt="img" />
                      <a className="fav-btn" href="#"><i className="ri-heart-line" /></a>
                    </div>
                    <div className="wrap-details">
                      <h5><a href="single-product.html">All Season Gulliver Pizza</a></h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-half-line pe-0" />
                          </span>
                          (462)
                        </div>
                        <h6 className="price">$29.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <a className="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/5.png" alt="img" />
                      <a className="fav-btn" href="#"><i className="ri-heart-line" /></a>
                    </div>
                    <div className="wrap-details">
                      <h5><a href="single-product.html">Chicken Fajita Pizza Large</a></h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-half-line pe-0" />
                          </span>
                          (200)
                        </div>
                        <h6 className="price">$29.00</h6>
                      </div>
                      <div className="btn-area">
                        <a className="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/pizza/6.png" alt="img" />
                      <a className="fav-btn" href="#"><i className="ri-heart-line" /></a>
                    </div>
                    <div className="wrap-details">
                      <h5><a href="single-product.html">BBQ Chicken Classic Pizza Large</a></h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-half-line pe-0" />
                          </span>
                          (602)
                        </div>
                        <h6 className="price">$27.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <a className="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/burger/1.png" alt="img" />
                      <a className="fav-btn" href="#"><i className="ri-heart-line" /></a>
                    </div>
                    <div className="wrap-details">
                      <h5><a href="single-product.html">Patty Buns Burgers</a></h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-half-line pe-0" />
                          </span>
                          (462)
                        </div>
                        <h6 className="price">$27.00</h6>
                      </div>
                    </div>
                    <div className="btn-area">
                      <a className="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-item-wrap">
                    <div className="thumb">
                      <img src="assets/img/product/burger/2.png" alt="img" />
                      <a className="fav-btn" href="#"><i className="ri-heart-line" /></a>
                    </div>
                    <div className="wrap-details">
                      <h5><a href="single-product.html">Double Burger</a></h5>
                      <div className="wrap-footer">
                        <div className="rating">
                          4.9
                          <span className="rating-inner">
                            <i className="ri-star-fill ps-0" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-half-line pe-0" />
                          </span>
                          (928)
                        </div>
                        <h6 className="price">$29.00</h6>
                      </div>
                      <div className="btn-area">
                        <a className="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-first">
              <div className="sidebar-area">
                <div className="widget widget_search">
                  <form className="search-form">
                    <div className="form-group">
                      <input type="text" placeholder="Search your itmes" />
                    </div>
                    <button className="submit-btn" type="submit"><i className="ri-search-line" /></button>
                  </form>
                </div>
                <div className="widget widget_categories style-2">
                  <h4 className="widget-title">Categories</h4>
                  <ul>
                    <li><a href="#"><img src="assets/img/category/1.png" alt="img" /> Ramen <span>(5)</span></a></li>
                    <li><a href="#"><img src="assets/img/category/2.png" alt="img" /> Pizza <span>(9)</span> </a></li>
                    <li><a href="#"><img src="assets/img/category/3.png" alt="img" /> Burger <span>(18)</span></a></li>
                    <li><a href="#"><img src="assets/img/category/4.png" alt="img" /> French fries <span>(14)</span></a></li>
                    <li><a href="#"><img src="assets/img/category/5.png" alt="img" /> Fast food <span>(10)</span></a></li>
                    <li><a href="#"><img src="assets/img/category/6.png" alt="img" /> Soft drinks <span>(28)</span></a></li>
                  </ul>
                </div>
                <div className="widget widget_filter">
                  <h4 className="widget-title">Filter by Price</h4>
                  <div className="side-bar-range">
                    <div id="slider-range" />
                    <div className="row g-0">
                      <div className="col-lg-6 align-self-center">
                        <a className="btn btn-base" href="#">Filter</a>
                      </div>
                      <div className="col-lg-6 align-self-center">
                        <p>Price:
                          <input type="text" id="amount" readOnly />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget widget-recent-post style-2">
                  <h4 className="widget-title">Today’s Best Deals</h4>
                  <ul>
                    <li>
                      <div className="media">
                        <div className="media-left">
                          <img src="assets/img/widget/01.png" alt="widget" />
                        </div>
                        <div className="media-body">
                          <h6 className="title"><a href="#">Patty Buns Burgers</a></h6>
                          <div className="rating">
                            4.9
                            <span className="rating-inner">
                              <i className="ri-star-fill ps-0" />
                              <i className="ri-star-fill" />
                              <i className="ri-star-fill" />
                              <i className="ri-star-fill" />
                              <i className="ri-star-half-line pe-0" />
                            </span>
                            (462)
                          </div>
                          <h6 className="price">$29.00</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <div className="media-left">
                          <img src="assets/img/widget/02.png" alt="widget" />
                        </div>
                        <div className="media-body">
                          <h6 className="title"><a href="#">Garlic Chicken Pizza</a></h6>
                          <div className="rating">
                            4.9
                            <span className="rating-inner">
                              <i className="ri-star-fill ps-0" />
                              <i className="ri-star-fill" />
                              <i className="ri-star-fill" />
                              <i className="ri-star-fill" />
                              <i className="ri-star-half-line pe-0" />
                            </span>
                            (262)
                          </div>
                          <h6 className="price">$20.00</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <div className="media-left">
                          <img src="assets/img/widget/03.png" alt="widget" />
                        </div>
                        <div className="media-body">
                          <h6 className="title"><a href="#">BBQ Chicken Pizza</a></h6>
                          <div className="rating">
                            4.9
                            <span className="rating-inner">
                              <i className="ri-star-fill ps-0" />
                              <i className="ri-star-fill" />
                              <i className="ri-star-fill" />
                              <i className="ri-star-fill" />
                              <i className="ri-star-half-line pe-0" />
                            </span>
                            (262)
                          </div>
                          <h6 className="price">$27.00</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <div className="media-left">
                          <img src="assets/img/widget/04.png" alt="widget" />
                        </div>
                        <div className="media-body">
                          <h6 className="title"><a href="#">Margherita Pizza</a></h6>
                          <div className="rating">
                            4.9
                            <span className="rating-inner">
                              <i className="ri-star-fill ps-0" />
                              <i className="ri-star-fill" />
                              <i className="ri-star-fill" />
                              <i className="ri-star-fill" />
                              <i className="ri-star-half-line pe-0" />
                            </span>
                            (262)
                          </div>
                          <h6 className="price">$35.00</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <a className="d-block mb-5" href="#"><img className="w-100" src="assets/img/widget/ad.png" alt="img" /></a>
              </div>
            </div>
            <div className="col-12">
              <nav className="text-end">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="ri-arrow-left-s-line" />
                    </a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="ri-arrow-right-s-line" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* shop Area End */}
      {/* footer area start */}
      <footer className="footer-area pd-top-100">
        <div className="footer-inner padding-top-100 padding-bottom-65">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget widget">
                  <div className="logo">
                    <img src="assets/img/logo.png" alt="img" />
                  </div>
                  <ul className="contact_info_list">
                    <li className="single-info-item">
                      <img src="assets/img/icon/location.png" alt="icon" />
                      <div className="details">
                        4920 Trails End Road Ft  United States, FL 33311
                      </div>
                    </li>
                    <li className="single-info-item">
                      <img src="assets/img/icon/envelope.png" alt="icon" />
                      <div className="details">
                        ordernow@foodka.com
                      </div>
                    </li>
                    <li className="single-info-item">
                      <img src="assets/img/icon/phone.png" alt="icon" />
                      <div className="details">
                        +997 509 153 849
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget widget widget_link">
                  <h4 className="widget-title">Hot Menu</h4>
                  <ul>
                    <li><a href="menu-list.html">Burger King Whopper</a></li>
                    <li><a href="menu-list.html">Five Guys Cheeseburger</a></li>
                    <li><a href="menu-list.html">KFC Original Recipe Chicken</a></li>
                    <li><a href="menu-list.html">Wendy's Frosty</a></li>
                    <li><a href="menu-list.html">McDonald's Happy Meal</a></li>
                    <li><a href="menu-list.html">Domino's Pepperoni Pizza</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget widget widget_link">
                  <h4 className="widget-title">Opening Hours</h4>
                  <ul>
                    <li>Monday : 09.00am-10.00pm</li>
                    <li>Tuesday : 09.00am-10.00pm</li>
                    <li>Wednesday : 09.00am-10.00pm</li>
                    <li>Thursday : 09.00am-10.00pm</li>
                    <li>Friday  : 09.00am-10.00pm</li>
                    <li>Saturday &amp; Sunday : <span>Closed</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget widget widget_instagram_feeds">
                  <h4 className="widget-title">Instagram Feeds</h4>
                  <ul>
                    <li><a href="#"><img src="assets/img/instagram/1.png" alt="instagram" /></a></li>
                    <li><a href="#"><img src="assets/img/instagram/2.png" alt="instagram" /></a></li>
                    <li><a href="#"><img src="assets/img/instagram/3.png" alt="instagram" /></a></li>
                    <li><a href="#"><img src="assets/img/instagram/4.png" alt="instagram" /></a></li>
                    <li><a href="#"><img src="assets/img/instagram/5.png" alt="instagram" /></a></li>
                    <li><a href="#"><img src="assets/img/instagram/6.png" alt="instagram" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-md-start text-center">
                <div className="copyright-area">
                  <p>© 2021 Foodka. All Rights Reserved by Themefie</p>
                </div>
              </div>
              <div className="col-md-6">
                <ul className="social-area text-md-end text-center mt-md-0 mt-2">
                  <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="#"><i className="fab fa-twitter" /></a></li>
                  <li><a href="#"><i className="fab fa-behance" /></a></li>
                  <li><a href="#"><i className="fab fa-google-plus-g" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
      {/* back-to-top end */}
      <div className="back-to-top">
        <span className="back-top"><i className="fas fa-angle-double-up" /></span>
      </div>
      {/* all plugins here */}
      {/* main js  */}
      {/* Mirrored from themefie.com/html/foodka/shop.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 21 Feb 2023 16:15:59 GMT */}
    </div>
  )
}

export default Shop




