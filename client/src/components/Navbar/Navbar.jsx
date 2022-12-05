import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
          <Link className ="link" to="/"><img src="https://www.zonadigitalsv.com/assets/media/logos/logozdweb.png" alt="" srcset="" width={"150px"} /></Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/1">Productos Destacados</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Ofertas</Link>
          </div>

        </div>
        <div className="center">
         
        </div>
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">Inicio</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Sobre Nosotros</Link>
          </div>

          <div className="icons">

            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;
