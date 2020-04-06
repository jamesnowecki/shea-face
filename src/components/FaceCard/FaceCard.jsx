import React from "react";
import styles from "./FaceCard.module.scss";
import Shea from "../../assets/shea.png";
import Left from "../../assets/left.png";
import Right from "../../assets/right.png";
import { useState } from "react";

const FaceCard = props => {
  const { yourAngle } = props;

  const [eyeAngle, updateAngle] = useState(0);

  const rotatedEyes = {
    transform: `rotate(${eyeAngle}deg)`,
  };

  return (
    <div className={styles.sheaCard} onClick={() => updateAngle(yourAngle)}>
      <img src={Shea} alt="Shea's face" />
      <div className={styles.eyes}>
        <div className={styles.rightEye} style={rotatedEyes}>
          <img src={Right} alt="Right eye" />
        </div>
        <div className={styles.leftEye} style={rotatedEyes}>
          <img src={Left} alt="Left eye" />
        </div>
      </div>
    </div>
  );
};

export default FaceCard;
