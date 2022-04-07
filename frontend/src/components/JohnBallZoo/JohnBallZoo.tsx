import React, { FC } from 'react';
import EsriMap from '../EsriMap/EsriMap';
import NavBar from '../Navbar/Navbar';
import styles from './JohnBallZoo.module.css';

interface JohnBallZooProps { }

const JohnBallZoo: FC<JohnBallZooProps> = () => (
  <>
    <div className={styles.JohnBallZoo}>
    </div>
      <NavBar />
      <EsriMap />
  </>
);

export default JohnBallZoo;
