import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Product } from '../../models/product';
import { fetchProducts } from '../../services/products';
import { ProductListNavigationProp } from '../../navigations/types';

interface ProductListProps {
    navigation: ProductListNavigationProp;
}

const ProductList: React.FC<ProductListProps> = ({ navigation }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
    .then(data => setProducts(data));
  }, []);

  const handleProductPress = (product: Product) => {
    navigation.navigate('ProductDetail', { product });
  };

  const renderProductItem = ({ item }: { item: Product }) => (
    <TouchableOpacity onPress={() => handleProductPress(item)}>
        <View style={styles.productItem}>
            <Image source={{ uri: item.img }} style={styles.productImage} />
            <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>${item.price}</Text>
                <Text style={styles.productColour}>{item.colour}</Text>
            </View>
        </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderProductItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    marginTop: 4,
  },
  productColour: {
    fontSize: 14,
    color: '#555',
  },
});

export default ProductList;
