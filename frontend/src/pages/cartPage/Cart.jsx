import React, { useState } from "react";
import { Heading, useDisclosure, Flex, Box, Stack, Image, Text, Divider } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { DeleteIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
} from "@chakra-ui/react";
import { postuserAddress } from "../../redux/appReducer/action";

const initAdress = {
  FullName: "",
  EmailAddress: "",
  Pincode: "",
  City: "",
  State: "",
  Countery: "",
  FlatNumber: "",
  Area: "",
  Landmark: "",
};

const Cart = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const cartData = useSelector((store) => store.appReducer.cartData);
  const [userAddress, setUserAdress] = useState(initAdress);

  const handleChange = (e) => {
    setUserAdress({ ...userAddress, [e.target.name]: e.target.value });
  };

  const handleAddressANdCheckout = () => {
    dispatch(postuserAddress(userAddress));
    navigate("/checkout");
  };

  return (
    <Box bg="gray.50" minH="100vh" pb={10}>
      {/* Page Header */}
      <Flex
        justify="center"
        align="center"
        bg="white"
        h="80px"
        boxShadow="sm"
        mb={8}
      >
        <Heading size="md" letterSpacing="1px">SHOPPING BAG ({cartData.length})</Heading>
      </Flex>

      <Flex
        direction={{ base: "column", lg: "row" }} // Stack on mobile/tablet, Row on large screens
        maxWidth="1200px"
        margin="0 auto"
        gap={8}
        paddingX={{ base: 4, md: 8 }}
      >
        {/* Left Side: Cart Items List */}
        <Stack spacing={4} flex="1.5">
          {cartData.length === 0 ? (
             <Flex justify="center" align="center" direction="column" mt={10}>
                <Text fontSize="xl" fontWeight="bold" color="gray.500">Your Cart is Empty</Text>
                <Button mt={4} colorScheme="teal" variant="outline" onClick={() => navigate("/products")}>
                  Continue Shopping
                </Button>
             </Flex>
          ) : (
            cartData.map((el, index) => (
              <Flex
                key={index}
                bg="white"
                p={4}
                borderRadius="md"
                boxShadow="sm"
                align="center"
                justify="space-between"
                direction={{ base: "column", sm: "row" }} // Stack image/text on very small phones
                gap={4}
              >
                <Flex gap={4} align="center" width="100%">
                  <Image
                    src={el.image}
                    boxSize="100px"
                    objectFit="contain"
                    bg="gray.100"
                    borderRadius="md"
                  />
                  <Stack spacing={1} width="100%">
                    <Text fontWeight="bold" fontSize="md" noOfLines={2}>{el.title}</Text>
                    <Text>
                      Rs. {el.discountPrice}
                      <Text as="span" textDecoration="line-through" color="gray.500" ml={2} fontSize="sm">
                        {el.salePrice}
                      </Text>
                    </Text>
                    <ButtonGroup size="xs" isAttached variant="outline" mt={2}>
                      <Button>-</Button>
                      <Button isDisabled>{1}</Button>
                      <Button>+</Button>
                    </ButtonGroup>
                  </Stack>
                </Flex>
                
                {/* Delete Button */}
                <Button 
                  variant="ghost" 
                  colorScheme="red" 
                  size="sm"
                  alignSelf={{ base: "flex-end", sm: "center" }} // Right align on mobile
                >
                  <DeleteIcon />
                </Button>
              </Flex>
            ))
          )}
        </Stack>

        {/* Right Side: Summary & Checkout */}
        <Box flex="1" minW={{ lg: "350px" }}>
          <Stack spacing={4}>
            {/* Coupons Accordion */}
            <Accordion allowToggle defaultIndex={[0]} bg="white" borderRadius="md" boxShadow="sm">
              <AccordionItem border="none">
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="bold" color="teal.600">
                      COUPONS & OFFERS
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <InputGroup size="md">
                    <Input pr="4.5rem" placeholder="Enter code" fontSize="sm" />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" colorScheme="teal" variant="ghost">
                        Apply
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            {/* Order Summary Box */}
            <Box bg="white" p={6} borderRadius="md" boxShadow="sm">
              <Heading size="sm" mb={4} textTransform="uppercase">Order Summary</Heading>
              <Stack spacing={3} fontSize="sm">
                <Flex justify="space-between">
                  <Text>Item Total</Text>
                  <Text>Rs. 1699</Text>
                </Flex>
                <Flex justify="space-between">
                  <Text>Shipping</Text>
                  <Text color="green.500" fontWeight="bold">Free</Text>
                </Flex>
                <Divider my={2} />
                <Flex justify="space-between" fontWeight="bold" fontSize="lg">
                  <Text>Grand Total</Text>
                  <Text>Rs. 1699</Text>
                </Flex>
              </Stack>

              <Button
                mt={6}
                colorScheme="teal"
                bg="#20A87E"
                width="100%"
                size="lg"
                onClick={onOpen}
                _hover={{ bg: "teal.600" }}
                boxShadow="md"
              >
                PROCEED TO CHECKOUT
              </Button>
            </Box>
          </Stack>
        </Box>
      </Flex>

      {/* Address Modal - Responsive Width */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent mx={4}> {/* Margin on mobile so it doesn't touch edges */}
          <ModalHeader>ADD SHIPPING ADDRESS</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack spacing={4}>
              <FormControl>
                <Input name="FullName" placeholder="Full Name" value={userAddress.FullName} onChange={handleChange} />
              </FormControl>
              <FormControl>
                <Input name="EmailAddress" placeholder="Email Address" value={userAddress.EmailAddress} onChange={handleChange} />
              </FormControl>
              <Flex gap={4} direction={{ base: "column", sm: "row" }}>
                <Input name="Pincode" placeholder="Pincode" value={userAddress.Pincode} onChange={handleChange} />
                <Input name="City" placeholder="City" value={userAddress.City} onChange={handleChange} />
              </Flex>
              <Flex gap={4} direction={{ base: "column", sm: "row" }}>
                <Input name="State" placeholder="State" value={userAddress.State} onChange={handleChange} />
                <Input name="Countery" placeholder="Country" value={userAddress.Countery} onChange={handleChange} />
              </Flex>
              <Input name="FlatNumber" placeholder="Address (House No, Building)" value={userAddress.FlatNumber} onChange={handleChange} />
              <Input name="Area" placeholder="Area / Locality" value={userAddress.Area} onChange={handleChange} />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" width="100%" onClick={handleAddressANdCheckout}>
              SAVE & CONTINUE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Cart;