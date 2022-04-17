import React from 'react';
import notfound from "../../images/SVG-Animation-404-Page.gif"
const Notfound = () => {
    return (
        <div className='w-100'>
            <img className='w-100 img-fluid' src={notfound} alt="" />
        </div>
    );
};

export default Notfound;