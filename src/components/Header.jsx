import "./Header.scss";
import PlanetsData from "../../db/planets-array";
import { NavLink } from "react-router-dom";
import Burger from "./Burger";
import Menu from "./Menu";
import { useState, useRef } from "react";
import { useOnClickOutside } from "../hooks/hooks";
import { ChevronIcon } from "../../db/planets-array";

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const names = PlanetsData.map(p => {
    return (
      <NavLink key={p.id} to={`/${p.id}`} className="planet" >{p.title}</NavLink>
    );
  });
  const namesTop = PlanetsData.map(p => {

    return (
      <NavLink key={p.id} onClick={() => setOpen(!open)} to={`/${p.id}`} className="planet" > {p.title} <img src={ChevronIcon}></img> </NavLink>
    );
  });


  return (
    <div className="header">
      <div className="title">
        The planets
      </div>
      <div className="burger-header" ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} names={namesTop} />
      </div>
      <div className="planets">
        {names}
      </div>
    </div>
  );
};

export default Header;