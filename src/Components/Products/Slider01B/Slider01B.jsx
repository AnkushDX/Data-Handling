import React from 'react'
import Style from "../Slider01B/Slider01B.module.css"

const Slider01B = () => {
  return (
    <>
        <div className={Style.slider01B}>
        <p className={Style.stardiv}>BLUEREX VISION 60 SOFTGELS 30 SERVINGS</p>
        <div className={Style.reviewDiv}>
          <img className={Style.starImg} src="Images/starImg1.webp"/><img className={Style.starImg} src="Images/starImg1.webp"/><img className={Style.starImg} src="Images/starImg1.webp"/><img className={Style.starImg} src="Images/starImg1.webp"/><img className={Style.starImg} src="Images/starImg1.webp"/><span className={Style.review}>7 Reviews</span>
        </div>
        <div className={Style.textarea}>
          <p>Bluerex Vision contains clinically proven ingredients to help protect your eyes from harmful blue light and alleviate Computer Vision Syndrome symptoms. The unique two-step process in our vision supplement helps reduce eye strain, improves focus recovery, and increases natural tear production for dry, itchy eyes. Next, Bluerex Vision builds natural pigments that help protect your eyes from blue light before it can damage the retina/macula.</p>
        </div>
        </div>  
    </>
  )
}

export default Slider01B
