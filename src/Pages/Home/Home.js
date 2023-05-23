import React from "react";
import { Carousel } from "react-bootstrap";
import bnr1 from "../../assets/bnr1.jpg";
import bnr2 from "../../assets/bnr2.jpg";
import bnr5 from "../../assets/bnr5.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 img" src={bnr5} alt="First slide" />
          <Carousel.Caption className="carousel-description">
            <h3>Welcome to <br /> <span className="name">Rafi's BlackBoard</span></h3>
            {/* <p>Want to see Our Services</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 img" src={bnr1} alt="Second slide" />

          <Carousel.Caption className="carousel-description">
            <h3>Welcome to <br /> <span className="name">Rafi's BlackBoard</span></h3>
            {/* <p>Want to see Our Services</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 img" src={bnr2} alt="Third slide" />

          <Carousel.Caption className="carousel-description">
            <h3>Welcome to <br /> <span className="name">Rafi's BlackBoard</span></h3>
           
            {/* <p>Want to see Our Services</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
