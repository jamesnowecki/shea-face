import React from "react";
import styles from "./FaceCard.module.scss";
import Shea from "../../assets/shea.png";
import Left from "../../assets/left.png";
import Right from "../../assets/right.png";
import { useState } from "react";

const FaceCard = props => {
  const { yourAngle } = props;

  const [eyeAngle, updateAngle] = useState(yourAngle);

  const rotatedEyes = {
    transform: `rotate(${eyeAngle}deg)`,
  };


  return (

 

    <div className={styles.sheaCard}>
      <img src={Shea} alt="Shea's face" />
      <div className={styles.eyes}>
        <div className={styles.rightEye} style={rotatedEyes}>
          <img src={Right} alt="Right eye" />
        </div>
        <div className={styles.leftEye} style={rotatedEyes}>
          <img src={Left} alt="Left eye" />
        </div>
      </div>
      <input type="text" name="angle" placeholder="Your angle here"></input>
    </div>
  );
};

export default FaceCard;
