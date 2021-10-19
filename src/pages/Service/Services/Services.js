import React, { useEffect, useState } from "react";
import Service from "../Service/Service";



const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services);

    useEffect(() => {
        fetch("/service.json")
            .then((res) => res.json())
            .then((services) => setServices(services));
    }, []);

    return (
        <div>
            <h2 className="py-5">Our Service</h2>
            <div className="row mt-3">
                {services.map((service) => (
                    <Service key={service.id} service={service}></Service>
                ))}
            </div>
        </div>
    );
};

export default Services;
