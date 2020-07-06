import { AppEntities } from "../../enums/AppEntities";
import { IAppContext } from '../store';

export function registerCartItems(context: IAppContext) {
  Object.keys(AppEntities).forEach(v => context.state.cart[v] = {})
}