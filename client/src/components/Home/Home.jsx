import React, { useContext, useEffect } from "react";
import { fetchDataFromApi } from "../../Utils/api";
import { Context } from "../../Utils/context";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import "./Home.scss";

const Home = () => {
 const { products, setProducts, categories, setCategories } = useContext(Context);

    useEffect(() => {
        getProducts();
        getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            console.log(res);
            setProducts(res);
      
        });
    };
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.log(res); 
            setCategories(res);
        });
    };

   
  return (
    <div className='home'>
      <Banner />
      <div className="main-content">
         <div className="layout">
          <Category categories={categories}/>
          <Products  products={products} headingText="Popular Products"/>
         </div>
      </div>
    </div>
  )
}

export default Home