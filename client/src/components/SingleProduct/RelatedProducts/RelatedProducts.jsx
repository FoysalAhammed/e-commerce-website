import React from 'react'
import useFetch from '../../../hooks/useFetch'
import Products from "../../Products/Products"
import "./RelatedProducts.scss"
const RelatedProducts = ({productId,categoryId}) => {
  const {data} = useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`)
    console.log(productId,categoryId)
  return (
    <div className='related-products' ><Products products={data} headingText="Related products"/></div>
  )
}

export default RelatedProducts