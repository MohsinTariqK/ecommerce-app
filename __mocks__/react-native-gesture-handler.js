import React from 'react';
import { View } from 'react-native';

// Mock the gesture handler components
export const PanGestureHandler = ({ children, ...props }) => {
  return <View {...props}>{children}</View>;
};

export const TapGestureHandler = ({ children, ...props }) => {
  return <View {...props}>{children}</View>;
};