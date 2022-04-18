import { Box, HStack, Icon, keyframes, Stack, Text, Fade } from '@chakra-ui/react';
import React, { FC, useState, useEffect } from 'react';
import { AiFillCheckCircle, AiFillStar } from 'react-icons/ai';
// import FiveStarModal from '../FiveStarModal/FiveStarModal';
import FiveStarModal from '../FiveStarModal/FiveStarModal';
import styles from './FiveStar.module.css';

interface FiveStarProps {
  animalName: string;
}

async function createRating(rating: number, name: string) {
  console.log('createRating start!', rating);

  const body = {
    name: name,
    rating: rating
  }
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };
  // fetch('nitrate-cancer/run', requestOptions)
  //   .then(response => response.json())
  //   .then(data => this.setState({ postId: data.id }));
  const res = await fetch('/john-ball-zoo/set-rating', requestOptions);
  console.log('res', res);
  return res;
}

async function getRating(name: string) {
  const url = `/john-ball-zoo/get-rating?name=${name}`;
  const res = await fetch(url);
  const json = await res.json();
  return json
}

const FiveStar: FC<FiveStarProps> = ({ animalName }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [rated, setRated] = useState(-1);
  const [totalRatings, setTotalRatings] = useState(-1);
  const [showMessage, setShowMessge] = useState(false);
  const [currentAvg, setCurrentAvg] = useState(-1);
  const [allRatings, setAllRatings] = useState(null as any);
  useEffect(() => {
    console.log('useEffect!!')
    getRating(animalName).then(ratings => {
      console.log('ratings', ratings);
      setAllRatings(ratings.all_ratings);
      console.log('***setAllRatings', allRatings)
      if (ratings.avg && ratings.total) {
        setCurrentAvg(ratings.avg);
        setTotalRatings(ratings.total);
      }
    });
  }, [rated]);

  return (
    <div className={styles.FiveStar}>
      <Stack>
        <HStack>
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <Box
                key={index} // don't do anything if it's been rated already
                onMouseEnter={() => rated === -1 ? setHover(index) : null}
                onMouseLeave={() => rated === -1 ? setRating(rating) : null}
              >
                <Icon
                  as={AiFillStar}
                  color={index <= (hover || rating) ? "yellow.400" : "grey"}
                  w={8} h={8}
                  onClick={async () => {
                    setShowMessge(true);
                    await createRating(index, animalName)
                    setRated(index);
                    setRating(index);
                  }}
                  style={{ cursor: 'pointer' }}
                />
              </Box>
            );
          })}
        </HStack>
        {/* {showMessage && */}
        <Fade in={showMessage}>
          <Box>
            <HStack>
              <Text color='green.500'>
                Thanks for rating!
              </Text>
              <Icon
                color='green.400'
                w={5}
                h={5}
                as={AiFillCheckCircle} />
            </HStack>
          </Box>
        </Fade>
        {/* } */}
        {currentAvg !== -1 &&
          <Box>
            <Stack>
              <HStack>
                <Text>
                  Average Rating: {currentAvg.toFixed(1)}/5
                </Text>
                <Icon as={AiFillStar} w={5} h={5} color='yellow.400' />
              </HStack>
              {allRatings && <FiveStarModal totalRatings={totalRatings} ratings={allRatings} />}
            </Stack>
          </Box>
        }
      </Stack>
    </div>
  )
};

export default FiveStar;
