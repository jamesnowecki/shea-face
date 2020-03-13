import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import FaceCard from "./components/FaceCard";

const App = () => {
  return (
    <div className={styles.app}>
        <div>
          <FaceCard yourAngle={22} />
        </div>
    </div>
  );
}

export default App;
