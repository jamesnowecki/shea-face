import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import PortraitContainer from "./containers/PortraitContainer";
import { useState } from 'react';

const App = () => {

  const [numberOfSheaFaces, updateFaceNum] = useState(0);

  const getTheRandomNum = () => {
  fetch('https://qrng.anu.edu.au/API/jsonI.php?length=10&type=uint8')
        .then(result => result.json())
        .then(result => {
            let randomNum = result.data[0];
            console.log(randomNum);
            console.log(numberOfSheaFaces);
            updateFaceNum(randomNum);
            console.log(numberOfSheaFaces);
        })
        .catch(error => {
            console.log(error)
        });
      }

      const defineSheasFace = (number) => {
        getTheRandomNum();
        printTheGallery(number)
      }

  let sheaFaceArray = [];

  const sheaFaceCard = <div><PortraitContainer /></div>;

  const printTheGallery = (numOfSheaFaces) => {

      for(let i = 0; i < numOfSheaFaces; i++){
        sheaFaceArray.push(sheaFaceCard);
      };
  };

  // printTheGallery(numberOfSheaFaces);

  return (
    <>
    <button onClick={() => (defineSheasFace(numberOfSheaFaces))}>Print SheaFaces!</button>
    <div className={styles.app}>
        {sheaFaceArray}
    </div>
    </>
  );
}

export default App;
