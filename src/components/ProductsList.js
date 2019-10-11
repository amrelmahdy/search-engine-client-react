import React, {Fragment} from "react";
import ProductCard from "./ProductCard";
import {buildHomeProductsListSkeleton} from "./../skeleton";

const ProductsList = ({productsIsLoading, products}) => {
    const productsList = products && products.length ? products.map((item, index) => {
        return <ProductCard product={item} key={index}/>
    }) : <img src="/assets/images/no-product.png" alt="no products yet"/>;

    if (!productsIsLoading) {
        return <div className="pr-list">
            {productsList}
        </div>
    } else {
        return <Fragment>
            {buildHomeProductsListSkeleton(3)}
        </Fragment>
    }

};

export default ProductsList;