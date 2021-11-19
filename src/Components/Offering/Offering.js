import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Offering = () => {
    return (
       <Container fluid className='py-5'>
           <Row>
               <Col sm={12} md={6} lg={6}>
               <img className='img-fluid' src='https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2019/09/layout01-03-mobile.jpg' alt='Car'></img>
               </Col>
               <Col>
               <h4 className='fs-2 fw-bold'>What We <span className='text-danger'>Offer</span></h4>
               <p className='pb-2 pt-1'><hr className='w-50' /></p>
               <div className='pb-3'>
                   <h5 className='fs-4 fw-bold'>Pre-Sale Preparation</h5>
                   <p>Get ready for pre-sale preparation. We are offering a lot of discount services this time.</p>
               </div>
               <div className='pb-3'>
                   <h5 className='fs-4 fw-bold'>Financing</h5>
                   <p>We're able to offer financing rates that many other car dealers can't offer.</p>
               </div>
               <div>
                   <h5 className='fs-4 fw-bold'>Trade-In Service</h5>
                   <p>Our service allows you to purchase a new car at an attractive price, while saving you all the trouble of handling your old car</p>
               </div>
               </Col>
           </Row>
       </Container>
    );
};

export default Offering;