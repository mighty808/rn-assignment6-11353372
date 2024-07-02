import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Products() {
  const navigation = useNavigation();

  const addToCart = async (item) => {
    try {
      const cart = await AsyncStorage.getItem('cart');
      let cartItems = cart ? JSON.parse(cart) : [];
      cartItems.push(item);
      await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
      navigation.navigate('Cart');
    } catch (error) {
      console.error("Error adding to cart: ", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={wear}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ margin: 10 }}>
            <Image source={item.image} />
            <TouchableOpacity onPress={() => addToCart(item)}>
              <Image style={styles.plusIcon} source={require('../assets/plus.png')} />
            </TouchableOpacity>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.kind}>{item.kind}</Text>
            <Text style={{ color: "red", fontSize: 18 }}>{item.price}</Text>
          </View>
        )}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const wear = [
  { id: 1, image: require('../assets/dress1.png'), name: 'Office Wear', kind: 'reversible angora cardigan', price: '$120' },

  { id: 2, image: require('../assets/dress2.png'), name: 'Black Wear', kind: 'reversible angora cardigan', price: '$120' },

  { id: 3, image: require('../assets/dress3.png'), name: 'Church Wear', kind: 'reversible angora cardigan', price: '$120' },

  { id: 4, image: require('../assets/dress4.png'), name: 'Lamerei Wear', kind: 'reversible angora cardigan', price: '$120' },

  { id: 5, image: require('../assets/dress5.png'), name: '21WN Wear', kind: 'reversible angora cardigan', price: '$120' },

  { id: 6, image: require('../assets/dress6.png'), name: 'Lopo Wear', kind: 'reversible angora cardigan', price: '$120' },

  { id: 7, image: require('../assets/dress7.png'), name: '21WNT Wear', kind: 'reversible angora cardigan', price: '$120' },
  
  { id: 8, image: require('../assets/dress3.png'), name: 'lame Wear', kind: 'reversible angora cardigan', price: '$120' },
];

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  productContainer: {
    marginVertical: 20,
  },
  imageContainer: {
    position: 'relative',
  },
  plusIcon: {
    position: 'absolute',
    top: -40,
    right: 10,
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 18,
    marginTop: 5,
    fontWeight: 'bold',
  },
  kind: {
    fontSize: 13,
    color: 'gray',
  },
  price: {
    fontSize: 23,
    color: 'red',
  },
});
