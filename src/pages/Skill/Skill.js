import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Skill = () => {
    const [services, setServices] = useState([]);
    console.log(services);
  
    useEffect(() => {
      fetch("./skill.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);

    return (
        <div>
            <h2 className="mt-5 fs-1">Skills Pharmacist</h2>
      <Row className="p-5">
        {services.map((service) => (
          <div className="col-md-6">
            <Col>
            <Card.Img variant="top" className="w-75"  src={service.img} />
            <Card.Body>
              <Card.Title>
                {" "}
                <h1>{service.name}</h1>{" "}
              </Card.Title>
              <Card.Text>
                <h4>{service.description}</h4>
                <p className="fs-4">Phone: {service.phone}</p>
              </Card.Text>
            </Card.Body>
          </Col>
          </div>
        ))}
      </Row>
        </div>
    );
};

export default Skill;