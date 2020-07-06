import { IAppContext } from "../store";

function addItemToCart<T extends {id: any}>(appContext: IAppContext) {
  return (key: string, item: T, size: string) => {
    if (appContext.state.cart[key][item.id] && appContext.state.cart[key][item.id].cartDetails[size]) {
      appContext.setState?.((prevState) => ({
        ...prevState,
        cart: {
          ...prevState.cart,
          cartSize: prevState.cart.cartSize + 1,
          [key]: {
            ...prevState.cart[key],
            [item.id]: {
              item,
              cartDetails: {
                ...prevState.cart[key][item.id].cartDetails,
                [size]: prevState.cart[key][item.id].cartDetails[size] + 1
              }
            }
          }
        }
      }));
    } else {
      appContext.setState?.((prevState) => {
        const newState = {
          ...prevState,
          cart: {
            ...prevState.cart,
            cartSize: prevState.cart.cartSize + 1,
            [key]: {
              ...prevState.cart[key],
              [item.id]: {
                item,
                cartDetails: {
                  ...(appContext.state.cart[key][item.id]?.cartDetails ?? {}),
                  [size]: 1
                }
              }
            }
          }
        };
        return newState;
      });
    }
  }
}

function removeItemFromCart<T extends {id: any}>(appContext: IAppContext) {
  return (key: string, item: T, size: string) => {
    if (appContext.state.cart[key][item.id] && appContext.state.cart[key][item.id].cartDetails[size]) {
      const itemDetailsCopy = { ...appContext.state.cart[key][item.id].cartDetails };
      const quantityToRemove = appContext.state.cart[key][item.id].cartDetails[size];
      delete itemDetailsCopy[size];
      appContext.setState?.((prevState) => ({
        ...prevState,
        cart: {
          ...prevState.cart,
          cartSize: prevState.cart.cartSize - quantityToRemove,
          [key]: {
            ...prevState.cart[key],
            [item.id]: {
              item,
              cartDetails: itemDetailsCopy,
            }
          }
        }
      }));
    }
  }
}

function updateCartItemQuantity<T extends {id: any}>(appContext: IAppContext) {
  return (key: string, item: T, size: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItemFromCart(appContext)(key, item, size);
    } else if (appContext.state.cart[key][item.id] && appContext.state.cart[key][item.id].cartDetails[size]) {
      const updatedQuantityDetails = { ...appContext.state.cart[key][item.id].cartDetails };
      const currentQuantity = appContext.state.cart[key][item.id].cartDetails[size];
      const differenceToAdd = newQuantity - currentQuantity;
      updatedQuantityDetails[size] = newQuantity;
      appContext.setState?.((prevState) => ({
        ...prevState,
        cart: {
          ...prevState.cart,
          cartSize: prevState.cart.cartSize + differenceToAdd,
          [key]: {
            ...prevState.cart[key],
            [item.id]: {
              item,
              cartDetails: updatedQuantityDetails,
            }
          }
        }
      }));
    }
  }
}

export function registerCartHandlers(appContext: IAppContext) {
  appContext.addItemToCart = addItemToCart(appContext);
  appContext.removeItemFromCart = removeItemFromCart(appContext);
  appContext.updateCartItemQuantity = updateCartItemQuantity(appContext);
}