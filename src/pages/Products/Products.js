import React, { Fragment, useEffect, useState, useMemo } from "react";
import ProductCard from "../../components/Cards/ProductCard";
import PromoCard from "../../components/Cards/PromoCard";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "./Products.module.css";
import { getData } from "../../utils/fetcher";
import withSearchParams from "../../helpers/withSearchParams";
import { createSearchParams, useLocation } from "react-router-dom";

const useQuery = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};

const Products = ({ setSerchParams }) => {
  const getQuery = useQuery();
  const [product, setProduct] = useState([]);
  const [totalPage, setTotalPage] = useState(null);
  const [query, setQuery] = useState({
    search: getQuery.get("search") ? getQuery.get("search") : "",
    categories: getQuery.get("categories") ? getQuery.get("categories") : "",
    minPrice: getQuery.get("minPrice") ? getQuery.get("minPrice") : 0,
    maxPrice: getQuery.get("maxPrice") ? getQuery.get("maxPrice") : 1000000,
    sort: getQuery.get("sort") ? getQuery.get("sort") : "popular",
    page: getQuery.get("page") ? getQuery.get("page") : 1,
    limit: getQuery.get("limit") ? getQuery.get("limit") : 8,
  });

  const fetchData = async (query) => {
    try {
      const products = await getData(`/products`, query);
      // setNext(products.data.meta.next);
      // setPrev(products.data.meta.prev);
      setQuery({
        ...query,
      });
      setProduct(products.data.data);
      setTotalPage(products.data.meta.totalPage);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(totalPage);
  useEffect(() => {
    fetchData(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.search, query.categories, query.page]);

  const currency = (price) => {
    return (
      "IDR " +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  };

  return (
    <Fragment>
      <NavBar />
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
            </div>
          </section>
          <section className={`col-12 col-md-8 ${styles["products-section"]}`}>
            <div className={`${styles["products-container"]}`}>
              <ul className={styles["categories-container"]}>
                <li
                  onClick={() => {
                    setQuery({
                      ...query,
                      sort: "popular",
                      categories: "",
                      search: "",
                      minPrice: 0,
                      maxPrice: 1000000,
                    });
                  }}
                >
                  Favorite & Promo
                </li>
                <li
                  onClick={() => {
                    setQuery({
                      ...query,
                      sort: "",
                      categories: "coffee",
                      search: "",
                      minPrice: 0,
                      maxPrice: 1000000,
                    });
                    const urlSearchParams = createSearchParams({ ...query });
                    setSerchParams(urlSearchParams);
                  }}
                >
                  Coffe
                </li>
                <li
                  onClick={() => {
                    setQuery({
                      ...query,
                      sort: "",
                      categories: "non-coffee",
                      search: "",
                      minPrice: 0,
                      maxPrice: 1000000,
                    });
                    const urlSearchParams = createSearchParams({ ...query });
                    setSerchParams(urlSearchParams);
                  }}
                >
                  Non Coffe
                </li>
                <li
                  onClick={() => {
                    setQuery({
                      ...query,
                      sort: "",
                      categories: "foods",
                      search: "",
                      minPrice: 0,
                      maxPrice: 1000000,
                    });
                    const urlSearchParams = createSearchParams({ ...query });
                    setSerchParams(urlSearchParams);
                  }}
                >
                  Foods
                </li>
                <li
                  onClick={() => {
                    setQuery({
                      ...query,
                      sort: "",
                      categories: "add-on",
                      search: "",
                      minPrice: 0,
                      maxPrice: 1000000,
                    });
                    const urlSearchParams = createSearchParams({ ...query });
                    setSerchParams(urlSearchParams);
                  }}
                >
                  Add-on
                </li>
              </ul>
              <div className={styles["product-list-container"]}>
                {product.map((e) => (
                  <ProductCard
                    productName={e.product_name}
                    price={currency(e.price)}
                    image={e.image}
                    id={e.id}
                    key={e.id}
                  />
                ))}
              </div>
              <div className={`${styles["paginate-container"]}`}>
                <p>{`showing page ${query.page} of ${totalPage}`}</p>

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
                    disabled={query.page === totalPage ? true : false}
                    className={`${styles["btn-next"]}`}
                  >
                    next
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default withSearchParams(Products);
