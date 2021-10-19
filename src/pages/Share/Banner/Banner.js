import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <h2  className="text-primary">
                <i>Dhanmondi Well Pharma Medicine Corner</i>
            </h2>
            <h3  className="text-danger">A friendly neighborhood drug store</h3>
            <br />
            <h2>House 8, Road 2, Dhanmondi R/A Dhaka - 1205</h2>
            <h3>E-mail : wellpharma2014@gmail.com</h3>
            <h4>Cell: 01727636363</h4>
            <Carousel fade className="w-75 mx-auto mt-5">
                <Carousel.Item>
                    <img
                        style={{ height: "350px" }}
                        className="d-block w-100"
                        src="https://i.ibb.co/vx3WDw2/service1.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Blood pressure measured</h3>
                        <p>
                            Blood pressure is measured very carefully and
                            accurate information is given.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "350px" }}
                        className="d-block w-100"
                        src="https://i.ibb.co/7X9zMbm/service2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Blood sugar Measured</h3>
                        <p>
                            Blood sugar is measured very carefully and accurate
                            information is given.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "350px" }}
                        className="d-block w-100"
                        src="https://i.ibb.co/9Yfkfkd/service5.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Diagnosing and giving medicine</h3>
                        <p>
                            A pharmacist diagnoses the disease by looking at the
                            patient's symptoms and prescribes the necessary
                            medicines.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;