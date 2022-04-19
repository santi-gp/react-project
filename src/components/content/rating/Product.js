import React from 'react'
import { getAllProducts } from './products'
import RatingStar from './RatingStar';

function Product() {
    const products = getAllProducts();
    return (
        <>
            {
                //console.log(products)
                products.map((product) => (
                    <div key={product.productName}>
                        <img width={64} height={64} src={product.imageUrl} alt={product.imageUrl} />
                        <h4>{product.productName}</h4>
                        <p>{product.releasedDate}</p> 
                        <RatingStar rating={product.rating} numOfReviews={product.numOfReviews} />
                        <p>{product.description}</p>
                    </div>
                ))
            }
        </>
    )
}

export default Product