import React from "react";
import styles from "./PortraitContainer.module.scss";
import FaceCard from "../../components/FaceCard";

const PortraitContainer = () => {

  

  return (
    <>
      <div className={styles.portraitContainer}>
        <div className={styles.portrait}>
          <FaceCard yourAngle={0}/>
        </div>
        <input type="text" name="angle" placeholder="Shea's angle here" onInput={() => setAngle()}></input>
      </div>
    </>
  );
};

export default PortraitContainer;
