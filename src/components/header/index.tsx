import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface HeaderProps {
  title: string;
  navigation: StackNavigationProp<any, any>;
}

const Header: React.FC<HeaderProps> = ({ title, navigation }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const handleCartPress = () => {
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.cartButton} onPress={handleCartPress}>
        <Text style={styles.buttonText}>Cart</Text>
        {cartItems.length > 0 && <Text style={styles.cartItemCountBadge}> {cartItems.length} </Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonText: {
    color: '#fff'
  },
  cartButton: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  cartItemCountBadge: { 
    backgroundColor: 'red', 
    borderRadius: 20, 
    padding: 2, 
    marginHorizontal: 5, 
    color: 'white'
  }
});

export default Header;
