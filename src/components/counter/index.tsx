import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';


interface CounterProps {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
  }

const Counter: React.FC<CounterProps> = ({ count, onIncrement, onDecrement }) => {
    const handleDecrement = () => {
        if (count > 0) {
            onDecrement();
        }
    };

    return (
        <View style={styles.container}>
          <TouchableOpacity 
            onPress={handleDecrement}
            style={styles.button} >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{count}</Text>
          <TouchableOpacity 
            onPress={onIncrement}
            style={styles.button} >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    text: {
        fontSize: 18,
        padding: 10
    },
    button: {
      backgroundColor: 'red',
      padding: 10,
      width: 40,
      borderRadius: 8
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold'
    }
  });

  export default Counter;