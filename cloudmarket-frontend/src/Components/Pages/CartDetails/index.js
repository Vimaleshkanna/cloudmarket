import React from "react";
import Header from "../../Header";

export default function CartDetails() {
    return (
      <>
      <Header/>
<div className="container py-5">
  <h3 className="mb-4">🛒 Cart History</h3>

  <div id="cart-items">

    <div className="card mb-3 cart-item" data-price="29.99">
      <div className="row g-0 align-items-center">
        <div className="col-md-2">
          <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" width={"100"} className="img-fluid rounded-start" alt="Product 1"/>
        </div>
        <div className="col-md-7">
          <div className="card-body card-body-cart">
            <h5 className="card-cart-title  ">Red T-shirt</h5>
            <p className="card-text mb-1 card-text-price">Price: $<span className="price">29.99</span></p>
            <div className="input-group quantity-control">
              <button className="btn btn-outline-secondary btn-minus">−</button>
              <input type="text" className="form-control text-center quantity" value="1" readonly/>
              <button className="btn btn-outline-secondary btn-plus">+</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-end pe-3">
          <button className="btn btn-danger btn-delete mt-3">Delete</button>
        </div>
      </div>
    </div>

    <div className="card mb-3 cart-item" data-price="49.99">
      <div className="row g-0 align-items-center">
        <div className="col-md-2">
          <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" width={"100"}  className="img-fluid rounded-start" alt="Product 2"/>
        </div>
        <div className="col-md-7">
          <div className="card-body card-body-cart">
            <h5 className="card-cart-title ">Black Hoodie</h5>
            <p className="card-text card-text-price mb-1">Price: $<span className="price">49.99</span></p>
            <div className="input-group quantity-control">
              <button className="btn btn-outline-secondary btn-minus">−</button>
              <input type="text" className="form-control text-center quantity" value="1" readonly/>
              <button className="btn btn-outline-secondary btn-plus">+</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-end pe-3">
          <button className="btn btn-danger btn-delete mt-3">Delete</button>
        </div>
      </div>
    </div>

  </div>

  <div className="text-end mt-4">
    <h4>Total Order: $<span id="total">0.00</span></h4>
  </div>
</div></>)
}