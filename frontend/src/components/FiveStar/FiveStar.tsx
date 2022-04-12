import { Box, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import React, { FC, useState, useEffect } from 'react';
import { FiStar } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import styles from './FiveStar.module.css';

interface FiveStarProps { }

async function something() {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify('hi')
  };
  // fetch('nitrate-cancer/run', requestOptions)
  //   .then(response => response.json())
  //   .then(data => this.setState({ postId: data.id }));
  const res = await fetch('/nitrate-cancer/run', requestOptions);

}
const FiveStar: FC<FiveStarProps> = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
  }, []);

  return (
    <div className={styles.FiveStar}>
      <Stack>
        <HStack>
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <Box
                key={index}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <Icon
                  as={AiFillStar}
                  color={index <= (hover || rating) ? "yellow.400" : "grey"}
                  w={8} h={8}
                />
              </Box>
            );
          })}
        </HStack>
        <Box>
          <HStack>
            <Text>
              Current rating 3.5/10
            </Text>
            <Icon as={AiFillStar} w={5} h={5} color='yellow.400' />
          </HStack>
        </Box>
      </Stack>
    </div>
  )
};

export default FiveStar;
