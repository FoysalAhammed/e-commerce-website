import React from 'react'
import Product from "./Product/Product"
import "./Products.scss"
const Products = ({headingText,products}) => {
  return (
    <div className='products-container'>
      <div className="sec-heading">{headingText}</div>*
      <div className="products">
        {products?.data?.map((item) => (
          <Product key={item.id}  id={item.id} data={item?.attributes}/>
        ))}
           
      </div>
    </div>
  )
}

export default Products