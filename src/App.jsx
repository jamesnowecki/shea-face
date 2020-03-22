import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import PortraitContainer from "./containers/PortraitContainer";
import { useState, useEffect } from 'react';

const App = () => {

  const [numberOfSheaFaces, updateFaceNum] = useState(0);
  const [hallOfFaces, updateHallOfFaces] = useState([]);
  useEffect(() => {getTheRandomNum()}, []);


  const getTheRandomNum = () => {
  fetch('https://www.random.org/integers/?num=1&min=1&max=15&col=1&base=10&format=plain&rnd=new')
        .then(result => result.json())
        .then(result => {
            let randomNum = result;
            console.log(randomNum);
            updateFaceNum(randomNum);
            console.log(numberOfSheaFaces);
        })
        .catch(error => {
            console.log(error)
        });
      }

      const defineSheasFace = (num) => {
        console.log(num)
        printTheGallery(num)
      }


  const printTheGallery = (numOfSheaFaces) => {

    let sheaFaceArray = [];

    const sheaFaceCard = <div><PortraitContainer /></div>;
  

      for(let i = 0; i < numOfSheaFaces; i++){
        sheaFaceArray.push(sheaFaceCard);
      };

      updateHallOfFaces(sheaFaceArray);
  };

  // printTheGallery(numberOfSheaFaces);

  return (
    <>
    <button onClick={() => (printTheGallery(numberOfSheaFaces))}>Print SheaFaces!</button>
    <div className={styles.app}>
        {hallOfFaces}
    </div>
    </>
  );
}

export default App;
