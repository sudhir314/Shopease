import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { BsHandbag, BsPerson } from "react-icons/bs";
import { useSelector } from "react-redux";

// IMPORT YOUR LOGO HERE
import Logo from "../../assets/logo.png"; 

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const cart = useSelector((store) => store.appReducer.cartData || []);
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        {/* MOBILE MENU BUTTON (LEFT) */}
        <Flex
          flex={{ base: 0, md: "auto" }}
          ml={{ base: -2 }}
          mr={{ base: 2, md: 0 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        
        {/* LOGO & BRAND SECTION (CENTER/LEFT) */}
        <Flex flex={{ base: 1 }} justify={{ base: "start", md: "start" }} alignItems="center">
          <RouterLink to="/" style={{ textDecoration: 'none' }}>
            <Flex align="center">
              {/* 1. THE LOGO IMAGE */}
              <Image 
                src={Logo} 
                alt="Shopease Logo" 
                h={{ base: "28px", md: "35px" }} // Adjusted size for better proportion
                mr={{ base: 2, md: 3 }} 
                fallbackSrc="https://via.placeholder.com/35"
              />
              
              {/* 2. THE BRAND TEXT (Updated: Name Removed & Size Increased) */}
              <Text
                textAlign="left"
                fontFamily={"heading"}
                fontWeight="bold"
                // Increased size since text is shorter now
                fontSize={{ base: "xl", md: "2xl" }} 
                whiteSpace="nowrap"
                color={useColorModeValue("gray.800", "white")}
                letterSpacing={"1px"}
              >
                Shopease
              </Text>
            </Flex>
          </RouterLink>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {/* RIGHT SIDE ICONS (Admin, User, Cart) */}
        <Stack
          flex={{ base: 0, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={{ base: 2, md: 4 }}
          alignItems="center"
        >
          {/* ADMIN PANEL BUTTON */}
          {isAdmin && (
            <RouterLink to="/admin">
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"#20A87E"}
                size="sm"
                _hover={{
                  bg: "teal.400",
                }}
              >
                Admin Panel
              </Button>
            </RouterLink>
          )}

          <RouterLink to="/login">
            <Button variant={"link"} color="black" minW={0} p={0}>
              <BsPerson style={{ fontSize: "22px" }} />
            </Button>
          </RouterLink>
          <RouterLink to="/cart">
            <Button variant={"link"} color="black" minW={0} p={0}>
              <BsHandbag style={{ fontSize: "20px" }} />
              <span style={{ marginLeft: "4px", fontSize: "14px", fontWeight: "bold" }}>
                {cart.length}
              </span>
            </Button>
          </RouterLink>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav isAdmin={isAdmin} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                as={RouterLink}
                to={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      as={RouterLink}
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = ({ isAdmin }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      
      {isAdmin && (
        <Stack spacing={4}>
           <Flex
            py={2}
            as={RouterLink}
            to="/admin"
            justify={"space-between"}
            align={"center"}
            _hover={{ textDecoration: "none" }}
          >
            <Text fontWeight={600} color="#20A87E">
              Admin Panel
            </Text>
          </Flex>
        </Stack>
      )}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} as={RouterLink} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "New Arrivals",
    href: "/products",
  },
  {
    label: "Cases & Sleeves",
    href: "/products",
  },
  {
    label: "Accessories",
    href: "/products",
  },
  {
    label: "Bag & Wallets",
    href: "/products",
  },
  {
    label: "Home Office",
    href: "/products",
  },
];