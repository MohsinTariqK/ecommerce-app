import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../../redux/cart/actions';
import { CartItem } from '../../models/cart';
import { RootState } from '../../redux/store';
import Counter from '../../components/counter';


interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // Placeholder function for checkout action
    Alert.alert('Proceed to Checkout pressed!');
  };

  const formatPrice = (price: number) => {
    return (price).toFixed(2);
  };


  const renderCartItem = ({ item }: { item: CartItem }) => {
    const { name, price, quantity } = item;

    const removeFromCartHandler = () => {
      dispatch(removeFromCart(item));
    };

    const incrementQuantityHandler = () => {
      dispatch(incrementQuantity(item));
    };

    const decrementQuantityHandler = () => {
      dispatch(decrementQuantity(item));
    };

    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>{name}</Text>
        <View style={styles.counterContainer}>
          <Counter count={quantity} onIncrement={incrementQuantityHandler} onDecrement={decrementQuantityHandler}/>
          <Text style={styles.itemPrice}>${formatPrice(price * quantity)}</Text>
        </View>
        <TouchableOpacity style={{alignItems: 'flex-end'}} onPress={removeFromCartHandler}>
          <Text style={styles.removeButton}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id.toString()}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: ${totalAmount.toFixed(2)}</Text>
            <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
              <Text style={styles.checkoutText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    itemContainer: {
      backgroundColor: '#f0f0f0',
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
    },
    counterContainer: {
      flexDirection: 'row', 
      alignItems: 'center', 
      paddingTop: 10
    },
    itemName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    itemPrice: {
      fontSize: 16,
      color: 'green',
      marginHorizontal: 10
    },
    removeButton: {
      color: 'red', 
      marginLeft: 10
    },
    totalContainer: {
      marginTop: 20,
      borderTopWidth: 1,
      borderTopColor: '#ccc',
      paddingTop: 10,
      alignItems: 'center',
    },
    totalText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    checkoutButton: {
      marginTop: 10,
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    checkoutText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
    },
  });

export default Cart;
