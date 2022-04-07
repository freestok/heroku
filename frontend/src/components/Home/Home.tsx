import React, { FC, useState, useEffect } from 'react';
import { SmallCardContainer } from '../CardWithImage/CardWithImage';
import styles from './Home.module.css';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [currentTime, setCurrentTime] = useState(0);

  // useEffect(() => {
  //   fetch('api/time').then(res => res.json()).then(data => {
  //     setCurrentTime(data.time);
  //   });
  // }, []);
  const items = [{
    name: 'Lemur', key: 0, img: 'https://images.newscientist.com/wp-content/uploads/2020/07/09113311/08-july_lemurs.jpg?crop=4:3,smart&width=1200&height=900&upscale=true'
  }, {
    name: 'Panda', key: 1, img: 'https://static.scientificamerican.com/sciam/cache/file/ACF0A7DC-14E3-4263-93F438F6DA8CE98A_source.jpg'
  }, {
    name: 'Yark', key: 2, img: 'https://www.askideas.com/media/15/Black-And-White-Cockapoo-Cute-Puppy.jpg'
  }]

  return (
    <div className={styles.Home}>
      <SmallCardContainer items={items} />
      {/* <SmallCard name='Lemur' />
      <SmallCard name='Panda' />
      <SmallCard name='Bear' />
      <SmallCard name='Yark' /> */}

    </div>
  )};

export default Home;
