import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigations/types';
import Counter from '../../components/counter';
import { decrementQuantity, incrementQuantity } from '../../redux/cart/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { CartItem } from '../../models/cart';

/*
    NOTE: 
     Passed Product directly instead of passing ID and then calling API again
     in order to avoid multiple API calls as in the sample API repository which was 
     provided with this assignment, the Product detail and listing contain the same 
     set of attributes for a Product.

    Caveats: The Product Detail screen has a dependency on a pre-fetched Product object
*/

type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

interface ProductDetailProps {
  route: ProductDetailRouteProp;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ route }) => {
  const { product } = route.params;
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [count, setCount] = useState<number>(0);
  const cartItem = cartItems.find(x => x.id == product.id) || {
    ...product,
    quantity: 0, // Set the initial quantity for a new item
  };

  const increment = () => {
    setCount(count + 1);
    dispatch(incrementQuantity(cartItem));
  };

  const decrement = () => {
    setCount(count - 1);
    dispatch(decrementQuantity(cartItem));
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.img }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.details}>Price: ${product.price}</Text>
      <Text style={styles.details}>Colour: {product.colour}</Text>
      <Counter count={cartItem.quantity} onIncrement={increment} onDecrement={decrement} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default ProductDetail;
