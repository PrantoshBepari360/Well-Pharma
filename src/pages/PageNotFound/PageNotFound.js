import React from 'react';
import { Link } from 'react-router-dom';

const pageNotFound = () => {
    return (
        <div>
            <img className="w-100 py-5" src="https://i.ibb.co/KyNHYRy/404-page-not-found.png" alt="" />
            <Link to="/">
                <button className="btn btn-primary">Go Back</button>
            </Link>
        </div>
    );
};

export default pageNotFound;