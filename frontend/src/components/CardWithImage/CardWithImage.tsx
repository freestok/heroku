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
  Container,
  Icon,
  Spacer,
  VStack
} from '@chakra-ui/react';

import {
  FiXCircle
} from 'react-icons/fi';
import { FC, useState } from 'react';

interface SmallCardProps {
  name: string,
  key: number,
  img: string
}

interface SmallCardContainerProps {
  items: SmallCardProps[];
}

const CardAccordion: FC<SmallCardProps> = ({ name, key, img }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Box maxW={300}>
      {isActive
        ? <CardWithImage img={img} name={name} setIsActive={setIsActive} />
        : <div style={{ cursor: 'pointer' }} onClick={() => setIsActive(true)}>
          <SmallCard name={name} key={key} img={img} />
        </div>
      }
    </Box>
  )
};

// type SmallCardContainerProps = SmallCardProps[];
// interface SmallCardContainerProps extends Array<SmallCardContainerProps>{};
const SmallCardContainer: FC<SmallCardContainerProps> = ({ items }) => (
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
        {items.map((item, i) => (
          <CardAccordion img={item.img} key={item.key} name={item.name} />
        ))}
      </VStack>
    </Box>
  </Center>
);

const SmallCard: FC<SmallCardProps> = ({ name, img }) => (
  <Center py={1}>
    <Box
      w={{ base: '30em', md: '10em', lg: '10em' }}
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


const CardWithImage: FC<any> = (props: any) => (
  <div className='cardWithImage'>
    <Center py={3}>
      <Box
        w={'full'}
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
          mb={6}
          pos={'relative'}>
          <Flex w={'full'}
            // h={'100vh'}
            h='full'
            backgroundImage={
              `url(${props.img})`
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
              onClick={() => {
                console.log('click!');
                console.log('props', props);
                props.setIsActive(false)
              }}
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
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'lg'}
            letterSpacing={1.1}>
            {props.name}
          </Text>
          <Heading
            as='i'
            color={useColorModeValue('gray.600', 'white')}
            fontSize={'md'}
            fontWeight='normal'
            fontFamily={'body'}>
            Scientific name
          </Heading>
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          {/* <Avatar
          src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
        // alt={'Author'}
        /> */}
          <Button>
            Click Me
          </Button>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
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