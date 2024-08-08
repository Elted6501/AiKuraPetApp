import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, RefreshControl, ScrollView } from "react-native";
import MapView from "react-native-maps";
import usePets from "../hooks/usePets";

function HomeLog({ navigation }) {

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const { pets } = usePets();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.centerContent}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      {
        pets.map((pet) => (
          <View style={styles.cardMain} key={pet.id}>

            <View style={styles.header}>

              <Image source={{ uri: pet.image }} style={styles.profileImage} />

              <View style={styles.info}>
                <Text style={styles.nameDog}>{pet.name}</Text>
                <Text style={styles.age}>{pet.age} years old</Text>
              </View>

              <View style={styles.cardStats}>
                <View style={styles.stat}>
                  <Image source={require('../assets/icontemp.png')} />
                  <Text style={styles.iconText}> 38°</Text>
                </View>
                <View style={styles.stat}>
                  <Image source={require('../assets/iconFrec.png')} style={styles.icon} />
                  <Text style={styles.iconText}> 100 Lpm</Text>
                </View>
              </View>

            </View>

            <MapView style={styles.map} />

            <View style={styles.buttons}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Walk</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.floatingButton}>
                <Image source={require('../assets/iconPuntitos.png')} style={styles.floatingButtonImage} />
              </TouchableOpacity>
            </View>

          </View>
        ))
      }
      <View style={styles.addButton}>
        <TouchableOpacity style={styles.imageBtn}
          onPress={() => navigation.navigate('Add Pet')}
        >
          <Image style={styles.img} source={require('../assets/addicon.png')} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7E8',
    padding: 5,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleNoPets: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  cardMain: {
    backgroundColor: '#CFCCC3',
    borderRadius: 20,
    width: '90%',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  info: {

  },
  nameDog: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  age: {
    fontSize: 16,
  },
  cardStats: {
    flexDirection: 'row',
    backgroundColor: '#DBD9D7',
    borderRadius: 10,
    justifyContent: 'space-between',
    padding: 10,
  },
  stat: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  iconText: {
    fontSize: 16,
  },
  map: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FBCB04',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  floatingButton: {
    borderRadius: 50,
    padding: 10,
  },
  floatingButtonImage: {
    width: 30,
    height: 30,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 150,
  },
});

export default HomeLog;