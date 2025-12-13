import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Heading, Flex, Box, Text, Badge, Stack } from "@chakra-ui/react";
import { Navigate, useParams } from "react-router-dom";
import { getsingleProduct } from "../../../redux/appReducer/action";

export const SingleProductPage = () => {
  const [isCart, setIsCart] = useState(false);
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getsingleProduct(id));
  }, [id]);

  const singleProduct = useSelector((store) => store.appReducer.singleProduct);

  const handleGoTOCart = () => {
    setIsCart(true);
    setCount(count + 1);
  };

  if (count === 2) {
    return <Navigate to="/cart" />;
  }

  return (
    <Flex 
      direction={{ base: "column", md: "row" }} // Vertical on mobile, Horizontal on desktop
      maxWidth="1200px" 
      margin={{ base: "20px auto", md: "50px auto" }} 
      padding="20px"
      gap={{ base: "30px", md: "60px" }}
    >
      {/* Left Side: Product Image */}
      <Box 
        flex="1" 
        bg="gray.50" 
        display="flex" 
        justifyContent="center" 
        alignItems="center"
        borderRadius="12px"
        overflow="hidden"
        padding="20px"
      >
        <img 
          src={singleProduct.image} 
          alt={singleProduct.title} 
          style={{ width: "100%", maxHeight: "500px", objectFit: "contain" }} 
        />
      </Box>

      {/* Right Side: Product Details */}
      <Stack flex="1" spacing={5} justifyContent="center">
        <Badge colorScheme="green" width="fit-content" fontSize="0.8em" px={2} py={1} borderRadius="4px">
          IN STOCK
        </Badge>
        
        <Heading size={{ base: "xl", md: "2xl" }} fontWeight="800" color="gray.800">
          {singleProduct.title}
        </Heading>
        
        <Flex alignItems="center" gap="15px" wrap="wrap">
          <Text fontSize="3xl" fontWeight="bold" color="black">
            Rs. {singleProduct.discountPrice}
          </Text>
          <Text fontSize="xl" textDecoration="line-through" color="gray.500">
            {singleProduct.salePrice}
          </Text>
          <Text fontSize="sm" color="green.600" fontWeight="bold">
            Inclusive of all taxes
          </Text>
        </Flex>

        <Text fontSize="md" color="gray.600" lineHeight="1.8">
          Experience premium quality with our exclusive {singleProduct.title}. 
          Designed for durability and style, making your everyday carry #lessordinary.
        </Text>

        {/* Offers Section */}
        <Box borderTop="1px solid" borderBottom="1px solid" borderColor="gray.200" py={4} mt={2}>
           <Text fontWeight="bold" mb={2} color="#20A87E">Offers Available:</Text>
           <Stack spacing={1}>
             <Text fontSize="sm">🏷️ Extra 10% cashback upto INR 500 with ZestMoney</Text>
             <Text fontSize="sm">🚚 Free Shipping on orders above Rs. 999</Text>
           </Stack>
        </Box>

        <Button
          onClick={handleGoTOCart}
          colorScheme="teal"
          bg="#20A87E"
          size="lg"
          width={{ base: "100%", md: "50%" }} // Full width button on mobile
          mt={4}
          _hover={{ bg: "teal.600" }}
        >
          {isCart ? "Go To Cart" : "Add To Cart"}
        </Button>
      </Stack>
    </Flex>
  );
};