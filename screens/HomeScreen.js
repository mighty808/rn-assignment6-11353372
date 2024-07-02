import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import Products from '../components/Products';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
     <Header />
     <Products />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
