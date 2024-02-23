import React from "react";
import Style from "../ApiDetails/ApiDetails.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const ApiDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId, title, body } = location.state;

  // ..........Pdf Download Function Start.......
  const exportPdf = () => {
    const doc = new jsPDF();

    // Define card dimensions and position on the PDF
    const marginLeft = 20;
    const marginTop = 20;

    // Add card styling

    // Add Title
    doc.setFontSize(26);
    doc.setTextColor(150);
    doc.setFont("helvetica", "bold");
    doc.text("Title Details", marginLeft + 60, marginTop + 10);
    //horizantal line
    doc.setDrawColor(150);
    doc.line(0, 47, 230, 47);

    // Add Username
    doc.setFontSize(18);
    doc.setTextColor(130);
    doc.setFont("helvetica", "normal");
    doc.text(` ${userName}`, marginLeft + 70, marginTop + 20);
    //horizantal line
    doc.setDrawColor(150);
    doc.line(0, 75, 230, 75);


    // Add Title
    doc.setFontSize(16);
    doc.setTextColor(130);
    doc.setFont("helvetica", "bold");
    doc.text("Title:- ",  marginLeft + 10, marginTop + 39);

    //  Add Dyanmic Title
    doc.setFontSize(12);
    doc.setTextColor(130);
    doc.setFont("helvetica", "normal");
    doc.text(title,marginLeft +10,marginTop +45)
    

    // Add Body
    doc.setFontSize(16);
    doc.setTextColor(130);
    doc.setFont("helvetica", "bold");
    doc.text("Body:- ", marginLeft + 10, marginTop + 65);

     //  Add Dyanmic Body
    doc.setFontSize(12);
    doc.setTextColor(130);
    doc.setFont("helvetica", "normal");
    doc.text(body,marginLeft +10,marginTop +71,)

    // Save PDF
    doc.save("User-details.pdf");
  };

  const userNames = {
    1: "Ankush",
    2: "Panwar",
    3: "Rahul",
    4: "Pankaj",
    5: "Suraj",
  };
  const userName = userNames[userId] || "Unknown";

  const hanleBack = () => {
    if (location.state && location.state.currentPage) {
    }
    navigate("/", { state: { page: location.state.currentPage } });
  };

  return (
    <div  >
    <img src="./public/cardImage.jpg" alt=""/>
    
      
      <div className={Style.main}>
      <div className={Style.pdfkBtn}>
        <button type="button" className="btn btn-warning" onClick={exportPdf}>
          PDF
        </button>
      </div>
      {/* <img src=""/> */}
      {/* <img src="./public/cardImage.jpg" alt=""/> */}
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
