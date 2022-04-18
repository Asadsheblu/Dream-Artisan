import { signOut } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase_init';
import './Header.css'
const Header = () => {
 
  const [user]=useAuthState(auth)
  
  const handelsignOut=()=>{
    signOut(auth)
  }
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-info">
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
          <Link className="nav-link" to="/about" href="#">About</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/blog" href="#">Blog</Link>
        </li>
        </ul>
     <button className="btn btn-danger pe-3 me-5"><Link className='text-decoration-none text-white' to="/register">Register</Link></button>
{
  user?
<button onClick={handelsignOut} className="btn btn-warning">SignOut</button>
:
<button className="btn btn-warning"><Link className='text-decoration-none text-white' to="/login">Login</Link></button>
}



  
           
              

    
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;