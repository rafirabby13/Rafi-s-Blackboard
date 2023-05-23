import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import "./CourseList.css";
import ListGroup from "react-bootstrap/ListGroup";
import CourseDetail from "../CourseDetail/CourseDetail.js";

const CourseList = () => {
  const courseList = useLoaderData();

  return (
    <Container className="container-courseList">
      <Row className="">
        <Col lg="2" >
         
          <ListGroup className="list-group">
            {courseList.map((courseList) => (
              <ListGroup.Item className="courseList-sidebar">
                <Link className="courseList-link" to={`/courseList/${courseList.id}`}>
                  {courseList.name}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        <Col lg="10">
          <Outlet></Outlet>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseList;
