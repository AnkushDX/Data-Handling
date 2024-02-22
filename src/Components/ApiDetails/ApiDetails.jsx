import React from "react";
import Style from "../ApiDetails/ApiDetails.module.css";
import { useLocation,useNavigate } from "react-router-dom";

const ApiDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId, title, body } = location.state;

  const userNames = {
    1: "Ankush",
    2: "Panwar",
    3: "Rahul",
    4: "Pankaj",
    5: "Suraj",
  };
  const userName = userNames[userId] || "Unknown";
  const hanleBack=()=>{
    navigate("/")
  }

  return (
    <div>
      <div className={`container ${Style.main}`}>
        <div className={`card ${Style.titleCard}`}>
          <h3 className={Style.head}>Title Details</h3>
          <h6 className={Style.username}>{userName}</h6>
          <hr/>
          <strong className={Style.titleHead}>Title:-</strong>
         
          <p className={Style.titleText}>{title}</p>
          <hr/>
          <strong className={Style.titleHead}>Body:-</strong>
         
          <p className={Style.titleText}>{body}</p>
          <div className={Style.backBtn}>
          <button type="button" className="btn btn-success" onClick={hanleBack}>Back</button>
          </div>
         
        </div>
        
      </div>
    </div>
  );
};

export default ApiDetails;
