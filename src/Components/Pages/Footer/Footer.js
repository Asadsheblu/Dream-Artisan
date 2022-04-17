import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
  
    return (
        <div>
            <section id="footer" className="container-fluid bg-dark">

<div className="row">
    <div className="col-md-4 p-5">
        <h4 className='text-center text-warning'>Dream Artisan</h4>
        <div className="d-flex pt-5">
            <input type="email" placeholder="Enter Your Email" />
                <button className="btn btn-warning rounded">Sent</button>
        </div>
    </div>
    <div className="col-md-4 p-5 text-white">
        <h4 className="headline">Contact Us</h4>
       <div className="d-flex">
        <i className="bi bi-telephone"></i>
        <p className="ps-3">(111) 222 3562</p>
        </div>
      
        <div className="d-flex">
            <i className="bi bi-envelope"></i>
            <p className="ps-3">Yourmail@gmail.com</p>
            </div>
           
        <div className="d-flex ">
            <i className="bi bi-geo-alt"></i>
            <p className="ps-3">3225 N Harbar Dr.san dieago</p>
            </div>
            
       
    </div>
    <div className="col-md-4 p-5 text-center text-white">
    <footer>
      <h6 className='pt-5'>
        <small>Copyright © {year} Dream Artisan</small>
      </h6>
    </footer>
    </div>
    
    
    
</div>

</section>
        </div>
    );
};

export default Footer;