import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Restaurants from './src/components/Restaurants';
import restaurantslist from './assets/data/restaurants.json'

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList 
        data = {restaurantslist}
        renderItem = {({item})=> <Restaurants restaurant={item} />}
        showsVerticalScrollIndicator = {false}
      />
      {/* <Restaurants /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 25
  },
});
