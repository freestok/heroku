import React, { FC, useState } from 'react';
import styles from './ScrollyMap.module.css';
import { Scrollama, Step } from 'react-scrollama';
import { Flex, Spacer, Button, Center, Icon, Box, Image, Text, Stack, HStack, Link, Heading, Divider } from '@chakra-ui/react';
import { FiXCircle } from 'react-icons/fi';

function iframe(file: String) {
  return {
    __html: `<iframe src="${file}" width="600" height="600"></iframe>`
  }
}

interface ScrollyMapProps { }
const cardWidth = { sm: '20em', md: '10em', lg: '15em' }

const StatCard: FC<any> = ({ chartUrl, mapUrl, text, chartHtml }) => (
  <Center py={1}>
    <Box
      w={'full'}
      mx={20}
      my={5}
      // maxW={cardWidth}
      // minW={'100%'}
      bg={'whtie'}
      boxShadow={'xl'}
      rounded={'md'}
      p={3}
      overflow={'hidden'}>
      <Stack>
        <Center>
          <Heading mt={5}
            fontWeight={600}
            fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
            lineHeight={'110%'}>
            As tree canopy
            <Text as='span' mx={2}
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              letterSpacing={1.1}>
              increased
            </Text>
            {text}
            <Text as='span' mx={2}
              color={'red.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              letterSpacing={1.1}>
              decreased
            </Text>
          </Heading>
        </Center>
        <Center>
          <HStack >
            {/* <Image
              // boxSize='200px' 
              src={chartUrl} /> */}
            <Box 
              overflow={'hidden'}
              // maxHeight={50}
            >
              <div dangerouslySetInnerHTML={iframe(chartHtml)}></div>
            </Box>
            {/* <Spacer /> */}
            <Image
              boxSize='400px'
              src={mapUrl}
              _hover={{
                boxShadow: "lg",
              }}
              onClick={() => window.open(mapUrl, '_blank')} />
          </HStack>
        </Center>
      </Stack>
    </Box>
  </Center>
)

const ScrollyMap: FC<ScrollyMapProps> = () => {
  return (
    <div className={styles.ScrollyMap}>
      <Box
        // h={{ base: 'xl', sm: '2xl', md: 'lg', lg: 'lg', xl: 'lg' }}
        // bg={'gray.100'}
        // mt={-6}
        // mx={-6}
        mb={0}
        pos={'relative'}>
        <Flex w={'full'}
          h={'100vh'}
          // h='full'
          backgroundImage={
            `url(https://i.imgur.com/rloZNJn.png)`
          }
          backgroundSize={'cover'}
          backgroundPosition={'center center'}>
        </Flex>
      </Box>
      <Center mt={5} py={1}>
        <Heading mt={5}
          fontWeight={600}
          fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
          lineHeight={'110%'}>
          <Text as='span'>On the <Link color='blue.200' href='https://www.treeequityscore.org/about/'>about page of the Tree Equity Score</Link> by <Link color='blue.200' href='https://www.americanforests.org/'>American Forests</Link>,
            they claim that trees provide health benefits and increase wellbeing. How does this stack up in Baltimore?</Text>
          <Text mt={3}>
            To explore this claim, we will look at correlations through regression plots and bivariate maps.
          </Text>
        </Heading>
      </Center>
      <Divider my={5} />

      {/* all OG images here https://imgur.com/a/zVxfJOu */}
      <StatCard chartUrl='https://i.imgur.com/5BWvG7b.png' mapUrl='https://i.imgur.com/Vkujw7t.png' text='asthma rates' chartHtml='./asthma.html' />
      <StatCard chartUrl='https://i.imgur.com/KjcvF56.png' mapUrl='https://i.imgur.com/tXtFOJk.png' text='temperatures' chartHtml='./temperature.html' />
      <StatCard chartUrl='https://i.imgur.com/KwXOl9z.png' mapUrl='https://i.imgur.com/XaWjEng.png' text='physical health challenges' chartHtml='./phys_health.html' />
      <StatCard chartUrl='https://i.imgur.com/s5PXSld.png' mapUrl='https://i.imgur.com/8ImEjBk.png' text='mental health challenges' chartHtml='./ment_health.html' />
    </div>
  )
};

export default ScrollyMap;
