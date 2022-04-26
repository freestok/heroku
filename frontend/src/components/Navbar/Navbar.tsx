import { FC, ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ListItem,
  UnorderedList,
  Text,
  useMediaQuery 
} from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
// import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function NavBar() {
  let { isOpen, onOpen, onClose } = useDisclosure({defaultIsOpen: true});
  // isOpen = true;
  
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            // icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>John Ball Zoo Explorer</Box>
            {/* <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack> */}
          </HStack>
          <Flex alignItems={'center'}>
            <HStack>
              <Button boxShadow={'sm'} bg='purple.100' onClick={onOpen}>Help</Button>

              <Modal isOpen={isOpen} onClose={onClose} size='md'>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Help</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {/* <Bar options={options} data={data} />; */}
                    {isOpen &&
                      <Box>
                        <Text>
                          Welcome to the John Ball Zoo Explorer. You can do the following:
                        </Text>
                        <UnorderedList>
                          <ListItem>Search for animals</ListItem>
                          <ListItem>Click on an exhibit to see animal information</ListItem>
                          <ListItem>Toggle layers on and off</ListItem>
                          <ListItem>Rate exhibits on a five-star scale</ListItem>
                          <ListItem>View the breakdown of every animal's ratings</ListItem>
                        </UnorderedList>
                      </Box>
                    }
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Link href='https://github.com/freestok/heroku' isExternal>
                <Icon w={8} h={8} color='black' as={AiFillGithub} />
              </Link>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}