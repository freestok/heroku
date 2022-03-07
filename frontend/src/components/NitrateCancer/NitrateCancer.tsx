import React, { ReactNode, FC } from 'react';
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
  Button
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


const files = {
  nitrateFile: nitrateFile,
  tractsFile: tractsFile
}
// const NitrateCancer: FC<NitrateCancerProps> = () => (
//     <div className={styles.NitrateCancer}>
//       <Container maxW='container.xl' bgColor='blue.100' p={0}>
//           <D3Map data={files} />
//       </Container>

//     </div>
//   );
interface NitrateCancerProps { }

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
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
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
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
        <D3Map data={files} />
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" marginBottom={3} mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Correlation Finder
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {/* <TextItem key="test" icon={FiSettings}>
        test
      </TextItem> */}
      <FormControl marginLeft={3}>
        <FormLabel >Enter your K-value:</FormLabel>
        <FormHelperText><em>Make it {'>='} to 1</em></FormHelperText>
        <Input type={'number'} min={1} defaultValue={1} width='5em'/>

        <FormLabel >Resolution</FormLabel>
        <FormHelperText><em>B/w 100-1000</em></FormHelperText>
        <Input type={'number'} min={100} max={1000} defaultValue={250} width='5em' />
      </FormControl>
      <Button onClick={() => makeRequest()} type="submit" ml={3} mt={3} colorScheme="blue">Submit</Button>
      {/* {LinkItems.map((link) => ( */}
        {/* <NavItem key={link.name} icon={link.icon}> */}
          {/* {link.name} */}
        {/* </NavItem> */}
      {/* ))} */}
    </Box>
  );
};

const makeRequest = () => {
  console.log('hi');
  // fetch('api/time').then(res => res.json()).then(data => {
  //   setCurrentTime(data.time);
  // });
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
