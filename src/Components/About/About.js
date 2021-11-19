import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const About = () => {
    return (
        <>
        <Navigation></Navigation>
        <Container fluid className='py-5'>
            <Container className='pb-5 pt-4'>
                <Row>
                    <Col>
                        <h4 className='fs-1 fw-bold mb-4'>Our Reputation Speaks <br />
                            <span className='text-danger'> for Itself</span>
                            <hr className='w-25 text-danger' />
                        </h4>
                        <p>CaLeader has been raising the standard of used car retailing with one of the most innovative and reliable used vehicle programmes ever created. A comprehensive range of benefits as standard has evolved over time and, today, drivers can leave the forecourt with total reassurance and peace of mind.</p>
                        <p className='mb-4'>For used vehicles, we calculate a fair retail price based on a detailed analysis of comparable current and previous car listings in a given market.</p>
                        <p><FontAwesomeIcon className='text-danger me-3' icon={faArrowRight} />Guaranteed lien-free vehicles</p>
                        <p><FontAwesomeIcon className='text-danger me-3' icon={faArrowRight} />Contribute to a compensation fund for your protection</p>
                        <p><FontAwesomeIcon className='text-danger me-3' icon={faArrowRight} />30-day dealer warranty</p>
                        <p><FontAwesomeIcon className='text-danger me-3' icon={faArrowRight} />All vehicles serviced</p>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <img className='img-fluid' src='https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2019/09/img-parallax03-img01.jpg' alt='People'></img>
                    </Col>
                </Row>
            </Container>
            {/* another section  */}
            <Container className='py-5'>
                <h4 className='fw-bold fs-2 text-center py-4'>Reasons to Buy From <span className='text-danger'>CarLeader</span></h4>
                <Row className='pt-5'>
                    <Col>
                        <div className='mb-5'>
                            <h4 className='fs-5 fw-bold'>Certified vehicles that look like new</h4>
                            <p className='fs-6'>Each vehicle is detailed and washed to guarantee that you feel like the first owner.</p>
                        </div>
                        <div>
                            <h4 className='fs-5 fw-bold'>Free Autocheck Vehicle History Report</h4>
                            <p className='fs-6'>We fully disclose the histories of our vehicles, including accident history, service records, number of prior owners.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='mb-5'>
                            <h4 className='fs-5 fw-bold'>We Start With Our Best Price</h4>
                            <p className='fs-6'>Our internet price is posted at or below market level, and we post a NADA price on windows so you can compare.</p>
                        </div>
                        <div>
                            <h4 className='fs-5 fw-bold'>3-Month or 3,000 Miles Limited Warranty</h4>
                            <p className='fs-6'>Every Certified vehicle comes with a 3 month / 3,000 mile Limited Warranty included in the purchase price.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* mission and vision */}
            <Container className='py-5'>
                <h4 className='fw-bold fs-2 text-center pt-4 pb-5'><span className='text-danger'>Experience</span> the Difference</h4>
                <Row>
                    <Col>
                        <div className='mb-4'>
                            <h5 className='fw-bold mb-3'>Mission</h5>
                            <p className='fs-6'>Our Mission is to simply be the best in every area of our business. We will accomplish this by providing the most exceptional customer experience, being the best place to work, and strongly supporting our community.</p>
                        </div>
                        <div>
                            <h5 className='fw-bold mb-3'>Vision</h5>
                            <p className='fs-6'>CaLeader will be the number one DMS supplier in terms of market share, or market share growth, in every market in which we choose to compete. The success of our customers will be the ultimate measure of the uncompromising quest for excellence by all our people.</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                    <img className='img-fluid' src='https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2019/09/tabs-img-01.jpg' alt='Car'></img>
                    </Col>
                </Row>
            </Container>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default About;