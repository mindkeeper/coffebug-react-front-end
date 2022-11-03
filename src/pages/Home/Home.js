import React, { Fragment } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";
import iconUser from "../../assets/img/home/user.png";
import iconLocation from "../../assets/img/home/location.png";
import iconCustomer from "../../assets/img/home/customers.png";
import servicesImg from "../../assets/img/home/services.png";
import hazlenut from "../../assets/img/home/hazlenut.png";
import mapImg from "../../assets/img/home/locations.png";
import netflix from "../../assets/img/home/netflix.png";
import users from "../../assets/img/home/user-1.png";
import star from "../../assets/img/home/star.png";

import withNavigate from "../../helpers/withNavigate";
import withLocation from "../../helpers/withLocation";
const Home = ({ navigate }) => {
  return (
    <Fragment>
      <NavBar />
      <main className="container-fluid">
        <div className="row">
          <section
            className={`${styles["hero"]} col-12 d-flex align-items-center`}
          >
            <div
              className={`${styles["full-height"]} ${styles["center"]} ${styles["relative"]} container`}
            >
              <h1
                className={`${styles["hero-title"]} text-white col-12 col-md-6`}
              >
                Start Your Day with Coffee and Good Meals
              </h1>
              <p
                className={`${styles["hero-subtitle"]} text-white col-12 col-md-6`}
              >
                We provide high quality beans, good taste, and healthy meals
                made by love just for you. Start your day with us for a bigger
                smile!
              </p>
              <button
                onClick={() => {
                  navigate("/register");
                }}
                className={styles["hero-button"]}
              >
                Get Started
              </button>
              <div className={`${styles["info-cta"]} col-12`}>
                <div className={`row align-items-center`}>
                  <div
                    className={`col-4 d-flex justify-content-center ${styles["cta-info-side"]}`}
                  >
                    <div className={styles["img-info"]}>
                      <img src={iconUser} alt="" />
                    </div>
                    <div className={styles["cta-text-info"]}>
                      <p className={styles["info-title"]}>90+</p>
                      <p className={styles["info-subtitle"]}>Staff</p>
                    </div>
                  </div>
                  <div
                    className={`col-4 d-flex justify-content-center ${styles["cta-info-side"]}`}
                  >
                    <div className={styles["img-info"]}>
                      <img src={iconLocation} alt="" />
                    </div>
                    <div className={styles["cta-text-info"]}>
                      <p className={styles["info-title"]}>30+</p>
                      <p className={styles["info-subtitle"]}>Locations</p>
                    </div>
                  </div>
                  <div
                    className={`col-4 d-flex justify-content-center ${styles["cta-info-side"]}`}
                  >
                    <div className={styles["img-info"]}>
                      <div className={styles["img-cust-container"]}>
                        <img
                          src={iconCustomer}
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

          <section className={`${styles["services"]} col-12`}>
            <div
              className={`container ${styles["services"]} d-flex flex-row align-items-center justify-content-between`}
            >
              <div className={`row d-flex flex-row justify-content-center`}>
                <aside className={`col-12 col-md-6 ${styles["services-img"]}`}>
                  <img src={servicesImg} alt="" />
                </aside>
                <aside className={`col-12 col-md-6 ${styles["services-info"]}`}>
                  <h1 className={`${styles["services-title"]} text-left`}>
                    We Provide Good Coffee and Healthy Meals
                  </h1>
                  <p className={`${styles["subtitle"]} text-left`}>
                    You can explore the menu that we provide with fun and have
                    their own taste and make your day better.
                  </p>
                  <ul className={styles["list"]}>
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

          <section className={`col-12 ${styles["favorites"]}`}>
            <div className={`${styles["favorites"]} container`}>
              <div className={`text-center`}>
                <h2 className={styles["favorites-title"]}>
                  Here is People’s Favorite
                </h2>
                <p className={styles["favorites-subtitles"]}>
                  Let’s choose and have a bit taste of poeple’s favorite. It
                  might be yours too!
                </p>
              </div>
              <div className={`${styles["card-menu-container"]} row`}>
                <div className={`${styles["card-menu"]} col-8 col-md-3`}>
                  <img
                    className={styles["image-product"]}
                    src={hazlenut}
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
                    <button className={styles["order"]}>Order Now</button>
                  </div>
                </div>
                <div className={`${styles["card-menu"]} col-8 col-md-3`}>
                  <img
                    className={styles["image-product"]}
                    src={hazlenut}
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
                    <button className={styles["order"]}>Order Now</button>
                  </div>
                </div>
                <div className={`${styles["card-menu"]} col-8 col-md-3`}>
                  <img
                    className={styles["image-product"]}
                    src={hazlenut}
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
                    <button className={styles["order"]}>Order Now</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={`col-12 ${styles["locations"]} bg-light`}>
            <div className="container">
              <div
                className={`${styles["locations-text"]} row justify-content-center`}
              >
                <h1
                  className={`${styles["locations-title"]} col-12 text-center`}
                >
                  Visit Our Store in the Spot on the Map Below
                </h1>
                <p
                  className={`col-12 ${styles["locations-subtitle"]} text-center"`}
                >
                  See our store in every city on the spot and spen your good day
                  there. See you soon!
                </p>
              </div>
              <img
                src={mapImg}
                alt=""
                className={`${styles["locations-image"]} col-12`}
              />
            </div>
          </section>

          <section className={`${styles["partners"]} col-12`}>
            <div className="container">
              <div
                className={`${styles["partners-content"]} row justify-content-center"`}
              >
                <h1
                  className={`col-12 ${styles["title-partners"]} text-center`}
                >
                  Our Partner
                </h1>
                <div className="col-12">
                  <div
                    className={`${styles["img-partners-container"]} row justify-content-center`}
                  >
                    <img src={netflix} alt="" className={`col-md-2 col-6`} />
                    <img src={netflix} alt="" className={`col-md-2 col-6`} />
                    <img src={netflix} alt="" className={`col-md-2 col-6`} />
                    <img src={netflix} alt="" className={`col-md-2 col-6`} />
                    <img src={netflix} alt="" className={`col-md-2 col-6`} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={`${styles["reviews"]} col-12`}>
            <div
              className={`${styles["full-height"]} ${styles["relative"]} container`}
            >
              <div className={` row justify-content-center`}>
                <div
                  className={`col-12 ${styles["reviews-titles"]} text-center`}
                >
                  <h1 className={styles["reviews-title"]}>
                    Loved by Thousands of Happy Customer
                  </h1>
                  <p className={styles["reviews-subtitle"]}>
                    These are the stories of our customers who have visited us
                    with great pleasure.
                  </p>
                </div>
                <div className={`col-12 ${styles["card-review-container"]}`}>
                  <div className="row justify-content-around">
                    <div className="col-md-4 col-8">
                      <div className={styles["card-review"]}>
                        <div className={styles["user-review"]}>
                          <div className={styles["user-info"]}>
                            <img
                              src={users}
                              alt=""
                              className={styles["user-img"]}
                            />
                            <div className={styles["info-text"]}>
                              <p className={styles["user-name"]}>
                                Viezh Robert
                              </p>
                              <p className={styles["user-nationality"]}>
                                Warsaw, Poland
                              </p>
                            </div>
                          </div>
                          <div className={styles["ratings"]}>
                            <p className={styles["rating-text"]}>4.5</p>
                            <img src={star} alt="" className={styles["star"]} />
                          </div>
                        </div>
                        <p className={`${["review-text"]} text-left`}>
                          “Wow... I am very happy to spend my whole day here.
                          the Wi-fi is good, and the coffee and meals tho. I
                          like it here!! Very recommended!"
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 col-8">
                      <div className={styles["card-review"]}>
                        <div className={styles["user-review"]}>
                          <div className={styles["user-info"]}>
                            <img
                              src={users}
                              alt=""
                              className={styles["user-img"]}
                            />
                            <div className={styles["info-text"]}>
                              <p className={styles["user-name"]}>
                                Viezh Robert
                              </p>
                              <p className={styles["user-nationality"]}>
                                Warsaw, Poland
                              </p>
                            </div>
                          </div>
                          <div className={styles["ratings"]}>
                            <p className={styles["rating-text"]}>4.5</p>
                            <img src={star} alt="" className={styles["star"]} />
                          </div>
                        </div>
                        <p className={`${["review-text"]} text-left`}>
                          “Wow... I am very happy to spend my whole day here.
                          the Wi-fi is good, and the coffee and meals tho. I
                          like it here!! Very recommended!"
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 col-8">
                      <div className={styles["card-review"]}>
                        <div className={styles["user-review"]}>
                          <div className={styles["user-info"]}>
                            <img
                              src={users}
                              alt=""
                              className={styles["user-img"]}
                            />
                            <div className={styles["info-text"]}>
                              <p className={styles["user-name"]}>
                                Viezh Robert
                              </p>
                              <p className={styles["user-nationality"]}>
                                Warsaw, Poland
                              </p>
                            </div>
                          </div>
                          <div className={styles["ratings"]}>
                            <p className={styles["rating-text"]}>4.5</p>
                            <img src={star} alt="" className={styles["star"]} />
                          </div>
                        </div>
                        <p className={`${["review-text"]} text-left`}>
                          “Wow... I am very happy to spend my whole day here.
                          the Wi-fi is good, and the coffee and meals tho. I
                          like it here!! Very recommended!"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section className={`${styles["promo-cta"]} col-12`}>
                <div className="row align-items-center">
                  <div className="col-8">
                    <h1 className={star["cta-title"]}>
                      Check our promo today!
                    </h1>
                    <p className={styles["cta-subtitle"]}>
                      Let's see the deals and pick yours!
                    </p>
                  </div>
                  <div className="col-4 d-flex justify-content-end">
                    <button
                      onClick={() => {
                        navigate("/products");
                      }}
                      className={styles["btn-see-promo"]}
                    >
                      See promo
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default withLocation(withNavigate(Home));
