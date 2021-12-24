import React from "react";
import "./check.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Check = () => {
  return (
    <>
      <div className="chechout">
        <div className="chek">
          <h3>Thank for your order </h3>
          <button>
            <Link to="/App" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="success">
                Order
              </Button>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Check;
