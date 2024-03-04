import React, { useState } from "react";
import Style from "../Product/Slider01A.module.css";
import { IoIosArrowDown } from "react-icons/io";

const Slider01C = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
    <div className={Style.slider01C}>
    <div className={Style.accordion} id="accordionExample">
        <div className={`accordion-item ${Style.accordianItem}`}>
          <h2 className="accordion-header">
            <span
              className={` collapsed ${Style.accordionButton}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <div className="form-check">
                <input
                  className={`form-check-input ${Style.radioIcon}`}
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className={`form-check-label ${Style.radio1}`}
                  htmlFor="flexRadioDefault1"
                >
                  ONE-TIME PURCHASE <br />{" "}
                  <p className={Style.price}>
                    <sup className={Style.doloor}>$</sup>
                    <span className={Style.money}>54</span>
                    <sup className={Style.degree}>98</sup>
                  </p>
                </label>
              </div>
            </span>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className={Style.stocDiv}>
                <h5 className={Style.stock}>In Stock.</h5>
                <div className={Style.customSelect}>
                  <select className={Style.selectDiv}>
                    <option value="1" className={Style.qty}>
                      QTY: 1{" "}
                    </option>{" "}
                    <span style={{ color: "black" }}>
                      {" "}
                      1 Bluerex Vision 60 softgels
                    </span>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              <div>
                <button className={Style.cartBtn}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div  className={`accordion-item ${Style.accordianItem}`}>
          <h2 className="accordion-header">
            <span
              className={Style.accordionButton2}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
            
              <input
                className={`form-check-input ${Style.radioIcon2}`}
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label
                className={`form-check-label ${Style.radio1}`}
                htmlFor="flexRadioDefault2"
              >
                SUBSCRIBE & SAVE 20% <br />{" "}
                <p className={Style.price}>
                  <sup className={Style.doloor}>$</sup>
                  <span className={Style.money}>43</span>
                  <sup className={Style.degree}>98</sup>
                  <span className={Style.offer}>$54.98</span>
                </p>
              </label>
            </span>
          </h2>
          <div className={Style.ooferBtn}>
            <button className={Style.offer2}>Save $11.00</button>{" "}
            <span>with Subscription</span>
          </div>

          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className={Style.Ptext}>
                Don't miss this opportunity to save 20% on this order and all
                future subscribe and save orders. No Fees Cancel anytime
              </p>
              <ul className={Style.liText}>
                <li>No Fees</li>
                <li>Cancel anytime</li>
              </ul>
              <div className={Style.accordion2}>
                <div className={Style.header} onClick={toggleAccordion}>
                  Learn more{" "}
                  <span
                    className={Style.icon}
                   
                  >
                    <IoIosArrowDown />
                  </span>
                </div>
                {isOpen && (
                  <div className={Style.content}>
                    <span>
                      There is no commitment and no minimum to buy. Please note
                      exact shipment times may vary. To customize future
                      shipments and changes, access your account in the Bruno MD
                      portal, or email customer care department at
                      customercare@brunopharma.com.
                    </span>
                    <p className={`text-center ${Style.subsContent}`}>HOW SUBSCRIBE & SAVE WORKS</p>
                    <img
                      className={Style.infoBtn}
                      src="Images/infoBtn.svg"
                      onClick={toggleInfo}
                    />
                    {showInfo && (
                      <ul className={Style.liContent}>
                        30 days after your first order is shipped, and then
                        approximately every 30 days thereafter, you will be sent
                        a new order of Bluerex. Each shipment will be charged to
                        the payment method you provide today in one payment at
                        the low price of $43.98 plus shipping and handling,
                        unless you cancel via the Bruno MD portal, or by
                        contacting customer care department.
                      </ul>
                    )}
                  </div>
                )}
              </div>
              <div className={Style.stocDiv2}>
                <h5 className={Style.stock}>In Stock.</h5>
                <div className={Style.customSelect}>
                  <select className={Style.selectDiv}>
                    <option value="1" className={Style.qty}>
                      QTY: 1{" "}
                    </option>{" "}
                    <span style={{ color: "black" }}>
                      {" "}
                      1 Bluerex Vision 60 softgels
                    </span>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              <div className="mt-2">
                <strong className={Style.delivery}>Delivery every:</strong>
              </div>
              <div className={Style.customSelect}>
                <select className={Style.selectDiv}>
                  <option value="1" className={Style.qty}>
                    30 Days{" "}
                  </option>{" "}
                  <span style={{ color: "black" }}>
                    {" "}
                    1 Bluerex Vision 60 softgels
                  </span>
                  <option value="Day 1">1</option>
                  <option value="Day 2">2</option>
                  <option value="Day 3">3</option>
                </select>
              </div>
              <div>
                <button className={Style.subBtn}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Slider01C;
