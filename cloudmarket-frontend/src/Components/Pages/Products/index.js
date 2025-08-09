import React, { useEffect, useState } from "react";
import { baseURL } from "../../../config/api";

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        const myHeaders = new Headers();
myHeaders.append("authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3VyZXNoIiwiZW1haWwiOiJzdXJlc2huZXdAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE3NTQ3NDA3MTAsImV4cCI6MTc1NDc0NDMxMH0.71WcPtVhwDRMO_htxv1F2aUDhQgRWzdgtMvZvPKIaKk");
myHeaders.append("Content-Type", "application/json");
const requestOptions = {
  method: "POST",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`${baseURL}product/listProducts`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if(result.data.items){
    setProducts(result.data.items);
    }
    else {
        setProducts([]);
    }
  })
  .catch((error) => console.error(error));
    },[]);
    console.log(products)

    return (
 <div className="row">
 {products && products.length>0 ? products.map((value, index)=> 
(<div className="card col-lg-3" key={index}>
  <div className="card-body">
    <img src={value?.image?.fields?.file?.url} className="img-fluid object-image"/>
    <h5 className="card-title">{value.name}</h5>
    <p className="card-text ellipsis">{value?.description?.content[0]?.content[0]?.value}</p>
    <h5>${value?.price}</h5>
    <button className="card-link btn btn-primary">Add To Cart</button>
  </div></div>
)): <h1>No Products Found...</h1>}
</div>)
}