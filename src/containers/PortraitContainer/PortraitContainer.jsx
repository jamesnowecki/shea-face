import React from "react";
import styles from "./PortraitContainer.module.scss";
import FaceCard from "../../components/FaceCard";

const PortraitContainer = () => {

  let chosenAngle = 0;

  const setChosenAngle = (input) => {
    chosenAngle = input;
  }

  return (
    <>
      <div className={styles.portraitContainer}>
        <div className={styles.portrait}>
          <FaceCard yourAngle={chosenAngle}/>
        </div>
        <input type="text" name="angle" placeholder="Shea's angle here" onChange={(event) => setChosenAngle(event.target.value)}></input>
      </div>
    </>
  );
};

export default PortraitContainer;
