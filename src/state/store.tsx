import { registerCartItems } from "./utils/registerCartItems";
import { AppEntities } from '../enums/AppEntities';
import { Tshirt } from "../models/Tshirt";
import React from "react";
import { registerCartHandlers } from './utils/registerCartHandlers';

interface ShoppingCartItem<T> {
  item: T;
  cartDetails: {
    [size: string]: number;
  }
}

interface ShoppingCart {
  cartSize: number;
  [AppEntities.tshirt]?: {
    [id: string]: ShoppingCartItem<Tshirt>;
  }
}

interface MyAppEntities {
  [AppEntities.tshirt]?: {
    [id: string]: Tshirt;
  },
  [AppEntities.assets]?: {
    [id: string]: Tshirt;
  }
}

interface IAppState {
  cart: ShoppingCart;
  items: MyAppEntities;
}

export interface IStateHandlers {
  addItemToCart?: <T extends {id: any}>(key: string, item: T, size: string) => void;
  removeItemFromCart?: <T extends {id: any}>(key: string, item: T, size: string) => void;
  updateCartItemQuantity?: <T extends {id: any}>(key: string, item: T, size: string, newQuantity: number) => void;
}

export type IAppContext = {
  state: IAppState,
  setState?: React.Dispatch<React.SetStateAction<IAppState>>,
} & IStateHandlers;

export const initialState: IAppState = {
  cart: {
    cartSize: 0,
  },
  items: {},
};

const initialContext: IAppContext = {
  state: initialState,
};

registerCartItems(initialContext);
registerCartHandlers(initialContext);
export const AppContext = React.createContext<IAppContext>(initialContext);

export class StateProvider extends React.Component<{}, IAppState> {
  public context = initialContext;
  constructor(props) {
    super(props);
    this.state = {...initialState};
    this.passedSetState = this.passedSetState.bind(this);
  }

  passedSetState(
    state: ((prevState: Readonly<IAppState>, props: Readonly<{}>) => (Pick<IAppState, keyof IAppState> | IAppState | null)) | (Pick<IAppState, keyof IAppState> | IAppState | null),
    callback?: () => void
  ) {
    this.setState(state, callback);
  }

  render() {
    const context = {
      state: this.state,
      setState: this.passedSetState,
    };
    registerCartHandlers(context);
    return (
      <AppContext.Provider value={context}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
