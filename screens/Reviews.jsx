import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


function Reviews({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.reviewCard}>
          <Text style={styles.stars}>★★★★★</Text>
          <Text style={styles.reviewText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
          <Text style={styles.username}>-User123</Text>
        </View>
        <View style={styles.reviewCard}>
          <Text style={styles.stars}>★★★★☆</Text>
          <Text style={styles.reviewText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
          <Text style={styles.username}>-User147</Text>
        </View>
        <TouchableOpacity style={styles.addButton}  onPress={() => navigation.navigate('Add Review')}>
          <Text style={styles.addButtonText}>Add review</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7E8',
    padding: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  reviewCard: {
    backgroundColor: '#DBD9D7',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  stars: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviewText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center'
  },
  username: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  addButton: {
    backgroundColor: '#FBCB04',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 20,
    right: 10,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0A262F',
  },
})
export default Reviews;