import React from "react";
import {
  Box,
  Heading,
  Stack,
  Image,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductCart } from "../Redux/products/action";

const Cart = () => {
  const cart = useSelector((store) => store.ecommerceData.cart);
  const dispatch = useDispatch();
  const removeProduct = (id) => {
    console.log('going ', id)
    dispatch(deleteProductCart(id));
  };
  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center">
        Cart
      </Heading>
      {cart.length &&
        cart.map((product) => {
          return (
            <CartItem
              key={product.key}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
              removeProduct={removeProduct}
            />
          );
        })}

      <Button
        rounded={"none"}
        w={"full"}
        mt={8}
        size={"lg"}
        py={"7"}
        bg={useColorModeValue("gray.900", "gray.50")}
        color={useColorModeValue("white", "gray.900")}
        textTransform={"uppercase"}
        _hover={{
          transform: "translateY(2px)",
          boxShadow: "lg",
        }}
        // onClick={addToCartHandler}
      >
        Checkout
      </Button>
    </Box>
  );
};

function CartItem({ id, title, image, description, price, removeProduct }) {
  
    return (
    <Box border={"1px solid red"} ml="200px" rounded="lg" width={"fit-content"} margin="auto">
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="left"
        alignItems="center"
      >
        <Box height={"300px"} width="300px" border="1px solid blue">
          <Stack textAlign="left" p={4}>
            <Heading as="h6" size="sm">
              {title}
            </Heading>
            <Text>{description}</Text>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontSize={"2xl"}
              fontWeight={"300"}
            >
              {price}
            </Text>
            <Button
              varient={"outline"}
              leftIcon={<DeleteIcon />}
              onClick={() => removeProduct(id)}
            >
              Remove
            </Button>
          </Stack>
        </Box>
        <Box height={"300px"} width="150px" border="1px solid green">
          <Image
            rounded={"lg"}
            height={200}
            width={200}
            objectFit={"contain"}
            src={image}
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default Cart;
