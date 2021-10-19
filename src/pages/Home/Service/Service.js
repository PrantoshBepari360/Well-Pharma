import React from "react";

const Service = (props) => {
    const { img, name, price, description } = props.service;
    return (
        <div className="col-md-6 col-lg-4">
            <div className="pb-3">
                <img className="w-75" style={{height: '18rem'}} src={img} alt="" />
                <h2>{name}</h2>
                <h4>Price: {price}</h4>
                <p className="px-3">{description}</p>
            </div>
        </div>
    );
};

export default Service;
