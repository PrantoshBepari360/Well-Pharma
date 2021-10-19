import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import About from "../About/About";

const Abouts = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/about.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div className="mt-5 mb-3">
            <h2>About</h2>
            <Row className="p-5">
                {services.map((service) => (
                    <About key={service.id} service={service}></About>
                ))}
            </Row>
        </div>
    );
};

export default Abouts;
