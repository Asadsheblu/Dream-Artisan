import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Service = ({service}) => {
    const {name,img,category,price}=service
    return (
        
             <div className="col">
    <div className="card">
      <img src={img} className="card-img-top img-fluid h-50" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Name:{name}</h5>
        <h6>Price:{price}$</h6>
        <p>Category:{category}</p>
        <button className='btn btn-warning'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add To Cart</button>
      </div>
    </div>
  </div>
        
    );
};

export default Service;