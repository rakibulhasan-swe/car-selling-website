import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const News = () => {
    return (
        <Container className='py-5'>
            <h4 className='fs-2 fw-bold text-center'><span className='text-danger'>What's</span> New</h4>
            <Row>
                <Col className='py-5'>
                <div className='pb-5'>
                        <Card style={{cursor: 'pointer' }} className='shadow'>
                            <Card.Img variant="top" src="https://image.freepik.com/free-photo/luxury-sport-car-with-xenon-lights-front-view-drive-sunset_114579-5063.jpg" />
                            <Card.Body>
                                <Card.Title className='fs-6'>Are You Ready for the Online Dealership?</Card.Title>
                                <hr className='w-75' />
                                <div className='d-flex justify-content-between'>
                                    <Card.Text>
                                        12 April , 2021
                                    </Card.Text>
                                    <FontAwesomeIcon className='text-danger' icon={faArrowRight} />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col className='py-5'>
                <div className='pb-5'>
                        <Card style={{cursor: 'pointer' }} className='shadow'>
                            <Card.Img variant="top" src="https://image.freepik.com/free-photo/white-sport-car-with-black-autotuning_114579-4074.jpg" />
                            <Card.Body>
                                <Card.Title className='fs-6'>Closing the sale is the moment of the truth</Card.Title>
                                <hr className='w-75' />
                                <div className='d-flex justify-content-between'>
                                    <Card.Text>
                                        17 September , 2021
                                    </Card.Text>
                                    <FontAwesomeIcon className='text-danger' icon={faArrowRight} />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col className='py-5'>
                <div className='pb-5'>
                        <Card style={{cursor: 'pointer' }} className='shadow'>
                            <Card.Img variant="top" src="https://image.freepik.com/free-photo/blue-sport-sedan-parked-yard_114579-5078.jpg" />
                            <Card.Body>
                                <Card.Title className='fs-6'>Closing the sale is the moment of the truth</Card.Title>
                                <hr className='w-75' />
                                <div className='d-flex justify-content-between'>
                                    <Card.Text>
                                        17 September , 2021
                                    </Card.Text>
                                    <FontAwesomeIcon className='text-danger' icon={faArrowRight} />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default News;