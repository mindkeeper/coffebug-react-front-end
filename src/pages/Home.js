import React, { Fragment } from "react";
import styles from "../styles/home.module.css";
// pic
import brandLogo from "../assets/img/nav/brand-logo.png";
import userLogo from "../assets/img/home/user.png";
import locationLogo from "../assets/img/home/location.png";
import customerLogo from "../assets/img/home/customers.png";
import services from "../assets/img/home/services.png";
// pic end
const Home = () => {
  const token = "81923";
  return (
    <Fragment>
      <header
        className={`${styles["d-flex"]} ${styles["flex-row"]} ${styles["align-items-center"]}`}
      >
        {/* <!-- navbar --> */}
        <nav
          className={`${styles["container"]} ${styles["d-flex"]} ${styles["flex-row"]} ${styles["align-items-center"]} ${styles["justify-content-between"]}`}
        >
          <div
            className={`${styles["d-flex"]} ${styles["flex-row"]} ${styles["align-items-center"]} ${styles["brand-container"]}`}
          >
            <img src={brandLogo} alt="" className={styles["brand-logo"]} />
            <a className={styles["brand-text"]}>Coffebug</a>
          </div>
          <div className={styles["link-container"]}>
            <ul
              className={`${styles["d-flex"]} ${styles["flex-row"]} ${styles["align-items-center"]}`}
            >
              <li className={styles["link-navbar"]}>
                <a href="">Home</a>
              </li>
              <li className={styles["link-navbar"]}>
                <a href="./products">Products</a>
              </li>
              <li className={styles["link-navbar"]}>
                <a href="">Your Cart</a>
              </li>
              <li className={styles["link-navbar"]}>
                <a href="">History</a>
              </li>
            </ul>
          </div>
          <div
            className={`${styles["button-nav-container"]} ${styles["d-flex"]} ${styles["flex-row"]} ${styles["align-items-center"]}`}
          >
            <button className={`${styles["btn"]} ${styles["btn-login"]}`}>
              Login
            </button>
            <button className={`${styles["btn"]} ${styles["btn btn-sign-up"]}`}>
              Sign Up
            </button>
          </div>
        </nav>
      </header>
      <main className={styles["container-fluid"]}>
        <div className={styles["row"]}>
          {/* <!-- Hero --> */}
          <section
            className={`${styles["hero col-12"]} ${styles["d-flex"]} ${styles["align-items-center"]}`}
          >
            <div className={styles["container"]}>
              <h1
                className={`${styles["hero-title"]} ${styles["text-white"]} ${styles["col-12"]} ${styles["col-md-6"]}`}
              >
                Start Your Day with Coffee and Good Meals
              </h1>
              <p
                className={`${styles["hero-subtitle"]} ${styles["text-white"]} ${styles["col-12"]} ${styles["col-md-6"]}`}
              >
                We provide high quality beans, good taste, and healthy meals
                made by love just for you. Start your day with us for a bigger
                smile!
              </p>
              <button className={styles["hero-button"]}>Get Started</button>
              <div className={`${styles["info-cta"]} ${styles["col-12"]}`}>
                <div
                  className={`${styles["row"]} ${styles["align-items-center"]}`}
                >
                  <div
                    className={`${styles["col-4"]} ${styles["d-flex"]} ${styles["justify-content-center"]} ${styles["cta-info-side"]}`}
                  >
                    <div className={styles["img-info"]}>
                      <img src={userLogo} alt="" />
                    </div>
                    <div className={styles["cta-text-info"]}>
                      <p className={styles["info-title"]}>90+</p>
                      <p className={styles["info-subtitle"]}>Staff</p>
                    </div>
                  </div>
                  <div
                    className={`${styles["col-4"]} ${styles["d-flex"]} ${styles["justify-content-center"]} ${styles["cta-info-side"]}`}
                  >
                    <div className={styles["img-info"]}>
                      <img src={locationLogo} alt="" />
                    </div>
                    <div className={styles["cta-text-info"]}>
                      <p className={styles["info-title"]}>30+</p>
                      <p className={styles["info-subtitle"]}>Locations</p>
                    </div>
                  </div>
                  <div
                    className={`${styles["col-4"]} ${styles["d-flex"]} ${styles["justify-content-center"]} ${styles["cta-info-side"]}`}
                  >
                    <div className={styles["img-info"]}>
                      <div className={styles["img-cust-container"]}>
                        <img
                          src={customerLogo}
                          className={styles["customer"]}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className={styles["cta-text-info"]}>
                      <p className={styles["info-title"]}>800+</p>
                      <p className={styles["info-subtitle"]}>Customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Services --> */}
          <section className={`${styles["services"]} ${styles["col-12"]}`}>
            <div
              className={`${styles["container"]} ${styles["d-flex"]} ${styles["flex-row"]} ${styles["align-items-center"]} ${styles["justify-content-between"]}`}
            >
              <div
                className={`${styles["row"]} ${styles["d-flex"]} ${styles["flex-row"]} ${styles["justify-content-center"]}`}
              >
                <aside
                  className={`${styles["col-12"]} ${styles["col-md-6"]} ${styles["services-img"]}`}
                >
                  <img src={services} alt="" />
                </aside>
                <aside
                  className={`${styles["col-12"]} ${styles["col-md-6"]} ${styles["services-info"]}`}
                >
                  <h1
                    className={`${styles["services-title"]} ${styles["text-left"]}`}
                  >
                    We Provide Good Coffee and Healthy Meals
                  </h1>
                  <p className={`${styles["subtitle"]} ${styles["text-left"]}`}>
                    You can explore the menu that we provide with fun and have
                    their own taste and make your day better.
                  </p>
                  <ul className={styles["list"]} style="padding: 0">
                    <li>High quality beans</li>
                    <li>Healthy meals, you can request the ingredients</li>
                    <li>
                      Chat with our staff to get better experience for ordering
                    </li>
                    <li>
                      Free member card with a minimum purchase of IDR 200.000.
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </section>
          {/* <!-- Favorites --> */}
          <section className={`${styles["col-12"]} ${styles["favorites"]}`}>
            <div className={styles["container"]}>
              <div
                className={`${styles["fav-text-container"]} ${styles["w-100"]} ${styles["text-center"]}`}
              >
                <h2 className={styles["favorites-title"]}>
                  Here is People’s Favorite
                </h2>
                <p className={styles["favorites-subtitles"]}>
                  Let’s choose and have a bit taste of poeple’s favorite. It
                  might be yours too!
                </p>
              </div>
              <div
                className={`${styles["card-menu-container"]} ${styles["row"]}`}
              >
                <div
                  className={`{["card-menu"]} ${styles["col-8"]} ${styles["col-md-3"]}`}
                >
                  <img
                    className={styles["image-product"]}
                    src="./assets/hazlenut.png"
                    alt=""
                  />
                  <div className={styles["product-details"]}>
                    <p className={styles["name-product"]}>Hazlenut Latte</p>
                    <ul
                      className={`${styles["serving-list"]} ${styles["list"]}`}
                    >
                      <li>Hazlenut syrup</li>
                      <li>Vanilla Whipped Cream</li>
                      <li>Ice / Hot</li>
                      <li>Sliced Banana on Top</li>
                    </ul>
                    <p className={styles["price"]}>IDR 25.000</p>
                    <button
                      className={styles["order"]}
                      style={"padding: 0.25rem 1rem"}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Locations --> */}
          <section
            className={`${styles["col-12"]} ${styles["locations"]} ${styles["bg-light"]}`}
          >
            <div className={styles["container"]}>
              <div
                className={`${styles["locations-text"]} ${styles["row"]} ${styles["justify-content-center"]}`}
              >
                <h1 className="locations-title col-12 text-center">
                  Visit Our Store in the Spot on the Map Below
                </h1>
                <p className={["col-12 locations-subtitle text-center"]}>
                  See our store in every city on the spot and spen your good day
                  there. See you soon!
                </p>
              </div>
              <img
                src="./assets/locations.png"
                alt=""
                className="locations-image col-12"
              />
            </div>
          </section>
          {/* <!-- Patners --> */}
          <section className="partners col-12">
            <div className="container">
              <div className="partners-content row justify-content-center">
                <h1 className="col-12 title-partners text-center">
                  Our Partner
                </h1>
                <div className="col-12">
                  <div className="img-partners-container row justify-content-center">
                    <img
                      src="./assets/netflix.png"
                      alt=""
                      className="col-md-2 col-6 netflix"
                    />
                    <img
                      src="./assets/reddit.png"
                      alt=""
                      className="col-md-2 col-6 reddit"
                    />
                    <img
                      src="./assets/amazon.png"
                      alt=""
                      className="col-md-2 col-6 amazon"
                    />
                    <img
                      src="./assets/discord.png"
                      alt=""
                      className="col-md-2 col-6 discord"
                    />
                    <img
                      src="./assets/spotify.png"
                      alt=""
                      className="col-md-2 col-6 spotify"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Reviews --> */}
          <section className="reviews col-12">
            <div className="container">
              <div className="reviews-content row justify-content-center">
                <div className="col-12 reviews-titles text-center">
                  <h1 className="reviews-title">
                    Loved by Thousands of Happy Customer
                  </h1>
                  <p className="reviews-subtitle">
                    These are the stories of our customers who have visited us
                    with great pleasure.
                  </p>
                </div>
                <div className="col-12 card-review-container">
                  <div className="row justify-content-around">
                    <div className="col-md-4 col-8">
                      <div className="card-review">
                        <div className="user-review">
                          <div className="user-info">
                            <img
                              src="./assets/user-1.png"
                              alt=""
                              className="user-img"
                            />
                            <div className="info-text">
                              <p className="user-name">Viezh Robert</p>
                              <p className="user-nationality">Warsaw, Poland</p>
                            </div>
                          </div>
                          <div className="ratings">
                            <p className="rating-text">4.5</p>
                            <img
                              src="./assets/star.png"
                              alt=""
                              className="star"
                            />
                          </div>
                        </div>
                        <p className="review-text text-left">
                          “Wow... I am very happy to spend my whole day here.
                          the Wi-fi is good, and the coffee and meals tho. I
                          like it here!! Very recommended!"
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 col-8">
                      <div className="card-review">
                        <div className="user-review">
                          <div className="user-info">
                            <img
                              src="./assets/user-1.png"
                              alt=""
                              className="user-img"
                            />
                            <div className="info-text">
                              <p className="user-name">Viezh Robert</p>
                              <p className="user-nationality">Warsaw, Poland</p>
                            </div>
                          </div>
                          <div className="ratings">
                            <p className="rating-text">4.5</p>
                            <img
                              src="./assets/star.png"
                              alt=""
                              className="star"
                            />
                          </div>
                        </div>
                        <p className="review-text text-left">
                          “Wow... I am very happy to spend my whole day here.
                          the Wi-fi is good, and the coffee and meals tho. I
                          like it here!! Very recommended!"
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 col-8">
                      <div className="card-review">
                        <div className="user-review">
                          <div className="user-info">
                            <img
                              src="./assets/user-1.png"
                              alt=""
                              className="user-img"
                            />
                            <div className="info-text">
                              <p className="user-name">Viezh Robert</p>
                              <p className="user-nationality">Warsaw, Poland</p>
                            </div>
                          </div>
                          <div className="ratings">
                            <p className="rating-text">4.5</p>
                            <img
                              src="./assets/star.png"
                              alt=""
                              className="star"
                            />
                          </div>
                        </div>
                        <p className="review-text text-left">
                          “Wow... I am very happy to spend my whole day here.
                          the Wi-fi is good, and the coffee and meals tho. I
                          like it here!! Very recommended!"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section className="promo-cta col-12">
                <div className="row align-items-center">
                  <div className="col-8">
                    <h1 className="cta-title">Check our promo today!</h1>
                    <p className="cta-subtitle">
                      Let's see the deals and pick yours!
                    </p>
                  </div>
                  <div className="col-4 d-flex justify-content-end">
                    <button className="btn-see-promo">See promo</button>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>
      <footer>
        <div className="container">
          <div className="row">
            <div className="footer-content col-md-6 col-12">
              <div className="footer-container">
                <div className="brand-container">
                  <img src="./assets/brand-logo.png" alt="" />
                  <a href="" className="brand-text">
                    Coffebug
                  </a>
                </div>
                <p className="footer-text">
                  Coffee Shop is a store that sells some good meals, and
                  especially coffee. We provide high quality beans
                </p>
                <div className="social-container">
                  <div className="logo-container">
                    <img src="./assets/facebook.png" alt="" />
                  </div>
                  <div className="logo-container">
                    <img src="./assets/twitter.png" alt="" />
                  </div>
                  <div className="logo-container">
                    <img src="./assets/instagram.png" alt="" />
                  </div>
                </div>
                <p className="copyright">&#169;2020Coffebug</p>
              </div>
            </div>
            <div className="footer-content col-md-6 col-12">
              <div className="footer-container link">
                <div className="footer-link-container product">
                  <p className="product-text">Product</p>
                  <div className="footer-link">
                    <a href="" className="download">
                      Download
                    </a>
                    <a href="" className="pricing">
                      Pricing
                    </a>
                  </div>
                  <div className="footer-link">
                    <a href="" className="locaions-link">
                      Locations
                    </a>
                    <a href="" className="countries">
                      Countries
                    </a>
                  </div>
                  <div className="footer-link">
                    <a href="" className="blog">
                      Blog
                    </a>
                  </div>
                </div>
                <div className="footer-link-container engage">
                  <p className="engage-text">Engage</p>
                  <div className="footer-link">
                    <a href="" className="coffee-shop">
                      Coffee shop?
                    </a>
                    <a href="" className="about-us">
                      About-us
                    </a>
                  </div>
                  <div className="footer-link">
                    <a href="" className="faq">
                      FAQ
                    </a>
                    <a href="" className="privacy-policy">
                      Privacy policy
                    </a>
                  </div>
                  <div className="footer-link">
                    <a href="" className="tos">
                      Term of services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Home;
