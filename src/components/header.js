import React from "react"
import styled from "styled-components"
import Logo from "./Logo"
import ShoppingCart from "./ShoppingCart";
import { AppContext } from "../state/store";

const Header = ({ className }) => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const appContext = React.useContext(AppContext);
  return (
    <header className={className}>
      <Logo
        onClick={() => setIsCartOpen(false)}
        imageUrl="https://lh3.googleusercontent.com/fnLkcclAZgThuiITBn1LXngpXgLocV-H_LHEC54EMOYZinGgixdM0ARO9yNw7Kjin6iThF2BL8lqW7T0lsAQOSiire8psPvjOM845awAmrlZ3KvBDv0rpTIrXlzVTV7CJ0DCFnBBFg=w2400"
      />
      {/* <Link className="shopping-cart-link" to="ShoppingCart" onClick={() => alert("Coming soon!")}> */}
      <div className="shopping-cart-link" onClick={() => setIsCartOpen(curr => !curr)}>
        <i className={`material-icons ${isCartOpen ? "whiteColor" : ""}`}>{isCartOpen ? "close" : "shopping_cart"}</i>
        {!isCartOpen && <span>{appContext.state.cart.cartSize}</span>}
      </div>
      {isCartOpen && (
        <ShoppingCart
          shoppingCart={appContext.state.cart}
          shoppingCartCount={appContext.state.cart.cartSize}
          removeItemFromCart={appContext.removeItemFromCart}
          updateCartItemQuantity={appContext.updateCartItemQuantity}
        />
      )}
    </header>
  );
}

export default styled(Header)`
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-right: 5px;
  width: 100%;
  height: 50px;

  .whiteColor {
    color: white;
  }

  .shopping-cart-link {
    display: flex;
    position: relative;
    align-self: center;
    padding-right: 5px;
    position: fixed;
    z-index: 100;
    color: black;
    text-decoration: none;
    transition: transform 0.2s ease-in;
    cursor: pointer;

    &:hover {
      transform: scale(1.4) translate(-10px, 10px);
    }
  }
`
