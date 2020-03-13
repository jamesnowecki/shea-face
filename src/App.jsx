import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import FaceCard from "./components/FaceCard";
import PortraitContainer from "./containers/PortraitContainer";

const App = () => {



  return (
    <div className={styles.app}>
        <div>
          <PortraitContainer  />
        </div>
    </div>
  );
}

export default App;
