import { ShoppingItem } from '../models/shopping-item.model';
import {
  ShoppingAction,
  ShoppingActionTypes,
} from '../actions/shopping.actions';

const initialState: Array<ShoppingItem> = [
  {
    id: '1',
    name: 'Diet Coke',
  },
  {
    id: '2',
    name: 'Fanta',
  },
];

export function ShoppingReducer(
  state: Array<ShoppingItem> = initialState,
  action: ShoppingAction
) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}
