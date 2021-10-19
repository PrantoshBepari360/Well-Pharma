import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const AboutDetails = () => {
    let { Id } = useParams();

    const [details, setDetails] = useState([]);

    const [singleDetails, setSingleDetails] = useState({});

    useEffect(() => {
        fetch("/about.json")
            .then((res) => res.json())
            .then((details) => setDetails(details));
    }, []);

    useEffect(() => {
        const foundDetails = details.find((detail) => detail.id === Id);
        setSingleDetails(foundDetails);
    }, [details]);

    return (
        <div className="w-100 mt-5 mb-3">
            <h2 className="mb-5">Details</h2>
            <div className="w-50 mx-auto pb-3 border border-2 border-info mb-4">
            <Row>
                <Col>
                    <Card.Img
                        variant="top"
                        className="w-50"
                        src={singleDetails?.img}
                    />
                    <Card.Body>
                        <Card.Title>
                            {" "}
                            <h1>{singleDetails?.name}</h1>{" "}
                        </Card.Title>
                        <Card.Text>
                            <h4 className="px-5">{singleDetails?.description}</h4>
                            <h3>Price: {singleDetails?.price}</h3>
                        </Card.Text>
                        <Link to="/about">
                            <button className="btn btn-primary">Back</button>
                        </Link>
                    </Card.Body>
                </Col>
            </Row>
            </div>
        </div>
    );
};

export default AboutDetails;
