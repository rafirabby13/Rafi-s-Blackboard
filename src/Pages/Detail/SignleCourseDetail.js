import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./SingleCourseDetail.css";

const SignleCourseDetail = ({ data }) => {
  // console.log("data from single course", data);
  const { id, name, image, detail } = data;

  return (

    
    <div className="container detail-card">
      
        <Card className="card">
          <Card.Img className="img" variant="top" src={image} style={{height: "200px"}}/>
          <Card.Body>
            <Card.Title><h1>{name}</h1></Card.Title>
            <Card.Text className="text-detail">
              {detail.length > 250 ? (
                <p>{detail.slice(0, 100) + "..."}</p>
              ) : (
                <p>{detail}</p>
              )}
            </Card.Text>
            <Button variant="warning">See Detail</Button>
          </Card.Body>
        </Card>
      
    </div>
  );
};

export default SignleCourseDetail;
