import React from 'react'
import Style from "../Exapmle/Example.module.css"
import { VscStarFull } from "react-icons/vsc";
import data from "./Exapmle.json"

const Example = () => {
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
                                            <VscStarFull style={{ color: "#808080" }} />
                                        )}
                                    </span>
                                ))}
                                <span className={Style.review}>{product.reviews}</span>
                            </div>
                        </div>
                        <button className={Style.buybtn}>{product.button}</button>
                    </div>
                
                ))}
                </div>
              
               
            </div>
        </div>
    </div>
</section>
  )
}

export default Example
