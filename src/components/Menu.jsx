import { StyledMenu } from "./Menu.styled";
import { bool } from "prop-types";

const Menu = ({ open, names }) => {

  return (
    <StyledMenu className="menu" open={open}>

      {names}
    </StyledMenu>
  );

};

Menu.propTypes = {
  open: bool.isRequired
};


export default Menu;