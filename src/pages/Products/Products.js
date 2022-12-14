import React, { Fragment, useEffect, useState, useMemo } from "react";
import ProductCard from "../../components/Cards/ProductCard";
import PromoCard from "../../components/Cards/PromoCard";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "./Products.module.css";
import withSearchParams from "../../helpers/withSearchParams";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import productActions from "../../redux/actions/products";
import { connect, useSelector } from "react-redux";
import Loading from "../../components/Loading";

const useQuery = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};

const Products = ({ setSearchParams, dispatch }) => {
  const getQuery = useQuery();
  const navigate = useNavigate();
  const pagination = useSelector((state) => state.products.pagination);
  const products = useSelector((state) => state.products.products);
  const role = useSelector((state) => state.auths.userData.role);
  const isLoading = useSelector((state) => state.products.isLoading);
  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState({
    search: getQuery.get("search") ? getQuery.get("search") : "",
    sort: getQuery.get("sort") ? getQuery.get("sort") : "popular",
    page: getQuery.get("page") ? getQuery.get("page") : 1,
  });

  useEffect(() => {
    const urlSearchParams = createSearchParams({ ...query });
    setSearchParams(urlSearchParams);
    dispatch(productActions.getProductsThunk(query));
  }, [dispatch, query, setSearchParams]);

  const [selected, setSelected] = useState("favorites");

  const currency = (price) => {
    return (
      "IDR " +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  };
  const handleDropdown = () => setIsActive(!isActive);

  return (
    <Fragment>
      <NavBar searchValue={(e) => setQuery({ search: e })} />
      <main>
        <div className={`row ${styles["main"]}`}>
          <section className={`col-12 col-md-4 ${styles["promo-section"]}`}>
            <div className={`container ${styles["promo-container"]}`}>
              <div className={styles["promo-titles"]}>
                <p
                  className={`${styles["section-title"]} ${styles["promo-today"]}`}
                >
                  Promo Today
                </p>
                <p
                  className={`${styles["section-subtitle"]} ${styles["promo-subtitle"]}`}
                >
                  Coupons will be updated every weeks. Check them out!
                </p>
              </div>
              <div className="container row justify-content-center">
                <ul className={styles["list-promos"]}>
                  <li>
                    <PromoCard />
                  </li>
                  <li>
                    <PromoCard />
                  </li>
                  <li>
                    <PromoCard />
                  </li>
                  <li>
                    <PromoCard />
                  </li>
                </ul>
                <button className={styles["apply"]}>Apply Changes</button>
              </div>
              <div className={`container ${styles["terms-container"]}`}>
                <p className={styles["terms-text"]}>Terms and Conditions</p>
                <ol className={styles["terms"]}>
                  <li>You can only apply 1 coupon per day</li>
                  <li>Only for dine in</li>
                  <li>Buy one get one for new user</li>
                  <li>Make member card to apply coupon</li>
                </ol>
              </div>
              {role === "Admin" && (
                <button
                  onClick={() => navigate("/promos/new")}
                  className={styles["add-promo"]}
                >
                  Add Promo
                </button>
              )}
            </div>
          </section>
          <section className={`col-12 col-md-8 ${styles["products-section"]}`}>
            <div className={`${styles["products-container"]}`}>
              <ul className={styles["categories-container"]}>
                <li
                  onClick={() => {
                    setQuery({
                      sort: "popular",
                      page: 1,
                    });
                    setSelected("favorites");
                  }}
                  className={
                    selected === "favorites" &&
                    `${styles["selected"]} ${styles["categories"]}`
                  }
                >
                  Favorites
                </li>
                <li
                  onClick={() => {
                    setQuery({
                      categories: "coffee",
                      page: 1,
                    });
                    setSelected("coffee");
                  }}
                  className={
                    selected === "coffee" &&
                    `${styles["selected"]} ${styles["categories"]}`
                  }
                >
                  Coffee
                </li>
                <li
                  onClick={() => {
                    setQuery({
                      categories: "non-coffee",
                      page: 1,
                    });
                    setSelected("non-coffee");
                  }}
                  className={
                    selected === "non-coffee" &&
                    `${styles["selected"]} ${styles["categories"]}`
                  }
                >
                  Non Coffe
                </li>
                <li
                  onClick={() => {
                    setQuery({
                      categories: "foods",
                      page: 1,
                    });
                    setSelected("foods");
                  }}
                  className={
                    selected === "foods" &&
                    `${styles["selected"]} ${styles["categories"]}`
                  }
                >
                  Foods
                </li>
                <li
                  onClick={() => {
                    setQuery({
                      categories: "add-on",
                      page: 1,
                    });
                  }}
                >
                  Add-on
                </li>
              </ul>

              <div className={styles["dropdown-container"]}>
                <div className={`${styles["dropdown"]} `}>
                  <div
                    className={`${styles["dropdown-btn"]} ${
                      styles[isActive ? "active" : ""]
                    }`}
                    onClick={handleDropdown}
                  >
                    <h2>Sort by</h2>
                    <span>&#9660;</span>
                  </div>
                  {isActive && (
                    <div className={styles["dropdown-content"]}>
                      <div className={styles["dropdown-item"]}>
                        <p
                          onClick={() => {
                            setQuery({
                              ...query,
                              sort: "newest",
                            });
                          }}
                        >
                          newest
                        </p>
                      </div>
                      <div className={styles["dropdown-item"]}>
                        <p
                          onClick={() => {
                            setQuery({
                              ...query,
                              sort: "oldest",
                            });
                            handleDropdown();
                          }}
                        >
                          oldest
                        </p>
                      </div>
                      <div className={styles["dropdown-item"]}>
                        <p
                          onClick={() => {
                            setQuery({
                              ...query,
                              sort: "priciest",
                            });
                            handleDropdown();
                          }}
                        >
                          priciest
                        </p>
                      </div>
                      <div className={styles["dropdown-item"]}>
                        <p
                          onClick={() => {
                            setQuery({
                              ...query,
                              sort: "cheapest",
                            });
                            handleDropdown();
                          }}
                        >
                          cheapest
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className={styles["product-list-container"]}>
                {isLoading
                  ? Array.from(Array(8).keys()).map((e) => {
                      return <ProductCard key={e} isLoading={isLoading} />;
                    })
                  : products.length > 0 &&
                    products.map((item) => {
                      return (
                        <ProductCard
                          productName={item.product_name}
                          price={currency(item.price)}
                          image={item.image}
                          id={item.id}
                          key={item.id}
                        />
                      );
                    })}
              </div>
              <div className={`${styles["paginate-container"]}`}>
                <p>{`showing page ${query.page} of ${pagination?.totalPage}`}</p>

                <div className={styles["btn-paginate"]}>
                  <button
                    onClick={() => {
                      setQuery({ ...query, page: query.page - 1 });
                    }}
                    disabled={query.page === 1 ? true : false}
                    className={`${styles["btn-prev"]}`}
                  >
                    prev
                  </button>
                  <button
                    onClick={() => {
                      setQuery({ ...query, page: query.page + 1 });
                    }}
                    disabled={
                      query.page === pagination?.totalPage ? true : false
                    }
                    className={`${styles["btn-next"]}`}
                  >
                    next
                  </button>
                </div>
              </div>
              {role === "Admin" && (
                <button
                  onClick={() => navigate("/product/new")}
                  className={styles["add-product"]}
                >
                  Add new product
                </button>
              )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
const stateProps = (reduxState) => reduxState;
export default withSearchParams(connect(stateProps)(Products));
