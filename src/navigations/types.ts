import { StackNavigationProp } from '@react-navigation/stack';
import { Product } from '../models/product';
import { CartItem } from '../models/cart';



export type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: { product: Product };
  Cart: { cartItems: CartItem[] };
};

export type ProductListNavigationProp = StackNavigationProp<RootStackParamList, 'ProductList'>;
export type ProductDetailNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetail'>;
