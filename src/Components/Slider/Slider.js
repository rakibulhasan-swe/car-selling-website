import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../images/slide-1.jpg'
import slide2 from '../../images/slide-2.jpg'
import slide3 from '../../images/slide-1.jpg'

const Slider = () => {
    return (
        <div className='pb-5'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ bottom: '40%' }}>
                        <h3 className='fs-1 fw-bold'>Accelarating the <span className='text-danger'>Future</span></h3>
                        <p>We offer over 9,000 new and used vehicles and if you need help finding anything we have a 24/7 team.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />
                    <Carousel.Caption style={{ bottom: '40%' }}>
                        <h3 className='fs-4 fw-bold'>We Don't sell Cars</h3>
                        <p className='fs-1 fw-bold'>WE SELL DREAMS</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />
                    <Carousel.Caption style={{ bottom: '40%' }}>
                        <h3 className='fs-1 fw-bold'>Accelarating the <span className='text-danger'>Future</span></h3>
                        <p>We offer over 9,000 new and used vehicles and if you need help finding anything we have a 24/7 team.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;