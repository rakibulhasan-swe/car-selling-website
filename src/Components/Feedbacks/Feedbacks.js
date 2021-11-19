import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";

SwiperCore.use([Autoplay]);

const Feedbacks = () => {
  const backendUrl = "https://creative-agency-main.glitch.me";
  const [review, setreview] = useState([]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    fetchReview();
  }, []);

  function fetchReview() {
    fetch(`${backendUrl}/review`)
      .then((response) => response.json())
      .then((data) => {
        setreview(data);
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <Container fluid className="my-5">
        <h3 className="text-center mb-5">Customer Review</h3>
        <Swiper
          slidesPerView={width <= 767 ? 1 : width > 767 && width < 1279 ? 2 : 3}
          spaceBetween={40}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="lg:p-8"
        >
          {review.map((feedback, index) => (
            <SwiperSlide key={feedback._id}>
              <Card className="px-5">
                <Card.Header as="h5">Feedback</Card.Header>
                <Card.Body>
                  <Card.Title>{feedback.customerName}</Card.Title>
                  <Card.Text>{feedback.title}</Card.Text>
                  <Rating
                    initialRating={1 + index}
                    readonly
                    fullSymbol={<FontAwesomeIcon icon={fasStar} />}
                    emptySymbol={<FontAwesomeIcon icon={farStar} />}
                  />
                </Card.Body>
                <footer className="blockquote-footer">{feedback.email}</footer>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default Feedbacks;
