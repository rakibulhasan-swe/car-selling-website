import { faClock, faEnvelope, faLocationArrow, faMapMarkerAlt, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, FormControl, InputGroup, Row, Button, FloatingLabel, Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const Contact = () => {
    return (
        <>
            <Navigation></Navigation>
            <Container fluid className='py-5'>
                {/* <h4 className='pb-5 pt-3 fs-1 fw-bold text-center text-danger'>Contacts</h4> */}
                <Container>
                    <Row>
                        <Col sm={12} md={6} className='bg-light'>
                            <h4 className='fs-4 fw-bold mb-4'>Contact Info</h4>
                            <p className='mb-3'>CaLeader has a strong and committed sales staff with many years of experience satisfying our customers’ needs.</p>
                            <div className='d-flex'>
                                <div className='pe-3'>
                                    <h5><FontAwesomeIcon className='text-danger' icon={faMapMarkerAlt}></FontAwesomeIcon></h5>
                                </div>
                                <div>
                                    <p><span className='fw-bold'>Office Address:</span> <br />
                                        <small>3261 Anmoore Road Brooklyn, NY 11230</small>
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='pe-3'>
                                    <h5><FontAwesomeIcon className='text-danger' icon={faLocationArrow}></FontAwesomeIcon></h5>
                                </div>
                                <div>
                                    <p><span className='fw-bold'>Service Department Address:</span> <br />
                                        <small>3261 Anmoore Road Brooklyn, NY 11230</small>
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='pe-3'>
                                    <h5><FontAwesomeIcon className='text-danger' icon={faMobile}></FontAwesomeIcon></h5>
                                </div>
                                <div>
                                    <p><span className='fw-bold'>Call Center:</span> <br />
                                        <small>800-123-4567</small>
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='pe-3'>
                                    <h5><FontAwesomeIcon className='text-danger' icon={faEnvelope}></FontAwesomeIcon></h5>
                                </div>
                                <div>
                                    <p><span className='fw-bold'>E-mail:</span> <br />
                                        <small>info@carleader.com</small>
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='pe-3'>
                                    <h5><FontAwesomeIcon className='text-danger' icon={faClock}></FontAwesomeIcon></h5>
                                </div>
                                <div>
                                    <p><span className='fw-bold'>Operating Hours</span> <br />
                                        <div className='d-flex'>
                                            <div className='pe-4'>
                                                <small>
                                                    <span>Sales Department</span> <br />
                                                    <span>Mon-Sat: 8:00am - 5:00pm</span> <br />
                                                    <span>Sunday is closed</span>
                                                </small>
                                            </div>
                                            <div>
                                                <small>
                                                    <span>Sales Department</span> <br />
                                                    <span>Mon-Sat: 8:00am - 5:00pm</span> <br />
                                                    <span>Sunday is closed</span>
                                                </small>
                                            </div>
                                        </div>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <span><FontAwesomeIcon icon={faEnvelope} /></span>
                                <span><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span>
                                <span><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <h4 className='fs-1 fw-bold'>Get in touch</h4>
                            <hr className='w-25' />
                            <p>Feel free to browse our massive inventory online, set up a test drive with a sales associate, or inquire about financing!</p>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Your name"
                                    aria-label="Example text with button addon"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <div className='w-100 d-flex mb-3'>
                                <InputGroup className="me-4 w-50">
                                    <FormControl
                                        placeholder="E-mail"
                                        aria-label="Example text with button addon"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <InputGroup className="w-50">
                                    <FormControl
                                        placeholder="Phone"
                                        aria-label="Example text with button addon"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </div>
                            <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="Your meassage">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '200px' }}
                                />
                            </FloatingLabel>
                            <Button variant='outline-danger' className='px-3 py-2'>Send Message</Button>
                        </Col>
                    </Row>
                </Container>
            </Container >
            <Footer></Footer>
        </>
    );
};

export default Contact;