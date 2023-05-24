import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import GetPremiumAccess from "../GetPremiumAccess/GetPremiumAccess.js";
import './SeeDetail.css'

const SeeDetail = () => {
  const data = useLoaderData();
  const { id, image, name, detail } = data;
  return (
    <div className=" see-detail ">
      <Card className="card mt-5 ">
        <FaDownload title="Download PDF" className="pdf-icon"></FaDownload>
        <Card.Img
          className="img"
          variant="top"
          src={image}
          style={{ height: "200px" }}
        />
        <Card.Body>
          <Card.Title>
            {" "}
            <h1>{name}</h1>
          </Card.Title>
          <Card.Text className="text-detail">{detail}</Card.Text>

          <GetPremiumAccess></GetPremiumAccess>
          <Button variant="outline-warning" className="courseList-link"><Link to={`/courseList/${id}`}>Back to Courses</Link></Button>
        </Card.Body>
        
      </Card>
    </div>
  );
};

export default SeeDetail;
