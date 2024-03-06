import React, { useEffect, useState, useRef } from "react";
import Style from "../Slider01A/Slider01A.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider01B from "../Slider01B/Slider01B";
import Slider01C from "../Slider01C/Slider01C";

const Slider01A = () => {
  const carouselRef = useRef(null);
  const [mainImg, setMainImg] = useState("Images/bruno1.webp");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const savedImg = localStorage.getItem("mainImg");
    if (savedImg) {
      setMainImg(savedImg);
    }

    return () => {
      localStorage.removeItem("mainImg");
    };
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", clearLocalStorage);
    return () => {
      window.removeEventListener("beforeunload", clearLocalStorage);
    };
  }, []);

  const clearLocalStorage = () => {
    localStorage.removeItem("mainImg");
  };

  const handleImgClick = (imageSrc, index) => {
    setMainImg(imageSrc);
    localStorage.setItem("mainImg", imageSrc);
    setActiveIndex(index);
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1023 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3,
    },
  };
  const goToPrevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const goToNextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-lg-4 ">
          <p className={Style.stardiv}>
            BLUEREX VISION 60 SOFTGELS 30 SERVINGS
          </p>
          <div className={Style.slider01A}>
            <img className={Style.mainImg1} src={mainImg} />
            <div className={Style.arrowButtons}>
              <button className={Style.leftbtn} onClick={goToPrevSlide}>
                <FaChevronLeft />
              </button>
              <button className={Style.Rightbtn} onClick={goToNextSlide}>
                <FaChevronRight />
              </button>
            </div>
            <Carousel
              ref={carouselRef}
              responsive={responsive}
              infinite={true}
              arrows={false}
              autoPlay={true}
              customTransition="transform 500ms ease-in-out"
              afterChange={(previousSlide, { currentSlide }) =>
                setActiveIndex(currentSlide)
              }
            >
              {Array.from(Array(9).keys()).map((index) => (
                <div
                  key={index}
                  onClick={() =>
                    handleImgClick(`Images/bruno${index + 1}.webp`, index)
                  }
                  className={index === activeIndex ? Style.activeSlide : ""}
                >
                  <img
                    className={Style.slideImg}
                    src={`Images/bruno${index + 1}.webp`}
                    alt=""
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="col-lg-4">
          <Slider01B />
        </div>
        <div className="col-lg-4">
          <Slider01C />
        </div>
      </div>
    </div>
  );
};

export default Slider01A;
