import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services,setService]=useState([])
    useEffect(()=>{
        fetch("serviceData.json")
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div className="container-fluid p-5">
            <h1 className='text-center'>Service</h1>
            <div className='row row-cols-1 row-cols-md-3 g-4'>

            
            {
                services?.map(service=><Service key={service.id} service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;