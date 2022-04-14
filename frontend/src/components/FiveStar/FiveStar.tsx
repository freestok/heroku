import { Box, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import React, { FC, useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
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
  const [currentAvg, setCurrentAvg] = useState(-1);
  useEffect(() => {
    console.log('useEffect!!')
    getRating(animalName).then(ratings => {
      console.log('ratings', ratings);
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
                  onClick={() => {
                    createRating(hover, animalName)
                    setRated(hover);
                  }}
                />
              </Box>
            );
          })}
        </HStack>
        <Box>
          <HStack>
            <Text>
              Total Ratings: {totalRatings}<br />
              Average: {currentAvg.toFixed(1)}/5
            </Text>
            <Icon as={AiFillStar} w={5} h={5} color='yellow.400' />
          </HStack>
        </Box>
      </Stack>
    </div>
  )
};

export default FiveStar;
