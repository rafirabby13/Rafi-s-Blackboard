import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./SingleCourseDetail.css";
import { FaDownload, IconName } from "react-icons/fa";
import GetPremiumAccess from "../GetPremiumAccess/GetPremiumAccess.js";
import { Link } from "react-router-dom";

const SignleCourseDetail = ({ data }) => {
  // console.log("data from single course", data);
  const { id, name, image, detail } = data;

  const handleDownload=()=>{
    fetch('../../../public/lecture.pdf')
    .then(response=>{
      response.blob().then(blob=>{
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download='../../../public/lecture.pdf';
        alink.click();
      })
    })
  }

  return (

    
    <div className="container detail-card">
        <Card className="card">
      <FaDownload onClick={handleDownload} title="Download PDF" className="pdf-icon"></FaDownload>
          <Card.Img className="img" variant="top" src={image} style={{height: "200px"}}/>
          <Card.Body>
            <Card.Title> <h1>{name}</h1></Card.Title>
            <Card.Text className="text-detail">
              {detail.length > 250 ? (
                <p>{detail.slice(0, 100) + "..."}</p>
              ) : (
                <p>{detail}</p>
              )}
            </Card.Text>
            <Button variant="warning"><Link to={`/courseDetail/${id}`}>See Detail</Link></Button>
            
          </Card.Body>
        </Card>
      
    </div>
  );
};

export default SignleCourseDetail;
