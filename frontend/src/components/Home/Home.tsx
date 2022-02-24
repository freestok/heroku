import React, { FC, useState, useEffect } from 'react';
import styles from './Home.module.css';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className={styles.Home}>
      Home Component
      <p>The current time is {currentTime}.</p>

    </div>
  )};

export default Home;
