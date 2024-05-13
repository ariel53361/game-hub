import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}></MenuButton>
      <MenuList>
        <MenuItem></MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
