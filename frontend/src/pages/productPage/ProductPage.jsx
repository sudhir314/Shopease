import React, { useState } from "react";
import {
  Box,
  Image,
  Badge,
  Text,
  Button,
  Stack,
  useToast,
  SimpleGrid,
  Icon,
  Flex
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi"; // Requires: npm install react-icons

const ProductCard = ({ watches }) => {
  const toast = useToast();
  // State to track which specific product is currently "loading" (being added)
  const [loadingId, setLoadingId] = useState(null);

  const handleAddToCart = (product) => {
    // 1. Set Loading State for this specific button
    setLoadingId(product.id);

    // 2. Simulate API delay (0.8 seconds) for realism
    setTimeout(() => {
      // 3. Stop Loading
      setLoadingId(null);

      // 4. Show Success Toast
      toast({
        title: "Added to Cart!",
        description: `${product.title || "Item"} is now in your cart.`,
        status: "success",
        duration: 2500,
        isClosable: true,
        position: "bottom-right", // Looks very professional at bottom-right
        variant: "subtle", // Modern styling
      });

      // TODO: Here you would dispatch your Redux action
      // dispatch(addToCart(product)); 
    }, 800);
  };

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 4 }} spacing={6}>
      {watches?.map((watch) => (
        <Box
          key={watch.id}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bg="white"
          position="relative"
          transition="all 0.3s ease"
          _hover={{
            transform: "translateY(-5px)", // Lifts the card up
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)", // Adds soft shadow
            borderColor: "blue.200",
          }}
        >
          {/* Badge for Offer/New */}
          {/* You can add logic here: if watch.isNew show Badge */}
          <Badge
            position="absolute"
            top="10px"
            left="10px"
            colorScheme="green"
            fontSize="0.7em"
            borderRadius="full"
            px={2}
          >
            New
          </Badge>

          {/* Image Area */}
          <Box height="250px" overflow="hidden" p={4} display="flex" alignItems="center" justifyContent="center">
            <Image
              src={watch.image || watch.img || "https://via.placeholder.com/250"}
              alt={watch.title}
              objectFit="contain"
              height="100%"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.1)" }} // Internal Image Zoom
            />
          </Box>

          {/* Content Area */}
          <Box p={5}>
            <Stack spacing={2}>
              <Text
                fontWeight="bold"
                fontSize="md"
                textTransform="uppercase"
                letterSpacing="wide"
                color="gray.600"
                noOfLines={1}
              >
                {watch.brand || "Brand"}
              </Text>
              
              <Text
                fontWeight="semibold"
                fontSize="lg"
                lineHeight="tight"
                noOfLines={2}
                height="50px" // Fixed height for alignment
              >
                {watch.title || watch.name}
              </Text>

              <Flex align="center" justify="space-between" mt={2}>
                <Text fontSize="xl" fontWeight="bold" color="blue.600">
                  ₹{watch.price}
                </Text>
                {watch.originalPrice && (
                  <Text textDecoration="line-through" color="gray.400" fontSize="sm">
                    ₹{watch.originalPrice}
                  </Text>
                )}
              </Flex>

              {/* Add to Cart Button */}
              <Button
                mt={3}
                width="100%"
                colorScheme="blue"
                variant="outline"
                leftIcon={<Icon as={FiShoppingCart} />}
                isLoading={loadingId === watch.id} // Shows spinner if this ID matches
                loadingText="Adding..."
                onClick={() => handleAddToCart(watch)}
                _hover={{
                    bg: "blue.500",
                    color: "white"
                }}
              >
                Add to Cart
              </Button>
            </Stack>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ProductCard;