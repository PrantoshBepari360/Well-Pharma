import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
    const { id, img, name, price, description } = props.service;

    return (
        <div className="col-md-6 col-lg-4">
            <div className="pb-5 border border-2 border-info mb-4">
                <img className="w-75" src={img} alt="" />
                <h2>{name}</h2> 
                <h4>Price: {price}</h4>
                <p className="px-4">{description}</p>
                <Link to={`/about/${id}`}>
                    <button className="btn btn-primary">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default About;
