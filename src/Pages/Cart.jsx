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
import { addOrder, deleteProductCart } from "../Redux/products/action";
import BuyOrder from "../Components/BuyOrder";

const Cart = () => {
  const cart = useSelector((store) => store.ecommerceData.cart);
  const dispatch = useDispatch();
  const removeProduct = (id) => {
    console.log("going ", id);
    dispatch(deleteProductCart(id));
  };

  const checkOutHandler = () => {
    dispatch(addOrder(cart))
  }

  return (
    <Box >
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

      <BuyOrder cart={cart} checkOutHandler={checkOutHandler}/>
    </Box>
  );
};

function CartItem({ id, title, image, description, price, removeProduct }) {
  return (
    <Box
      border={"1px solid gray"}
      ml="200px"
      rounded="lg"
      width={"fit-content"}
      margin="auto"
      marginBottom="2rem"
      p={4}
      w="550px"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="left"
        alignItems="center"

      >
        <Box height={"300px"} width="300px"  marginTop="3rem">
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
              ₹{price}
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
        <Box height={"300px"} width="150px" >
          <Image
            rounded={"lg"}
            height={200}
            width={200}
            marginTop="3rem"
            marginRight="1rem"
            objectFit={"contain"}
            src={image}
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default Cart;
