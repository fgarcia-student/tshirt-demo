import React from "react"
import styled from "styled-components"
import Logo from "./Logo"
import { Link } from "gatsby"

const Header = ({ className }) => (
  <header className={className}>
    <Logo
      imageUrl="https://lh3.googleusercontent.com/fnLkcclAZgThuiITBn1LXngpXgLocV-H_LHEC54EMOYZinGgixdM0ARO9yNw7Kjin6iThF2BL8lqW7T0lsAQOSiire8psPvjOM845awAmrlZ3KvBDv0rpTIrXlzVTV7CJ0DCFnBBFg=w2400"
    />
    {/* <Link className="shopping-cart-link" to="ShoppingCart" onClick={() => alert("Coming soon!")}> */}
    <Link className="shopping-cart-link" to="/" onClick={() => alert("Coming soon!")}>
      <i className="material-icons">shopping_cart</i>
    </Link>
  </header>
)

export default styled(Header)`
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;

  a.shopping-cart-link {
    position: fixed;
    z-index: 100;
    color: black;
    text-decoration: none;
    transition: transform 0.2s ease-in;

    &:hover {
      transform: scale(1.4) translate(-10px, 10px);
    }
  }
`
