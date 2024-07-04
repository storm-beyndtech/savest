export default function Shipment() {
  
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Savest Shipment</title>
      <meta name="description" content="savest....." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="assets/img/favicon.png"
      />
      {/* Place favicon.ico in the root directory */}
      {/* CSS here */}
      <link rel="stylesheet" href="assets/css/all.min.css" />
      <link rel="stylesheet" href="assets/css/animate.min.css" />
      <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/css/custom-animate.css" />
      <link rel="stylesheet" href="assets/css/icomoon.css" />
      <link rel="stylesheet" href="assets/css/jquery.magnific-popup.css" />
      <link rel="stylesheet" href="assets/css/nice-select.css" />
      <link rel="stylesheet" href="assets/css/nouislider.min.css" />
      <link rel="stylesheet" href="assets/css/nouislider.pips.css" />
      <link rel="stylesheet" href="assets/css/odometer.css" />
      <link rel="stylesheet" href="assets/css/slick.css" />
      <link rel="stylesheet" href="assets/css/swiper.min.css" />
      <link rel="stylesheet" href="assets/css/style.css" />
      <link rel="stylesheet" href="assets/css/responsive.css" />
      {/* preloader */}
      <div id="preloader">
        <div id="loading-center">
          <div className="loader">
            <div className="loader-outter" />
            <div className="loader-inner" />
          </div>
        </div>
      </div>
      {/* preloader-end */}
      {/* Scroll-top */}
      <button className="scroll-top scroll-to-target" data-target="html">
        <i className="icon-up" />
      </button>
      {/* Scroll-top-end*/}
      <div className="fix">
        {/*Start Main Header One */}
        <header className="main-header main-header-one">
          <div id="sticky-header" className="menu-area">
            <div className="main-header-one__outer">
              <div className="logo-box-one">
                <div
                  className="logo-box-one__bg"
                  style={{
                    backgroundImage:
                      'url(assets/img/pattern/logo-box-one-pattern.png)',
                  }}
                />
                <a href="index-2.html">
                  <img src="assets/img/resource/logo-1.png" alt="Logo" />
                </a>
              </div>
              <div className="main-header-one__right">
                <div className="container">
                  <div className="menu-area__inner">
                    <div className="mobile-nav-toggler">
                      <i className="fas fa-bars" />
                    </div>
                    <div className="menu-wrap">
                      <nav className="menu-nav">
                        <div className="main-header-one__inner">
                          <div className="main-header-one__top">
                            <div
                              className="main-header-one__top-pattern"
                              style={{
                                backgroundImage:
                                  'url(assets/img/pattern/header-pattern.png)',
                              }}
                            ></div>
                            <div className="main-header-one__top-inner">
                              <div className="main-header-one__top-left">
                                <div className="header-contact-info">
                                  <ul>
                                    <li>
                                      <div className="icon-box">
                                        <span className="icon-pin" />
                                      </div>
                                      <p>Jones Street, New York, USA</p>
                                    </li>
                                    <li>
                                      <div className="icon-box">
                                        <span className="icon-paper-plane" />
                                      </div>
                                      <p>
                                        <a href="mailto:yourmail@email.com">
                                          Info@example.com
                                        </a>
                                      </p>
                                    </li>
                                    <li>
                                      <div className="icon-box">
                                        <span className="icon-out-call" />
                                      </div>
                                      <p>
                                        <a href="tel:123456789">
                                          +70 264 566 579
                                        </a>
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="main-header-one__top-right">
                                <div className="inner">
                                  <div className="header-social-links">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <span className="icon-facebook" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="icon-twitter" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="icon-instagram" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span className="icon-linkedin" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="main-header-one__bottom">
                            <div className="main-header-one__bottom-left">
                              <div className="navbar-wrap main-menu">
                                <ul className="navigation">
                                  <li className="active menu-item-has-children">
                                    <a href="#">Home</a>
                                    <ul className="sub-menu">
                                      <li>
                                        <a href="index-2.html">Home One</a>
                                      </li>
                                      <li>
                                        <a href="index-3.html">Home Two</a>
                                      </li>
                                      <li>
                                        <a href="index-4.html">Home Three</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="about.html">About</a>
                                  </li>
                                  <li className="menu-item-has-children">
                                    <a href="#">Services</a>
                                    <ul className="sub-menu">
                                      <li>
                                        <a href="services.html">Services</a>
                                      </li>
                                      <li>
                                        <a href="road-transport.html">
                                          Road Transport
                                        </a>
                                      </li>
                                      <li>
                                        <a href="air-transport.html">
                                          Air Transport
                                        </a>
                                      </li>
                                      <li>
                                        <a href="cargo-transport.html">
                                          Cargo Transport
                                        </a>
                                      </li>
                                      <li>
                                        <a href="ocean-freight.html">
                                          Ocean Freight
                                        </a>
                                      </li>
                                      <li>
                                        <a href="rail-transport.html">
                                          Rail Transport
                                        </a>
                                      </li>
                                      <li>
                                        <a href="warehousing.html">
                                          Warehousing
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="menu-item-has-children">
                                    <a href="#">Pages</a>
                                    <ul className="sub-menu">
                                      <li>
                                        <a href="team.html">Team</a>
                                      </li>
                                      <li>
                                        <a href="team-details.html">
                                          Team Details
                                        </a>
                                      </li>
                                      <li>
                                        <a href="projects.html">Projects</a>
                                      </li>
                                      <li>
                                        <a href="project-details.html">
                                          Project Details
                                        </a>
                                      </li>
                                      <li>
                                        <a href="error.html">404</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="menu-item-has-children">
                                    <a href="#">Blog</a>
                                    <ul className="sub-menu">
                                      <li>
                                        <a href="blog.html">Blog</a>
                                      </li>
                                      <li>
                                        <a href="blog-standard.html">
                                          Blog standard
                                        </a>
                                      </li>
                                      <li>
                                        <a href="blog-details.html">
                                          Blog Details
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="contact.html">Contact</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="main-header-one__bottom-right">
                              <div className="search-box">
                                <a
                                  href="#"
                                  className="main-menu__search search-toggler icon-magnifying-glass"
                                />
                              </div>
                              <div className="btn-box">
                                <a className="thm-btn" href="#">
                                  <span className="txt">Get Free Quote</span>
                                  <i className="icon-right-arrow" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </div>
                  {/* Mobile Menu  */}
                  <div className="mobile-menu">
                    <nav className="menu-box">
                      <div className="close-btn">
                        <i className="fas fa-times" />
                      </div>
                      <div className="nav-logo">
                        <a href="index-2.html">
                          <img
                            src="assets/img/resource/mobile-menu-logo3.png"
                            alt="Logo"
                          />
                        </a>
                      </div>
                      <div className="menu-outer">
                        {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                      </div>
                      <div className="contact-info">
                        <div className="icon-box">
                          <span className="icon-telephone-handle-silhouette" />
                        </div>
                        <p>
                          <a href="tel:123456789">(629) 555-0129</a>
                        </p>
                      </div>
                      <div className="social-links">
                        <ul className="clearfix list-wrap">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-youtube" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  <div className="menu-backdrop" />
                  {/* End Mobile Menu */}
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*End Main Header One */}
        {/*Start Main Slider One*/}
        <section className="main-slider main-slider-one">
          <div
            className="swiper-container thm-swiper__slider"
            data-swiper-options='{"slidesPerView": 1, "loop": true, "effect": "fade", "pagination": {
          "el": "#main-slider-pagination",
          "type": "bullets",
          "clickable": true
          },
          "navigation": {
          "nextEl": "#main-slider__swiper-button-next",
          "prevEl": "#main-slider__swiper-button-prev"
          },
          "autoplay": {
          "delay": 7000
          }}'
          >
            <div className="swiper-wrapper">
              {/*Start Swiper Slide Single*/}
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      'url(assets/img/slider/slider-v1-img1.jpg)',
                  }}
                ></div>
                <div className="big-title">
                  <h2>Air Freight</h2>
                </div>
                <div className="img-box">
                  <img src="assets/img/slider/slider-v1-img4.png" alt="" />
                </div>
                <div className="icon-one">
                  <img src="assets/img/icon/slider-v1-icon1.png" alt="" />
                </div>
                <div className="icon-two">
                  <img src="assets/img/icon/slider-v1-icon2.png" alt="" />
                </div>
                <div className="container">
                  <div className="main-slider-one__single">
                    <div className="main-slider-one__content">
                      <h3>
                        <span>01.</span> AIR Freight
                      </h3>
                      <h2>
                        Fast and safe <br />
                        <span>transport</span> your <br />
                        product
                      </h2>
                      <p>
                        With more than 30 years of experience in the logistics
                        industry <br />
                        bibendum auctor nisi elit more consequat ipsum.
                      </p>
                      <div className="btn-box">
                        <a className="thm-btn" href="#">
                          <span className="txt">Calculate Package</span>
                          <i className="icon-right-arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Swiper Slide Single*/}
              {/*Start Swiper Slide Single*/}
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      'url(assets/img/slider/slider-v1-img2.jpg)',
                  }}
                ></div>
                <div className="big-title">
                  <h2>Air Freight</h2>
                </div>
                <div className="img-box">
                  <img src="assets/img/slider/slider-v1-img4.png" alt="" />
                </div>
                <div className="icon-one">
                  <img src="assets/img/icon/slider-v1-icon1.png" alt="" />
                </div>
                <div className="icon-two">
                  <img src="assets/img/icon/slider-v1-icon2.png" alt="" />
                </div>
                <div className="container">
                  <div className="main-slider-one__single">
                    <div className="main-slider-one__content">
                      <h3>
                        <span>02.</span> AIR Freight
                      </h3>
                      <h2>
                        Fast and safe <br />
                        <span>transport</span> your <br />
                        product
                      </h2>
                      <p>
                        With more than 30 years of experience in the logistics
                        industry <br />
                        bibendum auctor nisi elit more consequat ipsum.
                      </p>
                      <div className="btn-box">
                        <a className="thm-btn" href="#">
                          <span className="txt">Calculate Package</span>
                          <i className="icon-right-arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Swiper Slide Single*/}
              {/*Start Swiper Slide Single*/}
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      'url(assets/img/slider/slider-v1-img3.jpg)',
                  }}
                ></div>
                <div className="big-title">
                  <h2>Air Freight</h2>
                </div>
                <div className="img-box">
                  <img src="assets/img/slider/slider-v1-img4.png" alt="" />
                </div>
                <div className="icon-one">
                  <img src="assets/img/icon/slider-v1-icon1.png" alt="" />
                </div>
                <div className="icon-two">
                  <img src="assets/img/icon/slider-v1-icon2.png" alt="" />
                </div>
                <div className="container">
                  <div className="main-slider-one__single">
                    <div className="main-slider-one__content">
                      <h3>
                        <span>03.</span> AIR Freight
                      </h3>
                      <h2>
                        Fast and safe <br />
                        <span>transport</span> your <br />
                        product
                      </h2>
                      <p>
                        With more than 30 years of experience in the logistics
                        industry <br />
                        bibendum auctor nisi elit more consequat ipsum.
                      </p>
                      <div className="btn-box">
                        <a className="thm-btn" href="#">
                          <span className="txt">Calculate Package</span>
                          <i className="icon-right-arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Swiper Slide Single*/}
            </div>
            {/* If we need navigation buttons */}
            <div className="swiper-pagination" id="main-slider-pagination" />
            <div className="main-slider__nav">
              <div
                className="swiper-button-prev"
                id="main-slider__swiper-button-next"
              >
                <i className="fa fa-angle-left" aria-hidden="true" />
              </div>
              <div
                className="swiper-button-next"
                id="main-slider__swiper-button-prev"
              >
                <i className="fa fa-angle-right" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>
        {/*End Main Slider One*/}
        {/*Start About One*/}
        <div className="about-one">
          <div className="about-one__big-title">translo </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div className="about-one__img clearfix">
                  <div className="shape1 float-bob-x">
                    <img src="assets/img/shape/about-v1-shape1.png" alt="" />
                  </div>
                  <div className="inner clearfix">
                    <img
                      className="float-bob-y"
                      src="assets/img/about/about-one__img1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="btn-box">
                    <div className="round-text">
                      <div className="curved-circle rotate-me">
                        Award Winning Company - Since 1980 -
                      </div>
                      <a href="#">
                        Read <br />
                        More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="about-one__content">
                  <div className="about-one__content-top">
                    <div className="sec-title">
                      <div className="sub-title">
                        <h5>
                          <span className="icon-right-arrow-1" /> About
                          Company
                        </h5>
                      </div>
                      <h2>
                        Digital &amp; Trusted Transport <br />
                        Logistic Company
                      </h2>
                    </div>
                    <div className="text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod of tempor incididunt ut labore et
                        dolore magna aliqua. Quis ipsum suspend ultrices
                        gravida risus commodo viverra maecenas.
                      </p>
                    </div>
                  </div>
                  <div className="about-one__content-features">
                    <ul>
                      <li
                        className="wow fadeInRight"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="inner">
                          <div className="icon-box">
                            <img
                              src="assets/img/icon/about/worldwide-delivery.png"
                              alt="#"
                            />
                          </div>
                          <div className="text-box">
                            <h4>Fast Worldwide Delivery</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod of tempor
                              incididunt ut labore et dolore.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li
                        className="wow fadeInRight"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="inner">
                          <div className="icon-box">
                            <img
                              src="assets/img/icon/about/secure-delivery.png"
                              alt="#"
                            />
                          </div>
                          <div className="text-box">
                            <h4>Safe And Secure Delivery</h4>
                            <p>
                              There are many variations of passages of Lorem
                              Ipsum available but the majority have suffered
                              alteration in some form,
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End About One*/}
        {/*Start Service One */}
        <section className="service-one">
          <div className="container">
            <div className="service-one__top">
              <div className="sec-title">
                <div className="sub-title">
                  <h5>
                    <span className="icon-right-arrow-1" /> Our Services
                  </h5>
                </div>
                <h2>
                  Fast and professional <br />
                  Logistic services
                </h2>
              </div>
              <div className="btn-box">
                <a className="thm-btn" href="services.html">
                  <span className="txt">View All Service</span>
                  <i className="icon-right-arrow" />
                </a>
              </div>
            </div>
            <div
              className="thm-swiper__slider swiper-container"
              data-swiper-options='{"spaceBetween": 50,
                  "slidesPerView": 3,
                  "loop": true,
                  "pagination": {
                      "el": "#service-one__pagination",
                      "type": "bullets",
                      "clickable": true
                      },
                  "navigation": {
                      "nextEl": "#team-one__swiper-button-next",
                      "prevEl": "#team-one__swiper-button-prev"
                  },
                  "autoplay": { "delay": 5000 },
                  "breakpoints": {
                      "0": {
                          "spaceBetween": 30,
                          "slidesPerView": 1
                      },
                      "375": {
                          "spaceBetween": 30,
                          "slidesPerView": 1
                      },
                      "575": {
                          "spaceBetween": 30,
                          "slidesPerView": 1
                      },
                      "768": {
                          "spaceBetween": 30,
                          "slidesPerView": 2
                      },
                      "992": {
                          "spaceBetween": 30,
                          "slidesPerView": 3
                      },
                      "1200": {
                          "spaceBetween": 50,
                          "slidesPerView": 3
                      }
                  }
              }'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  {/*Start Service One Single*/}
                  <div className="service-one__single">
                    <div className="service-one__single-img">
                      <div className="inner">
                        <img
                          src="assets/img/service/service-one__img1.jpg"
                          alt="#"
                        />
                        <div className="overlay-icon">
                          <img
                            src="assets/img/icon/services/air-freight.png"
                            alt="#"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="service-one__single-content">
                      <h3>
                        <a href="road-transport.html">Air Freight</a>
                      </h3>
                      <p>
                        Following the quality of our service <br />
                        thus having gained trust
                      </p>
                      <div className="btn-box">
                        <a href="road-transport.html">
                          Read More <span className="icon-right-arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*End Service One Single*/}
                </div>
                <div className="swiper-slide">
                  {/*Start Service One Single*/}
                  <div className="service-one__single">
                    <div className="service-one__single-img">
                      <div className="inner">
                        <img
                          src="assets/img/service/service-one__img2.jpg"
                          alt="#"
                        />
                        <div className="overlay-icon">
                          <img
                            src="assets/img/icon/services/ocean-freight.png"
                            alt="#"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="service-one__single-content">
                      <h3>
                        <a href="road-transport.html">Ocean Freight</a>
                      </h3>
                      <p>
                        Following the quality of our service <br />
                        thus having gained trust
                      </p>
                      <div className="btn-box">
                        <a href="road-transport.html">
                          Read More <span className="icon-right-arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*End Service One Single*/}
                </div>
                <div className="swiper-slide">
                  {/*Start Service One Single*/}
                  <div className="service-one__single">
                    <div className="service-one__single-img">
                      <div className="inner">
                        <img
                          src="assets/img/service/service-one__img3.jpg"
                          alt="#"
                        />
                        <div className="overlay-icon">
                          <img
                            src="assets/img/icon/services/road-freight.png"
                            alt="#"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="service-one__single-content">
                      <h3>
                        <a href="road-transport.html">Road Freight</a>
                      </h3>
                      <p>
                        Following the quality of our service <br />
                        thus having gained trust
                      </p>
                      <div className="btn-box">
                        <a href="road-transport.html">
                          Read More <span className="icon-right-arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*End Service One Single*/}
                </div>
                <div className="swiper-slide">
                  {/*Start Service One Single*/}
                  <div className="service-one__single">
                    <div className="service-one__single-img">
                      <div className="inner">
                        <img
                          src="assets/img/service/service-one__img2.jpg"
                          alt="#"
                        />
                        <div className="overlay-icon">
                          <img
                            src="assets/img/icon/services/ocean-freight.png"
                            alt="#"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="service-one__single-content">
                      <h3>
                        <a href="road-transport.html">Ocean Freight</a>
                      </h3>
                      <p>
                        Following the quality of our service <br />
                        thus having gained trust
                      </p>
                      <div className="btn-box">
                        <a href="road-transport.html">
                          Read More <span className="icon-right-arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*End Service One Single*/}
                </div>
              </div>
            </div>
            {/* If we need navigation buttons */}
            <div className="swiper-pagination" id="service-one__pagination" />
          </div>
        </section>
        {/*End Service One*/}
        {/*Start Video One*/}
        <section className="video-one">
          <div className="container">
            <div
              className="video-one__inner"
              style={{
                backgroundImage: 'url(assets/img/background/video-v1-bg.jpg)',
              }}
            >
              <div className="video-one__video">
                <a
                  href="https://www.youtube.com/watch?v=6mkoGSqTqFI"
                  className="video-one__video-btn video-popup"
                >
                  <span className="txt">Play</span>
                </a>
              </div>
              <div className="overlay-text">
                <h3>
                  <a href="#">Watch Our Intro</a>
                </h3>
                <div className="icon">
                  <a href="#">
                    <span className="icon-right-arrow-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Video One*/}
        {/*Start Working Process One*/}
        <section className="working-process-one">
          <div
            className="working-process-one__bg"
            style={{
              backgroundImage:
                'url(assets/img/background/working-process-v1-bg.jpg)',
            }}
          />
          <div className="container">
            <div className="sec-title text-center">
              <div className="sub-title">
                <h5>
                  <span className="icon-right-arrow-1" /> Check our steps
                </h5>
              </div>
              <h2>Our Freight Working Process</h2>
            </div>
            <div className="row">
              {/*Start Working Process One Single*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="working-process-one__single">
                  <div className="shape1">
                    <img
                      src="assets/img/shape/working-process-v1-shape1.png"
                      alt=""
                    />
                  </div>
                  <div className="working-process-one__single-top">
                    <div className="icon">
                      <img
                        src="assets/img/icon/working-process/step-1.png"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h2>Step - 1</h2>
                    </div>
                  </div>
                  <div className="working-process-one__single-content">
                    <h2>
                      <a href="#">The Paperwork</a>
                    </h2>
                    <p>
                      Once you place your order via mail or fax our field
                      staff will collect the documents and consignments from
                      the shipper.
                    </p>
                  </div>
                </div>
              </div>
              {/*End Working Process One Single*/}
              {/*Start Working Process One Single*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInRight"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="working-process-one__single ml60">
                  <div className="shape1">
                    <img
                      src="assets/img/shape/working-process-v1-shape1.png"
                      alt=""
                    />
                  </div>
                  <div className="working-process-one__single-top">
                    <div className="icon">
                      <img
                        src="assets/img/icon/working-process/step-2.png"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h2>Step - 2</h2>
                    </div>
                  </div>
                  <div className="working-process-one__single-content">
                    <h2>
                      <a href="#">Select Location</a>
                    </h2>
                    <p>
                      We’ll evaluate the size and weight of your cargo, find
                      just the right carrier to fly your goods to their
                      destination.
                    </p>
                  </div>
                </div>
              </div>
              {/*End Working Process One Single*/}
              {/*Start Working Process One Single*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="working-process-one__single ml80">
                  <div className="working-process-one__single-top">
                    <div className="icon">
                      <img
                        src="assets/img/icon/working-process/step-3.png"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h2>Step - 3</h2>
                    </div>
                  </div>
                  <div className="working-process-one__single-content">
                    <h2>
                      <a href="#">Partners Till The End</a>
                    </h2>
                    <p>
                      Our teams will be working hard at every step of the
                      journey to ensure that your shipment is delivered on
                      time.
                    </p>
                  </div>
                </div>
              </div>
              {/*End Working Process One Single*/}
            </div>
          </div>
        </section>
        {/*End Working Process One*/}
        {/*Start Cta One*/}
        <section className="cta-one">
          <div className="container">
            <div className="cta-one__inner">
              <div className="cta-one__shape1">
                <img src="assets/img/shape/cta-one__shape1.png" alt="" />
              </div>
              <div className="cta-one__shape2">
                <img src="assets/img/shape/cta-one__shape2.png" alt="" />
              </div>
              <div className="cta-one__shape3 float-bob-x">
                <img src="assets/img/shape/cta-one__shape5.png" alt="#" />
              </div>
              <div className="cta-one__inner-box">
                <div className="title-box">
                  <h2>
                    We are best transport agency for give best quality service
                  </h2>
                </div>
                <div className="btn-box">
                  <a className="thm-btn" href="#">
                    <span className="txt">Request Services</span>
                    <i className="icon-right-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Cta One*/}
        {/*Start Choose Us One*/}
        <section className="choose-us-one">
          <div className="container">
            <div className="sec-title text-center">
              <div className="sub-title">
                <h5>
                  <span className="icon-right-arrow-1" /> Why Choose Us
                </h5>
              </div>
              <h2>Some reasons to choose us</h2>
            </div>
            <div className="row">
              {/*Start  Single Choose Us One*/}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div className="choose-us-one__single">
                  <div className="choose-us-one__single-overlay-bg" />
                  <div className="content-box">
                    <div className="title-box">
                      <div className="icon-box">
                        <span className="icon-global-network" />
                      </div>
                      <h3>
                        <a href="#">Global Network</a>
                      </h3>
                    </div>
                    <div className="text-box">
                      <p>
                        Freight Consolidators connects your business with
                        international hubs across the world such as the USA.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*End  Single Choose Us One*/}
              {/*Start  Single Choose Us One*/}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="choose-us-one__single">
                  <div className="choose-us-one__single-overlay-bg" />
                  <div className="content-box">
                    <div className="title-box">
                      <div className="icon-box">
                        <span className="icon-right-time-delivery" />
                      </div>
                      <h3>
                        <a href="#">Right Time Delivery</a>
                      </h3>
                    </div>
                    <div className="text-box">
                      <p>
                        You place your order, and we’ll handle the rest. From
                        pick-up to customs clearance from tracking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*End  Single Choose Us One*/}
              {/*Start  Single Choose Us One*/}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="choose-us-one__single">
                  <div className="choose-us-one__single-overlay-bg" />
                  <div className="content-box">
                    <div className="title-box">
                      <div className="icon-box">
                        <span className="icon-support" />
                      </div>
                      <h3>
                        <a href="#">24-Hour Support</a>
                      </h3>
                    </div>
                    <div className="text-box">
                      <p>
                        Our dedicated team is on the job, tracking every step
                        of your shipment we’re available 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*End  Single Choose Us One*/}
              {/*Start  Single Choose Us One*/}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div className="choose-us-one__single">
                  <div className="choose-us-one__single-overlay-bg" />
                  <div className="content-box">
                    <div className="title-box">
                      <div className="icon-box">
                        <span className="icon-special-shipments" />
                      </div>
                      <h3>
                        <a href="#">Special Shipments</a>
                      </h3>
                    </div>
                    <div className="text-box">
                      <p>
                        If your goods have special movement, storage and
                        handling requirements, we have the expertise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*End  Single Choose Us One*/}
              {/*Start  Single Choose Us One*/}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="choose-us-one__single">
                  <div className="choose-us-one__single-overlay-bg" />
                  <div className="content-box">
                    <div className="title-box">
                      <div className="icon-box">
                        <span className="icon-enter-product-details" />
                      </div>
                      <h3>
                        <a href="#">Bespoke Solutions</a>
                      </h3>
                    </div>
                    <div className="text-box">
                      <p>
                        We provide personalised intermodal solutions to all
                        seaports and airports around the world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*End  Single Choose Us One*/}
              {/*Start  Single Choose Us One*/}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="choose-us-one__single">
                  <div className="choose-us-one__single-overlay-bg" />
                  <div className="content-box">
                    <div className="title-box">
                      <div className="icon-box">
                        <span className="icon-esteemed-company" />
                      </div>
                      <h3>
                        <a href="#">Esteemed Company</a>
                      </h3>
                    </div>
                    <div className="text-box">
                      <p>
                        More than 4099 clients across the world have chosen us
                        as their freight partner, because of the competitive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*End  Single Choose Us One*/}
            </div>
          </div>
        </section>
        {/*End Choose Us One*/}
        {/*Start Fact Counter One*/}
        <section className="fact-counter-one">
          <div className="container">
            <div className="row">
              {/*Start Fact Counter One Single*/}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="fact-counter-one__single">
                  <div className="inner">
                    <h2 className="count">
                      <span className="odometer" data-count={35} />
                      <span className="plus">+</span>
                    </h2>
                    <div className="text">
                      <p>Years Of Experience</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Fact Counter One Single*/}
              {/*Start Fact Counter One Single*/}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <div className="fact-counter-one__single">
                  <div className="inner">
                    <h2 className="count">
                      <span className="odometer" data-count={3560} />
                    </h2>
                    <div className="text">
                      <p>Delivered Packages</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Fact Counter One Single*/}
              {/*Start Fact Counter One Single*/}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="fact-counter-one__single">
                  <div className="inner">
                    <h2 className="count">
                      <span className="odometer" data-count={2364} />
                    </h2>
                    <div className="text">
                      <p>Satisfied Clients</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Fact Counter One Single*/}
              {/*Start Fact Counter One Single*/}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <div className="fact-counter-one__single">
                  <div className="inner">
                    <h2 className="count">
                      <span className="odometer" data-count={356} />
                      <span className="plus">+</span>
                    </h2>
                    <div className="text">
                      <p>Owned Vehicles</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Fact Counter One Single*/}
            </div>
          </div>
        </section>
        {/*End Fact Counter One*/}
        {/*Start Project One*/}
        <section className="project-one">
          <div
            className="project-one__bg"
            style={{
              backgroundImage: 'url(assets/img/bg/project-v1-bg.jpg)',
            }}
          />
          <div className="shape1">
            <img src="assets/img/shape/project-v1-shape1.png" alt="" />
          </div>
          <div className="shape2">
            <img src="assets/img/shape/project-v1-shape2.png" alt="" />
          </div>
          <div className="container">
            <div className="project-one__top">
              <div className="sec-title">
                <div className="sub-title">
                  <h5>
                    <span className="icon-right-arrow-1" /> Recent Project
                  </h5>
                </div>
                <h2>
                  Transporting Across <br />
                  The World
                </h2>
              </div>
              <div className="btn-box">
                <a className="thm-btn" href="projects.html">
                  <span className="txt">View All Project</span>
                  <i className="icon-right-arrow" />
                </a>
              </div>
            </div>
          </div>
          <div className="auto-container">
            <div className="project-one__bottom">
              <div
                className="thm-swiper__slider swiper-container"
                data-swiper-options='{"spaceBetween": 50,
                  "slidesPerView": 3,
                  "loop": true,
                  "pagination": {
                      "el": "#project-one__pagination",
                      "type": "bullets",
                      "clickable": true
                      },
                  "navigation": {
                      "nextEl": "#team-one__swiper-button-next",
                      "prevEl": "#team-one__swiper-button-prev"
                  },
                  "autoplay": { "delay": 5000 },
                  "breakpoints": {
                      "0": {
                          "spaceBetween": 30,
                          "slidesPerView": 1
                      },
                      "375": {
                          "spaceBetween": 30,
                          "slidesPerView": 1
                      },
                      "575": {
                          "spaceBetween": 30,
                          "slidesPerView": 1
                      },
                      "768": {
                          "spaceBetween": 30,
                          "slidesPerView": 2
                      },
                      "992": {
                          "spaceBetween": 30,
                          "slidesPerView": 3
                      },
                      "1200": {
                          "spaceBetween": 40,
                          "slidesPerView": 4
                      }
                  }
              }'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    {/*Start  Single Project One*/}
                    <div className="project-one__single">
                      <div className="project-one__single-overlay-bg" />
                      <div className="project-one__single-img">
                        <div className="inner">
                          <img
                            src="assets/img/project/project-v1-img1.jpg"
                            alt="#"
                          />
                        </div>
                        <div className="overlay-box">
                          <span>N.01</span>
                        </div>
                      </div>
                      <div className="project-one__single-content">
                        <span className="categories">Large Warehouse</span>
                        <h3>
                          <a href="project-details.html">
                            Warehouse &amp; Services
                          </a>
                        </h3>
                        <div className="project-one__single-content-bottom">
                          <div className="text-box">
                            <p>
                              Freight Consolidators connects your business
                              with international.
                            </p>
                          </div>
                          <div className="btn-box">
                            <a
                              className="thm-btn"
                              href="project-details.html"
                            >
                              <span className="txt">View Details</span>
                              <i className="icon-right-arrow" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End  Single Project One*/}
                  </div>
                  <div className="swiper-slide">
                    {/*Start  Single Project One*/}
                    <div className="project-one__single">
                      <div className="project-one__single-overlay-bg" />
                      <div className="project-one__single-img">
                        <div className="inner">
                          <img
                            src="assets/img/project/project-v1-img2.jpg"
                            alt="#"
                          />
                        </div>
                        <div className="overlay-box">
                          <span>N.02</span>
                        </div>
                      </div>
                      <div className="project-one__single-content">
                        <span className="categories">Premium Tankers</span>
                        <h3>
                          <a href="project-details.html">
                            Transport for Product
                          </a>
                        </h3>
                        <div className="project-one__single-content-bottom">
                          <div className="text-box">
                            <p>
                              Freight Consolidators connects your business
                              with international.
                            </p>
                          </div>
                          <div className="btn-box">
                            <a
                              className="thm-btn"
                              href="project-details.html"
                            >
                              <span className="txt">View Details</span>
                              <i className="icon-right-arrow" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End  Single Project One*/}
                  </div>
                  <div className="swiper-slide">
                    {/*Start  Single Project One*/}
                    <div className="project-one__single">
                      <div className="project-one__single-overlay-bg" />
                      <div className="project-one__single-img">
                        <div className="inner">
                          <img
                            src="assets/img/project/project-v1-img3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="overlay-box">
                          <span>N.03</span>
                        </div>
                      </div>
                      <div className="project-one__single-content">
                        <span className="categories">Air Transportation</span>
                        <h3>
                          <a href="project-details.html">
                            Transport for Product
                          </a>
                        </h3>
                        <div className="project-one__single-content-bottom">
                          <div className="text-box">
                            <p>
                              Freight Consolidators connects your business
                              with international.
                            </p>
                          </div>
                          <div className="btn-box">
                            <a
                              className="thm-btn"
                              href="project-details.html"
                            >
                              <span className="txt">View Details</span>
                              <i className="icon-right-arrow" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End  Single Project One*/}
                  </div>
                  <div className="swiper-slide">
                    {/*Start  Single Project One*/}
                    <div className="project-one__single">
                      <div className="project-one__single-overlay-bg" />
                      <div className="project-one__single-img">
                        <div className="inner">
                          <img
                            src="assets/img/project/project-v1-img4.jpg"
                            alt="#"
                          />
                        </div>
                        <div className="overlay-box">
                          <span>N.04</span>
                        </div>
                      </div>
                      <div className="project-one__single-content">
                        <span className="categories">
                          Road Transportation
                        </span>
                        <h3>
                          <a href="project-details.html">
                            Specialized Transport
                          </a>
                        </h3>
                        <div className="project-one__single-content-bottom">
                          <div className="text-box">
                            <p>
                              Freight Consolidators connects your business
                              with international.
                            </p>
                          </div>
                          <div className="btn-box">
                            <a
                              className="thm-btn"
                              href="project-details.html"
                            >
                              <span className="txt">View Details</span>
                              <i className="icon-right-arrow" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End  Single Project One*/}
                  </div>
                </div>
              </div>
              {/* If we need navigation buttons */}
              <div
                className="swiper-pagination"
                id="project-one__pagination"
              />
            </div>
          </div>
        </section>
        {/*End Project One*/}
        {/*Start Testimonials One*/}
        <section className="testimonials-one">
          <div className="testimonials-one__pattern">
            <img
              src="assets/img/pattern/testimonials-v1-pattern.png"
              alt=""
            />
          </div>
          <div className="container">
            <div className="sec-title text-center">
              <div className="sub-title">
                <h5>
                  <span className="icon-right-arrow-1" /> Testimonials
                </h5>
              </div>
              <h2>What Client Say </h2>
            </div>
            <div
              className="thm-swiper__slider swiper-container"
              data-swiper-options='{"spaceBetween": 50,
              "slidesPerView": 3,
              "loop": true,
              "pagination": {
                  "el": "#testimonials-one__pagination",
                  "type": "bullets",
                  "clickable": true
                  },
              "navigation": {
                  "nextEl": "#team-one__swiper-button-next",
                  "prevEl": "#team-one__swiper-button-prev"
              },
              "autoplay": { "delay": 5000 },
              "breakpoints": {
                  "0": {
                      "spaceBetween": 30,
                      "slidesPerView": 1
                  },
                  "375": {
                      "spaceBetween": 30,
                      "slidesPerView": 1
                  },
                  "575": {
                      "spaceBetween": 30,
                      "slidesPerView": 1
                  },
                  "768": {
                      "spaceBetween": 30,
                      "slidesPerView": 2
                  },
                  "992": {
                      "spaceBetween": 30,
                      "slidesPerView": 2
                  },
                  "1200": {
                      "spaceBetween": 50,
                      "slidesPerView": 3
                  }
              }
          }'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  {/*Start Single Testimonials One*/}
                  <div className="testimonials-one__single">
                    <div className="icon-box">
                      <span className="icon-quote11" />
                    </div>
                    <div className="border-left" />
                    <div className="testimonials-one__single-top">
                      <div className="img-box">
                        <img
                          src="assets/img/testimonial/testimonials-one__img1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="title-box">
                        <h2>
                          <a href="#">Rebecca Jr.</a>
                        </h2>
                        <p>Client</p>
                      </div>
                    </div>
                    <div className="testimonials-one__single-inner">
                      <div className="content-box">
                        <div className="content-box-top">
                          <div className="text-box">
                            <h3>“Good Services”</h3>
                          </div>
                          <div className="rating-box">
                            <a href="#">
                              <i className="icon-star" />
                            </a>
                            <a href="#">
                              <i className="icon-star" />
                            </a>
                            <a href="#">
                              <i className="icon-star" />
                            </a>
                            <a href="#">
                              <i className="icon-star" />
                            </a>
                            <a href="#">
                              <i className="icon-star" />
                            </a>
                          </div>
                        </div>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit some sed quia
                          consequuntur dolores sequi nesciunt.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*End Single Testimonials One*/}
                </div>
                <div className="swiper-slide">
                  {/*Start Single Testimonials One*/}
                  <div className="testimonials-one__single">
                    <div className="icon-box">
                      <span className="icon-quote11" />
                    </div>
                    <div className="border-left" />
                    <div className="testimonials-one__single-top">
                      <div className="img-box">
                        <img
                          src="assets/img/testimonial/testimonials-one__img2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="title-box">
                        <h2>
                          <a href="#">Helen Rose</a>
                        </h2>
                        <p>Client</p>
                      </div>
                    </div>
                    <div className="testimonials-one__single-inner">
                      <div className="content-box">
                        <div className="content-box-top">
                          <div className="text-box">
                            <h3>“Great Work”</h3>
                          </div>
                          <div className="rating-box">
                            <a href="#">
                              <i className="icon-star" />
                            </a>
                            <a href="#">
                              <i className="icon-star" />
                            </a>
                            <a href="#">
                              <i className="icon-star" />
                            </a>
                            <a href="#">
                              <i className="icon-star" />
                            </a>
                            <a href="#">
                              <i className="icon-star" />
                            </a>
                          </div>
                        </div>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit some sed quia
                          consequuntur dolores sequi nesciunt.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*End Single Testimonials One*/}
                </div>
                <div className="swiper-slide">
                  {/*Start Single Testimonials One*/}
                  <div className="testimonials-one__single">
                    <div className="icon-box">
                      <span className="icon-quote11" />
                    </div>
                    <div className="border-left" />
                    <div className="testimonials-one__single-top">
                      <div className="img-box">
                        <img
                          src="assets/img/testimonial/testimonials-one__img1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="title-box">
                        <h2>
                          <a href="#">John Smith.</a>
                        </h2>
                        <p>Client</p>
                      </div>
                    </div>
                    <div className="testimonials-one__single-inner">
                      <div className="content-box">
                        <div className="content-box-top">
                          <div className="text-box">
                            <h3>“Good Services”</h3>
                          </div>
                          <div className="rating-box">
                            <a href="#">
                              <i className="icon-star" />
                            </a>
                            <a href="#">
                              <i className="icon-star" />
                            </a>
                            <a href="#">
                              <i className="icon-star" />
                            </a>
                            <a href="#">
                              <i className="icon-star" />
                            </a>
                            <a href="#">
                              <i className="icon-star" />
                            </a>
                          </div>
                        </div>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit some sed quia
                          consequuntur dolores sequi nesciunt.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*End Single Testimonials One*/}
                </div>
                <div className="swiper-slide">
                  {/*Start Single Testimonials One*/}
                  <div className="testimonials-one__single">
                    <div className="icon-box">
                      <span className="icon-quote11" />
                    </div>
                    <div className="border-left" />
                    <div className="testimonials-one__single-top">
                      <div className="img-box">
                        <img
                          src="assets/img/testimonial/testimonials-one__img2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="title-box">
                        <h2>
                          <a href="#">Helen Rose</a>
                        </h2>
                        <p>Client</p>
                      </div>
                    </div>
                    <div className="testimonials-one__single-inner">
                      <div className="content-box">
                        <div className="content-box-top">
                          <div className="text-box">
                            <h3>“Great Work”</h3>
                          </div>
                          <div className="rating-box">
                            <a href="#">
                              <i className="icon-star" />
                            </a>
                            <a href="#">
                              <i className="icon-star" />
                            </a>
                            <a href="#">
                              <i className="icon-star" />
                            </a>
                            <a href="#">
                              <i className="icon-star" />
                            </a>
                            <a href="#">
                              <i className="icon-star" />
                            </a>
                          </div>
                        </div>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit some sed quia
                          consequuntur dolores sequi nesciunt.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*End Single Testimonials One*/}
                </div>
              </div>
            </div>
            {/* If we need navigation buttons */}
            <div
              className="swiper-pagination"
              id="testimonials-one__pagination"
            />
          </div>
        </section>
        {/*End Testimonials One Area*/}
        {/* Start Team One*/}
        <section className="team-one">
          <div
            className="team-one__bg"
            style={{ backgroundImage: 'url(assets/img/bg/team-v1-bg.jpg)' }}
          />
          <div className="container">
            <div className="team-one__top">
              <div className="sec-title">
                <div className="sub-title">
                  <h5>
                    <span className="icon-right-arrow-1" /> Our Workers
                  </h5>
                </div>
                <h2>Meet with expert team</h2>
              </div>
              <div className="btn-box">
                <a className="thm-btn" href="team.html">
                  <span className="txt">View All Member</span>
                  <i className="icon-right-arrow" />
                </a>
              </div>
            </div>
            <div className="team-one__bottom">
              <div
                className="thm-swiper__slider swiper-container"
                data-swiper-options='{"spaceBetween": 24,
                      "slidesPerView": 3,
                      "loop": true,
                      "pagination": {
                          "el": "#team-one__pagination",
                          "type": "bullets",
                          "clickable": true
                          },
                      "navigation": {
                          "nextEl": "#team-one__swiper-button-next",
                          "prevEl": "#team-one__swiper-button-prev"
                      },
                      "autoplay": { "delay": 5000 },
                      "breakpoints": {
                          "0": {
                              "spaceBetween": 30,
                              "slidesPerView": 1
                          },
                          "375": {
                              "spaceBetween": 30,
                              "slidesPerView": 1
                          },
                          "575": {
                              "spaceBetween": 30,
                              "slidesPerView": 1
                          },
                          "768": {
                              "spaceBetween": 30,
                              "slidesPerView": 2
                          },
                          "992": {
                              "spaceBetween": 30,
                              "slidesPerView": 3
                          },
                          "1200": {
                              "spaceBetween": 24,
                              "slidesPerView": 4
                          }
                      }
                  }'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    {/* Start Team One Single*/}
                    <div className="team-one__single">
                      <div className="team-one__single-img">
                        <div className="inner">
                          <img
                            src="assets/img/team/team-v1-img1.jpg"
                            alt=""
                          />
                          <div className="social-links">
                            <a href="#">
                              <span className="icon-facebook" />
                            </a>
                            <a href="#">
                              <span className="icon-twitter" />
                            </a>
                            <a href="#">
                              <span className="icon-instagram" />
                            </a>
                            <a href="#">
                              <span className="icon-linkedin" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="team-one__single-content">
                        <h3>
                          <a href="team-details.html">Rebecca Tylor</a>
                        </h3>
                        <p>SEO - Founder</p>
                      </div>
                    </div>
                    {/* End Team One Single*/}
                  </div>
                  <div className="swiper-slide">
                    {/* Start Team One Single*/}
                    <div className="team-one__single">
                      <div className="team-one__single-img">
                        <div className="inner">
                          <img
                            src="assets/img/team/team-v1-img2.jpg"
                            alt=""
                          />
                          <div className="social-links">
                            <a href="#">
                              <span className="icon-facebook" />
                            </a>
                            <a href="#">
                              <span className="icon-twitter" />
                            </a>
                            <a href="#">
                              <span className="icon-instagram" />
                            </a>
                            <a href="#">
                              <span className="icon-linkedin" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="team-one__single-content">
                        <h3>
                          <a href="team-details.html">Helen Wilmore</a>
                        </h3>
                        <p>Manager</p>
                      </div>
                    </div>
                    {/* End Team One Single*/}
                  </div>
                  <div className="swiper-slide">
                    {/* Start Team One Single*/}
                    <div className="team-one__single">
                      <div className="team-one__single-img">
                        <div className="inner">
                          <img
                            src="assets/img/team/team-v1-img3.jpg"
                            alt=""
                          />
                          <div className="social-links">
                            <a href="#">
                              <span className="icon-facebook" />
                            </a>
                            <a href="#">
                              <span className="icon-twitter" />
                            </a>
                            <a href="#">
                              <span className="icon-instagram" />
                            </a>
                            <a href="#">
                              <span className="icon-linkedin" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="team-one__single-content">
                        <h3>
                          <a href="team-details.html">Harley Russle</a>
                        </h3>
                        <p>Senior Worker</p>
                      </div>
                    </div>
                    {/* End Team One Single*/}
                  </div>
                  <div className="swiper-slide">
                    {/* Start Team One Single*/}
                    <div className="team-one__single">
                      <div className="team-one__single-img">
                        <div className="inner">
                          <img
                            src="assets/img/team/team-v1-img4.jpg"
                            alt=""
                          />
                          <div className="social-links">
                            <a href="#">
                              <span className="icon-facebook" />
                            </a>
                            <a href="#">
                              <span className="icon-twitter" />
                            </a>
                            <a href="#">
                              <span className="icon-instagram" />
                            </a>
                            <a href="#">
                              <span className="icon-linkedin" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="team-one__single-content">
                        <h3>
                          <a href="team-details.html">Jennifer Rivera</a>
                        </h3>
                        <p>Cargo Head</p>
                      </div>
                    </div>
                    {/* End Team One Single*/}
                  </div>
                </div>
              </div>
              {/* If we need navigation buttons */}
              <div className="swiper-pagination" id="team-one__pagination" />
            </div>
          </div>
        </section>
        {/* End Team One*/}
        {/* Start Faq One*/}
        <section className="faq-one">
          <div className="big-title">
            <h2>faq</h2>
          </div>
          <div
            className="faq-one__bg"
            style={{
              backgroundImage: 'url(assets/img/resource/faq-v1-bg.jpg)',
            }}
          />
          <div className="container">
            <div className="row">
              {/* Start Faq One Faq*/}
              <div className="col-xl-6">
                <div className="faq-one__faq">
                  <div className="sec-title">
                    <div className="sub-title">
                      <h5>
                        <span className="icon-right-arrow-1" /> FAQ ?
                      </h5>
                    </div>
                    <h2>Question &amp; Answer</h2>
                  </div>
                  <ul
                    className="accrodion-grp faq-one__accrodion"
                    data-grp-name="faq-one-accrodion"
                  >
                    {/* Start Faq One Single*/}
                    <li className="accrodion active">
                      <div className="accrodion-title">
                        <h2>
                          <span>01.</span> How can I pay for your logistics
                          services?
                        </h2>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <span>Answer:</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                    </li>
                    {/* End Faq One Single*/}
                    {/* Start Faq One Single*/}
                    <li className="accrodion">
                      <div className="accrodion-title">
                        <h2>
                          <span>02.</span> How can I track my shipments?{' '}
                        </h2>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <span>Answer:</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                    </li>
                    {/* End Faq One Single*/}
                    {/* Start Faq One Single*/}
                    <li className="accrodion">
                      <div className="accrodion-title">
                        <h2>
                          <span>03.</span> Can i specify a delivery date when
                          ordering?
                        </h2>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <span>Answer:</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                    </li>
                    {/* End Faq One Single*/}
                    {/* Start Faq One Single*/}
                    <li className="accrodion">
                      <div className="accrodion-title">
                        <h2>
                          <span>04.</span> Any advice for a first time
                          shipper?
                        </h2>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <span>Answer:</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                    </li>
                    {/* End Faq One Single*/}
                  </ul>
                </div>
              </div>
              {/* End Faq One Faq*/}
              {/* Start Faq One Contact Info*/}
              <div className="col-xl-6">
                <div
                  className="faq-one__contact-info wow fadeInRight"
                  data-wow-delay=".3s"
                >
                  <div className="title-box">
                    <p>Let’s Talk</p>
                    <h3>You need any help? get free consultation</h3>
                  </div>
                  <div className="faq-one__contact-info-number">
                    <div className="icon">
                      <span className="icon-call" />
                    </div>
                    <div className="text">
                      <p>Have Any Questions</p>
                      <h3>
                        <a href="tel:123456789">(00) 112 365 489</a>
                      </h3>
                    </div>
                  </div>
                  <div className="btn-box">
                    <a className="thm-btn" href="#">
                      <span className="txt">Contact Us</span>
                      <i className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Faq One Contact Info*/}
            </div>
          </div>
        </section>
        {/* End Faq One*/}
        {/* Start Blog One*/}
        <section className="blog-one">
          <div
            className="blog-one__pattern"
            style={{
              backgroundImage: 'url(assets/img/pattern/blog-v1-pattern.jpg)',
            }}
          />
          <div className="container">
            <div className="blog-one__top">
              <div className="sec-title">
                <div className="sub-title">
                  <h5>
                    <span className="icon-right-arrow-1" /> LATEST POST
                  </h5>
                </div>
                <h2>latest news &amp; blog</h2>
              </div>
              <div className="btn-box">
                <a className="thm-btn" href="blog.html">
                  <span className="txt">View All Post</span>
                  <i className="icon-right-arrow" />
                </a>
              </div>
            </div>
            <div className="blog-one__bottom">
              <div
                className="thm-swiper__slider swiper-container"
                data-swiper-options='{"spaceBetween": 50,
                      "slidesPerView": 3,
                      "loop": true,
                      "pagination": {
                          "el": "#blog-one__pagination",
                          "type": "bullets",
                          "clickable": true
                          },
                      "navigation": {
                          "nextEl": "#team-one__swiper-button-next",
                          "prevEl": "#team-one__swiper-button-prev"
                      },
                      "autoplay": { "delay": 5000 },
                      "breakpoints": {
                          "0": {
                              "spaceBetween": 30,
                              "slidesPerView": 1
                          },
                          "375": {
                              "spaceBetween": 30,
                              "slidesPerView": 1
                          },
                          "575": {
                              "spaceBetween": 30,
                              "slidesPerView": 1
                          },
                          "768": {
                              "spaceBetween": 30,
                              "slidesPerView": 2
                          },
                          "992": {
                              "spaceBetween": 30,
                              "slidesPerView": 3
                          },
                          "1200": {
                              "spaceBetween": 50,
                              "slidesPerView": 3
                          }
                      }
                  }'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    {/* Start Blog One Single*/}
                    <div className="blog-one__single">
                      <div className="blog-one__single-img">
                        <div className="inner">
                          <img
                            src="assets/img/blog/blog-v1-img1.jpg"
                            alt="#"
                          />
                          <div className="text-box">Air Freight</div>
                        </div>
                      </div>
                      <div className="blog-one__single-content">
                        <h2>
                          <a href="blog-details.html">
                            Advanced Service by Air <br />
                            Transport
                          </a>
                        </h2>
                        <ul className="meta-box">
                          <li>
                            <a href="#">By Admin</a>
                          </li>
                          <li>-</li>
                          <li>January 15, 2023</li>
                        </ul>
                      </div>
                    </div>
                    {/* End Blog One Single*/}
                  </div>
                  <div className="swiper-slide">
                    {/* Start Blog One Single*/}
                    <div className="blog-one__single">
                      <div className="blog-one__single-img">
                        <div className="inner">
                          <img
                            src="assets/img/blog/blog-v1-img2.jpg"
                            alt="#"
                          />
                          <div className="text-box">Local Shipping</div>
                        </div>
                      </div>
                      <div className="blog-one__single-content">
                        <h2>
                          <a href="blog-details.html">
                            How technology can help <br />
                            redraw the supply
                          </a>
                        </h2>
                        <ul className="meta-box">
                          <li>
                            <a href="#">By Admin</a>
                          </li>
                          <li>-</li>
                          <li>February 20, 2023</li>
                        </ul>
                      </div>
                    </div>
                    {/* End Blog One Single*/}
                  </div>
                  <div className="swiper-slide">
                    {/* Start Blog One Single*/}
                    <div className="blog-one__single">
                      <div className="blog-one__single-img">
                        <div className="inner">
                          <img
                            src="assets/img/blog/blog-v1-img3.jpg"
                            alt="#"
                          />
                          <div className="text-box">Logistic</div>
                        </div>
                      </div>
                      <div className="blog-one__single-content">
                        <h2>
                          <a href="blog-details.html">
                            Going forward, a new <br />
                            normal that has evolved
                          </a>
                        </h2>
                        <ul className="meta-box">
                          <li>
                            <a href="#">By Admin</a>
                          </li>
                          <li>-</li>
                          <li>March 17, 2023</li>
                        </ul>
                      </div>
                    </div>
                    {/* End Blog One Single*/}
                  </div>
                  <div className="swiper-slide">
                    {/* Start Blog One Single*/}
                    <div className="blog-one__single">
                      <div className="blog-one__single-img">
                        <div className="inner">
                          <img
                            src="assets/img/blog/blog-v1-img2.jpg"
                            alt="#"
                          />
                          <div className="text-box">Local Shipping</div>
                        </div>
                      </div>
                      <div className="blog-one__single-content">
                        <h2>
                          <a href="blog-details.html">
                            How technology can help <br />
                            redraw the supply
                          </a>
                        </h2>
                        <ul className="meta-box">
                          <li>
                            <a href="#">By Admin</a>
                          </li>
                          <li>-</li>
                          <li>February 20, 2023</li>
                        </ul>
                      </div>
                    </div>
                    {/* End Blog One Single*/}
                  </div>
                </div>
              </div>
              {/* If we need navigation buttons */}
              <div className="swiper-pagination" id="blog-one__pagination" />
            </div>
          </div>
        </section>
        {/* End Blog One*/}
        <footer className="footer-one">
          <div
            className="footer-one__bg"
            style={{
              backgroundImage: 'url(assets/img/footer/footer-v1-bg.jpg)',
            }}
          />
          {/* Start Footer Main */}
          <div className="footer-main">
            <div className="container">
              <div className="footer-one__top">
                <div className="footer-one__top-inner">
                  <div className="logo-box">
                    <a href="index-2.html">
                      <img src="assets/img/resource/logo-2.png" alt="#" />
                    </a>
                  </div>
                  <div className="footer-one__top-right">
                    <div className="text">
                      <p>
                        Subscribe to our weekly newsletter to get <br />
                        information and promotion on your inbox
                      </p>
                    </div>
                    <div className="footer-one__top-subscribe">
                      <form
                        className="footer-one__top-subscribe-form"
                        action="#"
                      >
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter Your Email"
                        />
                        <button type="submit" className="thm-btn">
                          <span className="txt">Subscribe </span>
                          <i className="icon-up-right-arrow" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-main__bottom">
                <div className="row">
                  {/*Start Single Footer Widget*/}
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <div className="single-footer-widget footer-widget__about">
                      <div className="title">
                        <h2>About Company</h2>
                      </div>
                      <div className="footer-widget__about-inner">
                        <p className="text1">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur
                        </p>
                        <p className="text2">We are available</p>
                        <p className="text3">MOn-Sat: 10:00am to 07:30pm</p>
                        <div className="footer-social-link">
                          <a href="#">
                            <span className="icon-facebook" />
                          </a>
                          <a href="#">
                            <span className="icon-twitter" />
                          </a>
                          <a href="#">
                            <span className="icon-instagram" />
                          </a>
                          <a href="#">
                            <span className="icon-linkedin" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Single Footer Widget*/}
                  {/*Start Single Footer Widget*/}
                  <div
                    className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="single-footer-widget footer-widget__links">
                      <div className="title">
                        <h2>Quick Links</h2>
                      </div>
                      <div className="footer-widget__links-box">
                        <ul>
                          <li>
                            <a href="about.html">Mission &amp; Vision</a>
                          </li>
                          <li>
                            <a href="about.html">Get Pricing Plan</a>
                          </li>
                          <li>
                            <a href="team.html">Meet The Team</a>
                          </li>
                          <li>
                            <a href="about.html">Our Clients</a>
                          </li>
                          <li>
                            <a href="about.html">Available Positions</a>
                          </li>
                          <li>
                            <a href="about.html">Job Application</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Single Footer Widget*/}
                  {/*Start Single Footer Widget*/}
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="single-footer-widget footer-widget__links services">
                      <div className="title">
                        <h2>Our Services</h2>
                      </div>
                      <div className="footer-widget__links-box">
                        <ul>
                          <li>
                            <a href="road-transport.html">Air Freight</a>
                          </li>
                          <li>
                            <a href="road-transport.html">Ocean Freight</a>
                          </li>
                          <li>
                            <a href="road-transport.html">Railway Freight</a>
                          </li>
                          <li>
                            <a href="road-transport.html">Warehousing</a>
                          </li>
                          <li>
                            <a href="road-transport.html">Packaging</a>
                          </li>
                          <li>
                            <a href="road-transport.html">Distribution</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Single Footer Widget*/}
                  {/*Start Single Footer Widget*/}
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="single-footer-widget footer-widget__contact">
                      <div className="title">
                        <h2>Gent in Touch</h2>
                      </div>
                      <div className="footer-widget__contact-box">
                        <ul>
                          <li>
                            <div className="icon-box">
                              <span className="icon-pin" />
                            </div>
                            <div className="content-box">
                              <p>Address</p>
                              <h4>Jones Street, New York, USA</h4>
                            </div>
                          </li>
                          <li>
                            <div className="icon-box">
                              <span className="icon-paper-plane" />
                            </div>
                            <div className="content-box">
                              <p>Email</p>
                              <h4>
                                <a href="mailto:yourmail@email.com">
                                  Support@example.com
                                </a>
                              </h4>
                            </div>
                          </li>
                          <li>
                            <div className="icon-box">
                              <span className="icon-out-call" />
                            </div>
                            <div className="content-box">
                              <p>Phone</p>
                              <h4>
                                <a href="tel:123456789">+70 264 566 579</a>
                              </h4>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Single Footer Widget*/}
                </div>
              </div>
            </div>
          </div>
          {/* End Footer Main */}
          {/*Start Footer Bottom */}
          <div className="footer-bottom">
            <div className="container">
              <div className="footer-bottom__inner">
                <div className="copyright-text">
                  <p>
                    © 2023 <a href="index-2.html">Translo,</a> All Rights
                    Reserved.
                  </p>
                </div>
                <div className="copyright-menu">
                  <ul>
                    <li>
                      <a href="about.html">
                        Trams &amp; Condition
                        <span className="icon-right-arrow-5" />
                      </a>
                    </li>
                    <li>
                      <a href="about.html">
                        Privacy Policy <span className="icon-right-arrow-5" />
                      </a>
                    </li>
                    <li>
                      <a href="about.html">
                        Support <span className="icon-right-arrow-5" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*End Footer Bottom */}
        </footer>
      </div>
      <div className="search-popup">
        <div className="search-popup__overlay search-toggler">
          <div className="search-popup__close-icon">
            <span className="icon-plus" />
          </div>
        </div>
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">
              search here
            </label>
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="btn-box"
            >
              <i className="icon-magnifying-glass" />
            </button>
          </form>
        </div>
      </div>
      {/* JS here */}
      {/* Mirrored from html.favdevs.com/translo/ by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 18 Jun 2024 06:14:28 GMT */}
    </div>
  );
}
