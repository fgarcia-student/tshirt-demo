import React from "react"
import styled from "styled-components"
import Logo from "./Logo"
import ShoppingCart from "./ShoppingCart";
import { ItemCategory } from "../enums/ItemCategory";

export const shoppingCart = {
  tshirt: {}
};
export const addItemToShoppingCart = (key, item, size) => {
  if (shoppingCart[key][item.id] && shoppingCart[key][item.id].cartDetails[size]) {
    shoppingCart[key][item.id] = {
      item,
      cartDetails: {
        ...shoppingCart[key][item.id].cartDetails,
        [size]: shoppingCart[key][item.id].cartDetails[size] + 1
      }
    };
  } else {
    shoppingCart[key][item.id] = {
      item,
      cartDetails: {
        ...(shoppingCart[key][item.id]?.cartDetails ?? {}),
        [size]: 1
      }
    };
  }
}
export const removeItemFromShoppingCart = (key, item, size) => {
  if (shoppingCart[key][item.id] && shoppingCart[key][item.id].cartDetails[size]) {
    delete shoppingCart[key][item.id].cartDetails[size];
  }
}

export const updateItemQuantity = (key, item, size, newQuantity) => {
  if (shoppingCart[key][item.id] && shoppingCart[key][item.id].cartDetails[size]) {
    shoppingCart[key][item.id].cartDetails[size] = Number(newQuantity);
  }
}

const getShoppingCartCount = () => {
  const c = Object
    .keys(ItemCategory)
    .reduce((allCategoryTotal, key) => {
      const cartItems = shoppingCart[key];
      if (cartItems) {
        const currentCategoryKeys = Object.keys(cartItems);
        const currentCategoryTotal = currentCategoryKeys.reduce((total, id) => {
          if (cartItems[id]) {
            const allSizesCount = Object
              .keys(cartItems[id].cartDetails)
              .reduce((subTotal, sizeId) => subTotal += cartItems[id].cartDetails[sizeId], 0);
            
            total += allSizesCount;
          }
          return total;
        }, 0)
        allCategoryTotal += currentCategoryTotal;
      }
      return allCategoryTotal;
    }, 0);
    return c;
};

const Header = ({ className }) => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  return (
    <header className={className}>
      <Logo
        imageUrl="https://lh3.googleusercontent.com/fnLkcclAZgThuiITBn1LXngpXgLocV-H_LHEC54EMOYZinGgixdM0ARO9yNw7Kjin6iThF2BL8lqW7T0lsAQOSiire8psPvjOM845awAmrlZ3KvBDv0rpTIrXlzVTV7CJ0DCFnBBFg=w2400"
      />
      {/* <Link className="shopping-cart-link" to="ShoppingCart" onClick={() => alert("Coming soon!")}> */}
      <div className="shopping-cart-link" onClick={() => setIsCartOpen(curr => !curr)}>
        <i className={`material-icons ${isCartOpen ? "whiteColor" : ""}`}>{isCartOpen ? "close" : "shopping_cart"}</i>
        {!isCartOpen && <span>{getShoppingCartCount()}</span>}
      </div>
      {isCartOpen && <ShoppingCart shoppingCart={shoppingCart} shoppingCartCount={getShoppingCartCount()} />}
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
