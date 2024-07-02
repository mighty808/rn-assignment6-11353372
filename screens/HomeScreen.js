import { SafeAreaView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Products from '../components/Products';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
     <Header />
     <Products />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
