import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Button,
  HStack,
  Flex,
  Link,
  Container,
  Icon,
  Spacer,
  VStack
} from '@chakra-ui/react';

import {
  FiExternalLink,
  FiXCircle,
  FiStar
} from 'react-icons/fi';
import { FC, useState } from 'react';
import FiveStar from '../FiveStar/FiveStar';


const statusDomain: any = {
  EW: 'Extinct in the Wild',
  CR: 'Critically Endangered',
  EN: 'Endangered',
  VU: 'Vulnerable',
  NT: 'Near Threatened',
  CD: 'Conservation Dependent',
  LC: 'Least Concern',
  DD: 'Data Deficient',
  NE: 'Not Evaluated'
}
interface SmallCardProps {
  name: string,
  exhibitId: number,
  img: string,
  conservation: string,
  img_credit: string,
  scientificName: string,
  wiki: string
}

interface SmallCardContainerProps {
  items: SmallCardProps[];
}

const CardAccordion: FC<any> = ({ name, license_link, exhibitId, img, conservation, img_credit, scientificName, wiki }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Box>
      {isActive
        ? <CardWithImage
          name={name}
          exhibitId={exhibitId}
          img={img}
          conservation={conservation}
          img_credit={img_credit}
          scientificName={scientificName}
          wiki={wiki}
          setIsActive={setIsActive}
          license_link={license_link} />
        : <div style={{ cursor: 'pointer' }} onClick={() => setIsActive(true)}>
          <SmallCard name={name}
            exhibitId={exhibitId}
            img={img}
            conservation={conservation}
            img_credit={img_credit}
            scientificName={scientificName}
            wiki={wiki} />
        </div>
      }
    </Box>
  )
};

// type SmallCardContainerProps = SmallCardProps[];
// interface SmallCardContainerProps extends Array<SmallCardContainerProps>{};
const SmallCardContainer: FC<any> = ({ items }) => (
  <Center py={1}>
    <Box w='100%' rounded={'md'} py={3} my={2} mx={3}>
      <VStack>
        <Center>
          <Heading
            fontWeight={500}
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}>
            Animals
          </Heading>
        </Center>
        {items.map((item: any) => (
          <CardAccordion
            key={item.name}
            name={item.name}
            exhibitId={item.exhibitId}
            img={item.img}
            conservation={item.conservation}
            img_credit={item.img_credit}
            scientificName={item.scientificName}
            wiki={item.wiki}
            license_link={item.license_link} />
        ))}
      </VStack>
    </Box>
  </Center>
);
const SmallCard: FC<SmallCardProps> = ({ name, img }) => (
  <Center py={1}>
    <Box
      w={{ base: '30em', md: '10em', lg: '15em' }}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'lg'}
      rounded={'md'}
      p={3}
      overflow={'hidden'}
      _hover={{
        background: "blue.200",
      }}>
      <Stack>
        <HStack>
          <Avatar
            src={img}
          // alt={'Author'}
          />
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {name}
          </Text>
        </HStack>
      </Stack>
    </Box>
  </Center>
);

interface ConservationInterface {
  val: string;
  conservation: string;
  color: string;
  scale: {
    base: string;
    md: string;
    lg: string;
  };
}
const ConservationIndicator: FC<ConservationInterface> = ({ val, conservation, color, scale }) => (
  <Center
    w={{ base: scale.base, md: scale.md, lg: scale.lg }}
    h={{ base: scale.base, md: scale.md, lg: scale.lg }}
    borderRadius='50%'
    border='2px'
    fontSize={'sm'}
    bg={(conservation === val) ? color : 'white'}
    color={(conservation === val) ? 'white' : 'black'}
    borderColor='black'>
    {val}
  </Center>
);

const CardWithImage: FC<any> = ({ img, setIsActive, conservation, name, scientificName, wiki, img_credit, license_link }) => (
  <div className='cardWithImage'>
    <Center py={3}>
      <Box
        // w={'full'}
        w={{ base: '30em', md: '10em', lg: '15em' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'lg'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'150px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={0}
          pos={'relative'}>
          <Flex w={'full'}
            // h={'100vh'}
            h='full'
            backgroundImage={
              `url(${img})`
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <Spacer />
            <Button
              // rounded='2xl'
              borderRadius={'50%'}
              w={10}
              h={10}
              m={2}
              bg='whiteAlpha.300'
              onClick={() => setIsActive(false)}
            >
              <Center>
                <Icon
                  as={FiXCircle}
                  fontSize="24"
                />
              </Center>
            </Button>
          </Flex>
        </Box>
        <Stack>
          <Text fontSize='x-small' as='i' mb={3}>
            Image credit: <Link href={license_link} isExternal>{img_credit}</Link>
          </Text>

          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'lg'}
            letterSpacing={1.1}>
            {name}
          </Text>
          <Heading
            as='i'
            color={useColorModeValue('gray.600', 'white')}
            fontSize={'md'}
            fontWeight='normal'
            fontFamily={'body'}>
            {scientificName}
          </Heading>
          <Box id="conservation" bg='purple.100' p={3} mb={3} dropShadow={'lg'} rounded={'lg'}>

            <Center>
              <Text>
                Conservation Status
              </Text>
            </Center>
            <Center>
              <HStack>
                <ConservationIndicator
                  val='CR'
                  color='red.700'
                  conservation={conservation}
                  scale={{ base: '40px', md: '20px', lg: '30px' }}
                />
                <ConservationIndicator
                  val='EN'
                  color='red.500'
                  conservation={conservation}
                  scale={{ base: '40px', md: '20px', lg: '30px' }}
                />
                <ConservationIndicator
                  val='VU'
                  color='red.300'
                  conservation={conservation}
                  scale={{ base: '40px', md: '20px', lg: '30px' }}
                />
                <ConservationIndicator
                  val='NT'
                  color='yellow.400'
                  conservation={conservation}
                  scale={{ base: '40px', md: '20px', lg: '30px' }}
                />
                <ConservationIndicator
                  val='LC'
                  color='green.400'
                  conservation={conservation}
                  scale={{ base: '40px', md: '20px', lg: '30px' }}
                />
              </HStack>
            </Center>
            <Center>
              <b>{statusDomain[conservation]}</b>
            </Center>
          </Box>
          <Link href={wiki} isExternal>
            <Button>
              Read More <Icon ml={3} as={FiExternalLink}></Icon>
            </Button>
          </Link>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>

          {/* <Avatar
          src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
        // alt={'Author'}
        /> */}

          <Stack direction={'column'} spacing={2} fontSize={'md'}>
            <Text fontWeight={600}>Rate this exhibit!</Text>
            <FiveStar animalName={name}/>
          </Stack>
        </Stack>
      </Box>
    </Center>

  </div>
)

export {
  CardWithImage,
  SmallCardContainer,
};