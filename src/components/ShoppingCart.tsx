import { Tshirt } from '../models/Tshirt';
import React from 'react';
import styled from 'styled-components';
import { AppEntities } from '../enums/AppEntities';
import { IAppContext, AppContext } from '../state/store';

interface ShoppingCartItem<T> {
  item: T;
  cartDetails: {
    [size: string]: number;
  }
}

interface ShoppingCart {
  [AppEntities.tshirt]: {
    [id: string]: ShoppingCartItem<Tshirt>;
  }
}

type Props = {
  shoppingCart: ShoppingCart;
  shoppingCartCount: number;
  updateCartItemQuantity: IAppContext["updateCartItemQuantity"];
  removeItemFromCart: IAppContext["removeItemFromCart"];
  className?: string;
}

const ShoppingCart: React.FC<Props> = (props) => {

  const handleUpdateItemAndSizeQuantity = React.useCallback((category: string, tshirt: Tshirt, size: string) => () => {
    const inputEl = document.getElementById(`item_quantity_${tshirt.id}-${size}`) as HTMLInputElement;
    if (inputEl) {
      props.updateCartItemQuantity?.(category, tshirt, size, +inputEl.value);
      const updateButton = document.getElementById(`item_quantity_update_${tshirt.id}-${size}`) as HTMLButtonElement;
      if (updateButton) {
        const currentText = updateButton.innerHTML;
        const successfulUpdateIcon = document.createElement("i");
        successfulUpdateIcon.classList.add("material-icons");
        successfulUpdateIcon.innerHTML = "check_circle_outline";
        updateButton.innerHTML = "";
        updateButton.appendChild(successfulUpdateIcon);
        setTimeout(() => updateButton.innerHTML = currentText, 500);
      }
    }
  }, [props.updateCartItemQuantity]);

  const handleRemoveItem = React.useCallback((category: string, tshirt: Tshirt, size: string) => () => {
    props.removeItemFromCart?.(category, tshirt, size);
  }, [props.removeItemFromCart]);

  const cartItems = () => {
    const totalCartItems: any[] = [];
    if (props.shoppingCart.tshirt) {
      const tshirts = Object
      .keys(props.shoppingCart.tshirt)
      .map((tshirtId) => props.shoppingCart.tshirt![tshirtId])
      .map((item?: ShoppingCartItem<Tshirt>) => {
        if (item) {
          return Object
            .keys(item.cartDetails)
            .sort((a, b) => a.localeCompare(b))
            .map((size) => {
              const price = item.item.priceBySize[size] ?? item.item.price;
              const formattedPrice = item.item.formattedPrice.replace("{price}", `${price}`);
              return (
                <div key={`tshirt_${item.item.id}-${size}`} className="shopping_cart_item">
                  <img className="shopping_cart_item__image" src={item.item.imgMain} />
                  <div className="shopping_cart_item__details">
                    <span className="shopping_cart_item__details__name">{item.item.name}</span>
                    <span className="shopping_cart_item__details__price">{formattedPrice}</span>
                    <span className="shopping_cart_item__details__size">Size: {size}</span>
                  </div>
                  <div className="shopping_cart_item__actions">
                    <input
                      id={`item_quantity_${item.item.id}-${size}`}
                      className="shopping_cart_item__actions__quantity"
                      defaultValue={item.cartDetails[size]}
                      type="number"
                    />
                    <button id={`item_quantity_update_${item.item.id}-${size}`} className="update" onClick={handleUpdateItemAndSizeQuantity(AppEntities.tshirt, item.item, size)}>Update quantity</button>
                    <button id={`item_remove_${item.item.id}-${size}`} className="remove" onClick={handleRemoveItem(AppEntities.tshirt, item.item, size)}>Remove item</button>
                  </div>
                </div>
              );
            })
        }
        return <></>;
      })

      totalCartItems.push(...tshirts);
    }
    
    return totalCartItems;
  };

  const calculateTotalCost = () => {
    let totalCost = 0;
    if (props.shoppingCart.tshirt) {
      const tshirts: number = Object
        .keys(props.shoppingCart.tshirt)
        .map((tshirtId) => props.shoppingCart.tshirt![tshirtId])
        .reduce((total: number, item?: ShoppingCartItem<Tshirt>) => {
          if (item) {
            const totalForItemAndAllSizes = Object
              .keys(item.cartDetails)
              .reduce((cartTotal: number, size) => {
                const price = item.item.priceBySize[size] ?? item.item.price;
                const totalForItemAndSize = price * item.cartDetails[size];
                cartTotal += totalForItemAndSize;
                return cartTotal;
              }, 0);
            
            total += totalForItemAndAllSizes;
          }
          return total;
        }, 0);

        totalCost += tshirts;
    }

    return `${totalCost} USD`;
  }

  return (
    <div id="shopping_cart" className={props.className}>
      <div style={{ backgroundColor: "black", width: "100%", minHeight: "60px"}} />
      <div className="cart_items_container" style={{ overflowY: "auto" }}>
        {cartItems()}
      </div>
      <div style={{ position: "fixed", bottom: "0px", width: "100%", paddingRight: "5px", fontSize: "32px", display: "flex", justifyContent: "flex-end", alignItems: "center", color: "white", minHeight: "60px", backgroundColor: "green" }}>
        <div>Total Cost: </div>
        <div style={{ padding: "0px 10px" }}>{calculateTotalCost()}</div>
        <button className="checkout" onClick={() => alert("Coming soon!")}>Checkout</button>
      </div>
    </div>
  );
}

export default styled(ShoppingCart)`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: white;
  border-left: 1px solid black;
  z-index: 9;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  .cart_items_container {
    margin-bottom: 60px;
  }

  .update,
  .remove,
  .checkout {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;

    &:focus {
      outline: none;
    }
  }

  .checkout {
    font-size: 24px;
    padding: 5px;
    background-color: #ffe135;
    border: 1px solid white;
  }

  button {
    border: 1px solid black;
    background-color: white;
    margin-top: 5px;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover.remove {
      background-color: red;
      color: white;
    }

    &:hover.update {
      background-color: lightblue;
    }
  }

  .shopping_cart_item {
    display: flex;
    width: 99%;
    margin: 3px;

    &__image {
      width: 250px;
      margin-bottom: 5px;
      border: 2px solid black;
    }

    &__details {
      display: flex;
      flex: 1;
      flex-direction: column;
      padding: 10px;
      line-height: 45px;

      &__name {
        font-size: 48px;
      }

      &__price {
        font-size: 32px;
      }

      &__size {
        
      }
    }

    &__actions {
      display: flex;
      flex-direction: column;
      padding: 10px;
      justify-content: flex-end;

      &__quantity {
  
      }
    }
  }

  @media screen and (max-width: 912px) {
    .shopping_cart_item {
      flex-direction: column;

      &__image {
        margin: 0 auto;
      }

      &__details {
        margin: 0 auto;
        text-align: center;
        padding-bottom: 0px;
        &__name {
          font-size: 32px;
        }

        &__price {
          font-size: 24px;
        }
      }
    }
  }
`;