import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
    let { Id } = useParams();

    const [details, setDetails] = useState([]);

    const [singleDetails, setSingleDetails] = useState({});

    useEffect(() => {
        fetch("/service.json")
            .then((res) => res.json())
            .then((details) => setDetails(details));
    }, []);

    useEffect(() => {
        const foundDetails = details.find((detail) => detail.id == Id);
        setSingleDetails(foundDetails);
    }, [details]);

    return (
        <div className="w-100 mt-5 mb-3">
            <h2 className="mb-5">Details</h2>
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
                            <h3>{singleDetails?.price}</h3>
                            <h4>{singleDetails?.description}</h4>
                        </Card.Text>
                        <Link to="/service">
                            <button className="btn btn-primary">Back</button>
                        </Link>
                    </Card.Body>
                </Col>
            </Row>
        </div>
    );
};

export default ServiceDetails;
