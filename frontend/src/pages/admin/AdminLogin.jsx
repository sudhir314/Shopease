import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Added for registration
  const [isRegistering, setIsRegistering] = useState(false); // Toggle state
  let navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = () => {
    // 1. Determine if we are logging in or registering
    const endpoint = isRegistering ? "register" : "login";
    
    // 2. Prepare the data to send
    const payload = isRegistering 
      ? { name, email, password } 
      : { email, password };

    // 3. Send Request to Backend
    // UPDATED: Using Computer IP 192.168.5.207
    axios
      .post(`http://192.168.5.207:8080/admin/${endpoint}`, payload)
      .then((res) => {
        console.log(res.data);
        
        // Scenario A: Login Success (Backend sends a token)
        if (res.data.token) {
          toast({
            title: "Logged in Successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          navigate(`/admin`);
        } 
        // Scenario B: Registration Success (Backend sends a msg)
        else if (res.data.msg && (res.data.msg.includes("registered") || res.data.msg.includes("success"))) {
           toast({
            title: "Admin Registered!",
            description: "Please login now.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setIsRegistering(false); // Switch user back to Login view
        } 
        // Scenario C: Error from Backend (e.g., Wrong password)
        else {
          toast({
            title: res.data.msg || "Error",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Connection Failed",
          description: "Ensure the Backend Server is running on port 8080",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>
            {isRegistering ? "Register Admin" : "Sign in Admin"}
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            To access Admin Dashboard 👨‍💻
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            {/* Show Name field only if registering */}
            {isRegistering && (
                <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </FormControl>
            )}
            
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                {!isRegistering && <Checkbox>Remember me</Checkbox>}
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "black",
                }}
                onClick={handleSubmit}
              >
                {isRegistering ? "Register" : "Login"}
              </Button>
              
              {/* Toggle Button */}
              <Text align="center" fontSize="sm">
                  {isRegistering ? "Already have an account?" : "Need an Admin account?"}{" "}
                  <Button variant="link" color="blue.400" onClick={() => setIsRegistering(!isRegistering)}>
                      {isRegistering ? "Login" : "Register Here"}
                  </Button>
              </Text>

            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}