import { faArrowRight, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, FormControl, InputGroup, Row, Button, Card } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const Blog = () => {
    return (
        <>
        <Navigation></Navigation>
        <Container fluid className='pb-5 pt-4'>
            <Row>
                <Col lg={8} md={8} sm={12}>
                    <div className='py-5'>
                        <div>
                            <img className='img-fluid w-100' src='https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2018/10/blog_img_01-1.jpg' alt='Car'></img>
                        </div>
                        <div className='shadow py-3 px-3'>
                            <p><FontAwesomeIcon className='me-1 text-danger' icon={faUser} /><small>Written by Admin</small></p>
                            <h4 className='pb-3'>Are You Ready for the Online Dealership?</h4>
                            <p>It doesn’t matter who you employ; both experienced and amateur salespeople need training, and it’s your job to give them car salesman tips that will help them succeed at your dealership.</p>
                            <p><hr className='w-25' /></p>
                            <div className='d-flex justify-content-between'>
                                <p>12 April , 2021</p>
                                <p><a href='/blog'>Read More<FontAwesomeIcon className='ms-1 text-danger' icon={faArrowRight} /></a></p>
                            </div>
                        </div>
                    </div>
                    {/* blog 2 */}
                    <div className='pb-5'>
                        <div>
                            <img className='img-fluid w-100' src='https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2018/10/blog_img_02-1.jpg' alt='Sales person'></img>
                        </div>
                        <div className='shadow py-3 px-3'>
                            <p><FontAwesomeIcon className='me-1 text-danger' icon={faUser} /><small>Written by Admin</small></p>
                            <h4 className='pb-3'>Closing the sale is the moment of the truth</h4>
                            <p>It doesn’t matter who you employ; both experienced and amateur salespeople need training, and it’s your job to give them car salesman tips that will help them succeed at your dealership.</p>
                            <p><hr className='w-25' /></p>
                            <div className='d-flex justify-content-between'>
                                <p>17 September , 2021</p>
                                <p><a href='/blog'>Read More<FontAwesomeIcon className='ms-1 text-danger' icon={faArrowRight} /></a></p>
                            </div>
                        </div>
                    </div>
                    {/* third blog */}
                    <div className='pb-5'>
                        <div>
                            <img className='img-fluid w-100' src='https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2018/10/blog_img_03-2.jpg' alt='Car'></img>
                        </div>
                        <div className='shadow py-3 px-3'>
                            <p><FontAwesomeIcon className='me-1 text-danger' icon={faUser} /><small>Written by Admin</small></p>
                            <h4 className='pb-3'>How to use a Dealer Swap to Increase Sales</h4>
                            <p>It doesn’t matter who you employ; both experienced and amateur salespeople need training, and it’s your job to give them car salesman tips that will help them succeed at your dealership.</p>
                            <p><hr className='w-25' /></p>
                            <div className='d-flex justify-content-between'>
                                <p>23 December , 2021</p>
                                <p><a href='/blog'>Read More<FontAwesomeIcon className='ms-1 text-danger' icon={faArrowRight} /></a></p>
                            </div>
                        </div>
                    </div>
                </Col>
                {/* another part */}
                <Col className='py-5 d-block mx-auto'>
                    <InputGroup className="mb-3 w-75">
                        <FormControl
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="danger" id="button-addon2">
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </Button>
                    </InputGroup>
                    <div className='pb-4'>
                        <h4>Categories</h4>
                        <p><FontAwesomeIcon className='me-2 text-danger' icon={faArrowRight} />Audios</p>
                        <p><FontAwesomeIcon className='me-2 text-danger' icon={faArrowRight} />Car</p>
                        <p><FontAwesomeIcon className='me-2 text-danger' icon={faArrowRight} />Latest</p>
                        <p><FontAwesomeIcon className='me-2 text-danger' icon={faArrowRight} />Uncategorised</p>
                    </div>
                    <div className='pb-5'>
                        <h4>Tags</h4>
                        <div className='mb-2'>
                            <Button className='me-2' variant="outline-secondary" id="button-addon2">
                                Automobile
                            </Button>
                            <Button variant="outline-secondary" id="button-addon2">
                                Car dealership
                            </Button>
                        </div>
                        <Button className='me-2' variant="outline-secondary" id="button-addon2">
                            new cars
                        </Button>
                        <Button variant="outline-secondary" id="button-addon2">
                            used cars
                        </Button>
                    </div>
                    <h4>Featured Posts</h4>
                    <div className='pb-5'>
                        <Card style={{ width: '18rem', cursor: 'pointer' }} className='shadow'>
                            <Card.Img variant="top" src="https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2018/10/blog_img_01-1.jpg" />
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
                    <div className='pb-5'>
                        <Card style={{ width: '18rem', cursor: 'pointer' }} className='shadow'>
                            <Card.Img variant="top" src="https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2018/10/blog_img_02-1.jpg" />
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
        <Footer></Footer>
    </>    
    );
};

export default Blog;