import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, RefreshControl } from 'react-native';
import { DataTable } from 'react-native-paper';
import usePets from '../hooks/usePets';


//me falta hacer esto bonito :c
function PetDetails() {

  const { pets } = usePets();

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  if (pets.length > 0) {
    return (
      <ScrollView style={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

        {pets.map((pet) => (
          <View style={styles.card} key={pet.id}>
            <View style={styles.header}>
              <View style={styles.profileContainer}>
                <View style={styles.profileImageContainer}>
                  <Image source={ { uri: pet.image !== null ? pet.image : 'https://res.cloudinary.com/dglqsxwon/image/upload/v1722710366/AiKuraPet/a6am5bef36yq3s13i5rv.png'  }} style={styles.profileImage} />
                  <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.nameContainer}>
                  <Text style={styles.name}>{pet.name}</Text>
                  <Text style={styles.specie}>{pet.specie}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.editButton}>
                <Image source={require('../assets/editicon.png')} style={styles.editIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Breed:</Text>
                <Text style={styles.infoText}>{pet.breed}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Age:</Text>
                <Text style={styles.infoText}>{pet.age}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Weight:</Text>
                <Text style={styles.infoText}>{pet.weight}kg</Text>
              </View>
            </View>
            <View style={styles.tableContainer}>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>Temperature</DataTable.Title>
                  <DataTable.Title>Cardiac Frequency</DataTable.Title>
                  <DataTable.Title>Date and Time</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                  <DataTable.Cell>38°C</DataTable.Cell>
                  <DataTable.Cell>70 bpm</DataTable.Cell>
                  <DataTable.Cell>2023-07-22 14:30</DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </View>

            <TouchableOpacity style={styles.downloadButton}>
              <Image source={require('../assets/downloadicon.png')} style={styles.downloadIcon} />
            </TouchableOpacity>
            
          </View>
        ))}


      </ScrollView>
    )
  } else {
    return (
      <ScrollView style={styles.container}>

      </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7E8',
    padding: 5,
  },
  card: {
    backgroundColor: '#CFCCC3',
    borderRadius: 20,
    padding: 20,
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  addButton: {
    position: 'absolute',
    bottom: 0,
    right: -15,
    backgroundColor: '#000',
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    lineHeight: 24,
  },
  nameContainer: {
    marginLeft: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  specie: {
    fontSize: 18,
  },
  editButton: {
    backgroundColor: '#DBD9D7',
    borderRadius: 50,
    padding: 10,
  },
  editIcon: {
    width: 20,
    height: 20,
  },
  infoContainer: {
    marginVertical: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  infoText: {},
  tableContainer: {
    backgroundColor: '#DBD9D7',
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
  },
  downloadButton: {
    backgroundColor: '#FBCB04',
    borderRadius: 50,
    padding: 15,
    alignSelf: 'flex-end',
  },
  downloadIcon: {
    width: 30,
    height: 30,
  },
});


export default PetDetails;