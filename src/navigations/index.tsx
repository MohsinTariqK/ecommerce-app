import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from '../screens/product-listing';
import ProductDetail from '../screens/product-detail';
import Cart from '../screens/cart';
import { RootStackParamList } from './types';
import Header from '../components/header';

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator 
            screenOptions={{
                header: ({ navigation }) => (
                  <Header
                    title="Ecommerce App"
                    navigation={navigation}
                  />
                ),
              }}>
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default Navigation;