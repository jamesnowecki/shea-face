import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import PortraitContainer from "./containers/PortraitContainer";

const App = () => {

  // let apiRandomNum;

  // const 

  // fetch('https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8')
  //   .then((randomNumber) => {return randomNumber.json()
  //     .then(() => defineRandomNumber())

  // })

  const numberOfSheaFaces = 12;

  let sheaFaceArray = [];

  const sheaFaceCard = <div><PortraitContainer /></div>;

  const printTheGallery = (numOfSheaFaces) => {

      for(let i = 0; i < numOfSheaFaces; i++){
        sheaFaceArray.push(sheaFaceCard);
      };
  };

  printTheGallery(numberOfSheaFaces);

  return (
    <div className={styles.app}>
        {sheaFaceArray}
    </div>
  );
}

export default App;
