import React from "react";
import {
  Box,
  Stack,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import FilterComponent from "../Components/FilterComponent";
import { useEffect } from "react";
import { fetchData } from "../Redux/products/action";
import { useNavigate, useSearchParams } from "react-router-dom";

const Products = () => {
  const products = useSelector((store) => store.ecommerceData.products);
  // console.log(products)
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (products?.length === 0) {
      let params = {
        categories: searchParams.getAll("categories"),
      };
      dispatch(fetchData(params));
    }
  }, [dispatch, products?.length]);
  console.log(products);
  return (
    <Box>
      <Box w="100%" p={2}>
        <img src="https://images.bewakoof.com/uploads/category/desktop/thin-banner_299_1440x150-1655286975.gif" />
      </Box>
      <Text fontSize="xl" fontWeight="600" ml="5" textAlign="left">
        Men Clothing (7308)
      </Text>
      <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }}>
        <Box minWidth={"15rem"}>
          <FilterComponent />
        </Box>
        <Box>
          <Flex flexWrap="wrap" justifyContent="space-around">
            {products.map((product) => {
              return <ProductSimple key={product.id} product={product} />;
            })}
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

function ProductSimple(props) {
  // console.log(props);
  const { id,image, title, price, rating, brand } = props.product;
  const navigate = useNavigate();
  return (
    <Center py={12}  onClick={() => navigate(`/products/${id}`)}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={300}
            width={282}
            objectFit={"contain"}
            src={image}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {brand}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              ₹{price}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default Products;
