import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/" href="#">Dream Artisan</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/about" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/service" href="#">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/contact" href="#">Contact</a>
        </li>
        </ul>
     <button className="btn btn-danger pe-3 me-5"><Link className='text-decoration-none text-white' to="/register">Register</Link></button>



<button className="btn btn-warning"><Link className='text-decoration-none text-white' to="/login">Login</Link></button>
  
           
              

    
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;