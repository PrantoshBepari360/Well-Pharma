import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="bg-secondary mt-5">
            <div className="row py-5">
                <div className="col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
                    <h1>
                        Well Pharma <i className="fas fa-pills"></i>
                    </h1>
                </div>
                <div className="col-md-6 col-lg-3">
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/service">Service</Link>
                        </li>
                        <li>
                            <Link to="/skill">Skills</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 col-lg-4">
                    <ul>
                        <li>
                            <Link to="/home">Well Pharma</Link>
                        </li>
                        <li>
                            <Link to="/about">Dhanmondi Farmasi</Link>
                        </li>
                        <li>
                            <Link to="/service">Popular Farmasi</Link>
                        </li>
                        <li>
                            <Link to="/skill">Mita Farmisi</Link>
                        </li>
                    </ul>
                </div>
            <p className="mt-5 fs-1">Copy Right & Design <span className="text-warning">Prantosh Bepari.</span></p>
            </div>
        </div>
    );
};

export default Footer;
