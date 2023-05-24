import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const GetPremiumAccess = () => {
  return (
    <div>
      <Button className="mt-2 btn btn-outline btn-primary">
        <Link className="courseList-link" to="/getPremiumDetail">
          Get Premium Access
        </Link>
      </Button>
    </div>
  );
};

export default GetPremiumAccess;
