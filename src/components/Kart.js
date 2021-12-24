import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { total } from "../action/Index";
import "./am.css";

import Am from "./Am";

const Kart = () => {
  const { item, totalAmount, totalItem } = useSelector(
    (state) => state.ChangeColor
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(total());
  }, [item]);

  return (
    <div className="kart">
      {item.map((event) => {
        return <Am key={event.id} {...event} />;
      })}

      <h3> item: {totalItem} </h3>
      <h3> total: {totalAmount}</h3>
      <Link style={{ textDecoration: "none" }} to="/Check">
        <Button className="meu" variant="contained">
          CheckOut
        </Button>
      </Link>
    </div>
  );
};

export default Kart;
