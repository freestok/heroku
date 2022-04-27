import React, { ReactNode, FC, useState } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Button,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  VStack,
  Spinner,
  HStack,
  Center,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  UnorderedList
} from '@chakra-ui/react';

import { Textarea } from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiMap
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import D3Map from './../D3Map/D3Map';
import nitrateFile from './../../assets/nitrate-cancer/nitrate_wgs84.json';
import tractsFile from './../../assets/nitrate-cancer/cancer_tracts_wgs84.json';
import { Feature, Point, GeoJsonProperties } from 'geojson';
import { reduceEachTrailingCommentRange } from 'typescript';

const resolutionDefault = 250;
const kValDefault = 2;
// const files = 
// const NitrateCancer: FC<NitrateCancerProps> = () => (
//     <div className={styles.NitrateCancer}>
//       <Container maxW='container.xl' bgColor='blue.100' p={0}>
//           <D3Map data={files} />
//       </Container>

//     </div>
//   );
interface NitrateCancerProps { }

interface D3DataProps {
  nitrate: D3Feature;
  tracts: D3Feature;
  analysisResults: any;
}

interface D3Feature {
  type: string;
  features: Array<any>;
}

let currentSymbol = '';

const radioButtonChange = (e: string, files: any, setFiles: any) => {

  const json = files.analysisResults;
  json['symbol'] = e;
  currentSymbol = e;
  setFiles({ nitrateFile: nitrateFile, tractsFile: tractsFile, analysisResults: json })
}

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
];

const NitrateCancer: FC<any> = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [childD3Data, setChildD3Data] = useState(null as unknown as D3DataProps);
  // const [files, setFiles] = useState(null as unknown as any);
  const [files, setFiles] = useState({ nitrateFile: nitrateFile, tractsFile: tractsFile, analysisResults: null });
  const [complete, setComplete] = useState(false);

  // setFiles({nitrateFile: nitrateFile, tractsFile: tractsFile});
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
        d3Data={childD3Data}
        files={files}
        setFiles={setFiles}
        complete={complete}
        setComplete={setComplete}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent
            d3Data={childD3Data}
            onClose={onClose}
            files={files}
            setFiles={setFiles}
            complete={complete}
            setComplete={setComplete} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      {/* <Center> */}
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
        <D3Map passD3Data={setChildD3Data} complete={complete} data={files} />
      </Box>
      {/* </Center> */}
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
  d3Data: D3DataProps;
  setFiles: any;
  files: any;
  complete: any;
  setComplete: any;
}


const SidebarContent = ({ onClose, d3Data, files, setFiles, complete, setComplete, ...rest }: SidebarProps) => {
  const [kVal, setKVal] = useState(kValDefault);
  // const [resolution, setResolution] = useState(resolutionDefault);
  const [nnear, setNnear] = useState(8);
  // const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (event: any) => {
    // console.log(d3Data);
    setLoading(true);
    event.preventDefault();

    const points = d3Data.nitrate.features;
    const tracts = d3Data.tracts.features;
    const body = {
      p: kVal,
      resolution: 250,
      nnear: nnear,
      // points: points,
      // tracts: tracts
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    };
    // fetch('nitrate-cancer/run', requestOptions)
    //   .then(response => response.json())
    //   .then(data => this.setState({ postId: data.id }));
    const res = await fetch('/nitrate-cancer/run', requestOptions);


    // const json = await res.json();


    const interval = setInterval(async () => {
      const res = await fetch('/nitrate-cancer/check-result');
      const json = await res.json();
      console.log('json', json);
      if (json.type === 'FeatureCollection') {
        clearInterval(interval);

        // if already complete, set to current symbol, otherwise canrate
        json['symbol'] = (complete) ? currentSymbol : 'canrate';
        console.log('json symbol', json['symbol']);

        setFiles({ nitrateFile: nitrateFile, tractsFile: tractsFile, analysisResults: json })
        setLoading(false);
        setComplete(true);
      }
    }, 2000);


    // files['analysisResults'] = json;
  }
  // const { isOpen, onOpen, onClose } = 
  const disclosure = useDisclosure({ defaultIsOpen: true });
  // disclosure.
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 300 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" marginBottom={3} mx="8" justifyContent="space-between">
        <HStack>
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Correlation Finder
          </Text>
          <Button boxShadow={'sm'} bg='purple.100' onClick={disclosure.onOpen}>Help</Button>
        </HStack>

        <Modal isOpen={disclosure.isOpen} onClose={disclosure.onClose} size='md'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Help</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Bar options={options} data={data} />; */}
              {disclosure.isOpen &&
                <Box>
                  <VStack spacing={5}>
                    <Text>
                      Welcome to the Correlation Finder. This tool will try to find the correlation between nitrate levels in wells and the cancer rates in census tracts. Enter your K-value and nearest neighbors amount to get started.
                    </Text>
                    <Text>
                      First, the wells are converted into a continuous surface through IDW interpolation. The average value of that continuous surface is mapped onto each census tract. With a 1:1 comparison of cancer rates and nitrate levels, the program finds how strongly the two are correlated.
                    </Text>
                    <Text>
                      Play around with the K-value (or "power value") and amount of nearest neighbors to change how the IDW interpolation is calculated. After submitting, the results will show up at the bottom of the screen, and the resulting statistics will be available on the side of the screen.
                    </Text>
                  </VStack>
                </Box>
              }
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={disclosure.onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Box p={2} ml={3} mr={3} borderWidth={1} borderRadius={8} boxShadow="lg">
        <form onSubmit={handleSubmit}>
          <FormControl isRequired={true}>
            <FormLabel >K-value:</FormLabel>
            <FormHelperText><em>Make it {'>='} to 1.1</em></FormHelperText>
            <NumberInput defaultValue={kValDefault} step={0.1} min={1.1} max={10} w='6em'
              onChange={event => setKVal(parseFloat(event))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          {/* <FormControl isRequired={true}>
            <FormLabel >Resolution</FormLabel>
            <FormHelperText><em>B/w 100-1000</em></FormHelperText>
            <NumberInput defaultValue={resolutionDefault} min={100} max={1000} w='6em'
              onChange={event => setResolution(parseFloat(event))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl> */}
          <FormControl isRequired={true}>
            <FormLabel ># of Nearest Neighbors</FormLabel>
            {/* <FormHelperText><em>B/</em></FormHelperText> */}
            <NumberInput defaultValue={8} min={1} max={1000} w='6em'
              onChange={event => setNnear(parseFloat(event))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          {loading ?
            <Button type="submit" mt={3} colorScheme="blue">
              Processing...
              <Spinner ml={3} color='white' />
            </Button>
            :
            <Button type="submit" mt={3} colorScheme="blue">
              Submit
            </Button>
          }
        </form>
      </Box>
      {complete &&
        <>
          <Box p={2} ml={3} mr={3} borderWidth={1} borderRadius={8} boxShadow="lg">
            <RadioGroup defaultValue="canrate" onChange={event => radioButtonChange(event, files, setFiles)}>
              <Radio value="canrate">Cancer Rate</Radio>
              <Radio value="mean">Average Nitrate Level</Radio>
              {/* <Radio value="fitVal">Predicted Cancer Rate</Radio> */}
              <Radio value="residuals">Residuals</Radio>
              <Radio value="stdResid">Standardized Residuals</Radio>
            </RadioGroup>
          </Box>
          <HStack p={2} mt={4} ml={3} mr={3}>
            <Button bg={'gray.200'} _hover={{ bg: 'gray.300' }}>
              <Link href='/nitrate-cancer/report' isExternal>
                Open Report
              </Link>

            </Button>
            <Button bg={'purple.100'} _hover={{ bg: 'purple.200' }}>
              <Link
                href={`data:text/json;charset=utf-8,${encodeURIComponent(
                  JSON.stringify(files.analysisResults)
                )}`}
                isExternal
                download='wi_tracts.geojson'
              >
                Export File
              </Link>

            </Button>
          </HStack>
        </>
      }

    </Box>

  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
const TextItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Textarea>
        test
      </Textarea>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};

export default NitrateCancer;
