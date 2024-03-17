import React from 'react';
import { useNavigate } from 'react-router-dom';
import Style from "./Example.module.css";
import { VscStarFull } from "react-icons/vsc";
import { RiStarLine } from "react-icons/ri";

import data from "./Exapmle.json";

const Example = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    if (id === 3) {
      navigate('/products');
    } else if (id === 2) {
      navigate('/apiData');
    }else if(id ===4){
        navigate('/data-filter')
    }
     else {
        alert("This product is coming soon!");
    }
  };

  return (
    <section>
      <h1 className={Style.heading}>SHOP PRODUCTS</h1>
      <div className={Style.collection_Container}>
        <div className="container ">
          <div className="row">
            <div className={Style.cardContainer}>
              {data.map((product, index) => (
                <div key={index} className={`  ${Style.colactionCart}`}>
                  <div className={Style.imgWrapper}>
                    <img className={Style.img} src={product.image} alt="" />
                  </div>
                  <p className={Style.productText}>{product.title}</p>
                  <div style={{ height: "40px", display: "flex" }}>
                    <div className={Style.iconStar}>
                      {[...Array(5).keys()].map((i) => (
                        <span key={i}>
                          {i < product.rating ? (
                            <VscStarFull style={{ color: "#e6bf69" }} />
                          ) : (
                            <RiStarLine style={{ color: "#e6bf69" }} />
                          )}
                        </span>
                      ))}
                      <span className={Style.review}>{product.reviews}</span>
                    </div>
                  </div>
                  <button className={Style.buybtn} onClick={() => handleClick(product.id)}>{product.button}</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Example;
