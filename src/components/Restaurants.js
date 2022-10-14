import { StyleSheet, Text, View, Image } from 'react-native';

const Restaurants = ({restaurant}) => {
  return (
    <View style={styles.container}>
        <View style={styles.imageView}>
            <Image
                source={{ uri: restaurant.image }}
                style={{ width: "100%", height: 200}}
            />
        </View>
        <View style={styles.foodDetailsBox}>
            <View style={styles.details}>
                <Text style={{fontWeight: 'bold', fontFamily: 'Roboto', fontSize: 18}}>{restaurant.name}</Text>
                <Text style={{opacity: 0.5}}>{restaurant.deliveryFee} • {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime}min</Text>
            </View>

            <View style={styles.ratings}>
                <Text>{restaurant.rating}</Text>
            </View>
            
        </View>
    </View>
  )
}

export default Restaurants

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
    //    flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
      justifyContent: 'center',
    //   borderWidth: 1,
      width: '100%',
      marginBottom: 20
    },

    imageView: {
        width: '100%',
        // borderWidth: 1,
        display: 'flex',
        alignItems: 'center'
    },

    foodDetailsBox: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: '100%',
        backgroundColor: '#F2F2F2'
    },

    details: {
        display: 'flex',
        // flex: 1,
        justifyContent: 'center',
        paddingLeft: 5,
        // borderWidth: 1,
        width: '80%',
        height: 'auto'
        // alignItems: 'center'
    },

    ratings: {
        backgroundColor: '#E0E0E0',
        width: 40,
        height: 40,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
        
    }
  });