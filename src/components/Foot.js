import React from "react";
import "./foot.css";

const Foot = () => {
  return (
    <>
      <div className="con">
        <div class="flex-container">
          <div class="flex-item-lef">
            <ul>
              <li className="amit">COMPANY</li>
              <li>Career</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Swigy Crop</li>
            </ul>
          </div>
          <div class="flex-item-right">
            {" "}
            <ul>
              <li className="amit">CONTACT</li>
              <li>help</li>
              <li>support</li>
              <li>partner</li>
            </ul>
          </div>
          <div class="flex-item-righq">
            {" "}
            <ul>
              <li className="amit">LEGAL</li>
              <li>Term condition </li>
              <li>Privacy Policy</li>
              <li>Offer</li>
            </ul>
          </div>
          <div class="flex-item-righr">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
              alt=""
              srcset=""
            />
          </div>
          <div class="flex-item-righs">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Foot;
