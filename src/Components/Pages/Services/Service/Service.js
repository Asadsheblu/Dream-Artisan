import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {name,img,category,price,description}=service
    

    return (
        
             <div className="col">
    <div className="card">
      <img src={img} className="card-img-top img-fluid h-50" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Name:{name}</h5>
        
        <h6>Category:{category}</h6>
        <p>{description}</p>
        <h6>Price:{price}$</h6>
        <button className='btn btn-warning'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> <Link className="text-decoration-none text-white" to="/checkout">Add To Cart</Link> </button>
      </div>
    </div>
  </div>
        
    );
};

export default Service;