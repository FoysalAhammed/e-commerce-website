import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Product.scss";
export default function Product({id,data}) {
  const navigate = useNavigate()
  return (
    <div className="product-card" onClick={()=>navigate("/product/" +id)}>
      <div className="thumbnail">
        <img src= {process.env.REACT_APP_STRIPE_APP_DEV_URL + data?.img?.data[0]?.attributes?.url} alt="" />
      </div>
      <div className="prod-details">
           <span className="name">{data?.title}</span>
           <span className="price">&#2547; {data.price}</span>
        </div>
    </div>
  )
}


