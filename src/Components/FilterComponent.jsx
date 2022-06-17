import React, { useState } from "react";
import {
  Box,
  Text,
  Checkbox,
  CheckboxGroup,
  VStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchData } from "../Redux/products/action";
import { useDispatch } from "react-redux";

const FilterComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  // console.log(searchParams.getAll("categories"))
  const [categoryValues, setCategoryValues] = useState(searchParams.getAll("categories") || []);
  const categoryhandler = (values) => {
    // console.log(values);
    setCategoryValues(values);
  };

  useEffect(() => {
    if(categoryValues){
      setSearchParams({categories: categoryValues}, {replace: true})
      let params = {
        categories: searchParams.getAll('categories')
      }
      dispatch(fetchData(params))
    }
  }, [categoryValues, setCategoryValues, searchParams])
  return (
    <Box pr="10">
      <Box borderWidth="2px"  display={{ base: "none", md: "block" }}>
        <Text fontSize="17px" textAlign="center">
          Filters
        </Text>
        <Text>Category</Text>
        <CheckboxGroup
          colorScheme="green"
          defaultValue={categoryValues}
          onChange={categoryhandler}
        >
          <VStack>
            <Checkbox value="shirt">Shirt</Checkbox>
            <Checkbox value="tshirt">Tshirt</Checkbox>
            <Checkbox value="kurta">Kurta</Checkbox>
            <Checkbox value="short">Shorts</Checkbox>
            <Checkbox value="shoes">Shoes</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>
      <Box display={{base: 'block', md: 'none'}} p="0rem 2rem">
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme="blue">
            MenuItem
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
              <MenuItemOption value="asc">Ascending</MenuItemOption>
              <MenuItemOption value="desc">Descending</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title="Country" type="checkbox">
              <MenuItemOption value="email">Email</MenuItemOption>
              <MenuItemOption value="phone">Phone</MenuItemOption>
              <MenuItemOption value="country">Country</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default FilterComponent;
