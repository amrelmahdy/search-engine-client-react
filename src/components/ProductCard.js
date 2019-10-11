import React from "react";

const ProductCard = ({product, index}) => (
    <div className="pr" key={index}>
        <div className="row">
            <div className="col-md-3 no-padding" style={{borderRadius: "15px"}}>
                <div className="pr-image">
                    <img src={product.image} alt={product.name}/>
                </div>
            </div>
            <div className="col-md-9 no-padding">
                <div className="pr-info">
                    <h4 className="name">{product.name}</h4>
                    <strong className="category">{product.category.name}</strong>
                    <span className="brand">{product.brand}</span>
                    <span className="price">${product.price}</span>

                </div>
            </div>
        </div>
    </div>
);

export default ProductCard;