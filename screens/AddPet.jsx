import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';
import MapView from 'react-native-maps';
import { db } from '../config/firebase';
import { collection, addDoc } from "firebase/firestore";
import useAuth from '../hooks/useAuth';
import useDogBreeds from '../hooks/useDogBreeds';
import useCatBreeds from '../hooks/useCatBreeds';
import ImageViewer from '../components/ImageViewer';

function AddPet() {
    const { user } = useAuth();
    const { breeds } = useDogBreeds();
    const { catBreeds } = useCatBreeds();
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const [name, setName] = useState('');
    const [specie, setSpecie] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [address, setAddress] = useState('');
    const [idcollar, setIdcollar] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const submitHandler = async () => {
        if (!name || !specie || !breed || !age || !weight || !address || !idcollar || !selectedImage) {
            Alert.alert('Empty fields', 'Please fill all the fields');
            return;
        }

        try {
            await addDoc(collection(db, "pets"), {
                name: name,
                specie: specie,
                breed: breed,
                age: age,
                weight: weight,
                idcollar: idcollar,
                iduser: user.uid,
                image: selectedImage,
                address: address,
                register: []
            });

            Alert.alert('Pet added successfully!');

            setName('');
            setSpecie('');
            setBreed('');
            setAge('');
            setWeight('');
            setAddress('');
            setIdcollar('');
            setSelectedImage(null);

        } catch (error) {
            console.error(error);
            Alert.alert('Pet addition failed', error.message);
        }
    };

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let _location = await Location.getCurrentPositionAsync({});
            setLocation(_location.coords);
        })();
    }, []);

    const pickImageAsync = async () => {

        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()

        if (permission) {
            let result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                quality: 1,
            });

            if (!result.canceled) {
                setSelectedImage(result.assets[0].uri);
            } else {
                Alert.alert('You did not select any image.');
            }
        } else {

            Alert.alert('This app needs permission to access your media library to select an image.');

        }

    };

    
    
    console.log(location)

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.card}>
                <ScrollView>
                    <TouchableOpacity style={styles.submitImgButton} onPress={pickImageAsync}>
                        <ImageViewer placeholderImageSource={require('../assets/addImgProfile.png')} selectedImage={selectedImage} />
                    </TouchableOpacity>

                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Age"
                        value={age}
                        onChangeText={setAge}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Weight"
                        value={weight}
                        onChangeText={setWeight}
                    />

                    <View style={styles.pickerCard}>
                        <Picker
                            selectedValue={specie}
                            onValueChange={setSpecie}
                            mode="dropdown"
                            style={styles.inputPicker}
                            itemStyle={{ fontSize: 16 }}
                        >
                            <Picker.Item label="Dog" value="Dog" />
                            <Picker.Item label="Cat" value="Cat" />
                        </Picker>


                        <Picker
                            selectedValue={breed}
                            onValueChange={setBreed}
                            mode="dropdown"
                            style={styles.inputPicker}
                            itemStyle={{ fontSize: 16 }}
                        >
                            {specie === 'Dog' ? (
                                breeds.map(breed => (
                                    <Picker.Item key={breed} label={breed} value={breed} />
                                ))) : (

                                catBreeds.map(breed => (
                                    <Picker.Item key={breed} label={breed} value={breed} />
                                ))
                            )}
                        </Picker>

                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                        value={address}
                        onChangeText={setAddress}
                    />


                    {location !== null ?? <MapView style={styles.map} initialRegion={{ latitude: location.latitude, longitude: location.longitude, latitudeDelta: 0.1, longitudeDelta: 0.1, }}/>}
                    
                    <TextInput
                        style={styles.input}
                        placeholder="ID Collar"
                        value={idcollar}
                        onChangeText={setIdcollar}
                    />
                    <TouchableOpacity style={styles.submitButton} onPress={submitHandler}>
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#FFF7E8',
        padding: 10,
        justifyContent: 'center',
    },
    card: {
        flex: 1,
        justifyContent: 'flex-start',
        margin: 5,
        backgroundColor: '#CFCCC3',
        borderRadius: 20,
        padding: 10,
        elevation: 5,
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    pickerCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputPicker: {
        backgroundColor: '#fff',
        marginVertical: 5,
        borderRadius: 5,
        width: '48%',
    },
    map: {
        height: 150,
        marginVertical: 10,
    },
    submitButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 10,
    },
    submitImgButton: {
        borderRadius: 5,
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 10,
    },
    submitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    sectionHeader: {
        fontWeight: 'bold',
        fontSize: 16,
        backgroundColor: '#F5F5F5',
        padding: 5,
        marginTop: 10,
    },
    item: {
        padding: 10,
        fontSize: 14,
    },
});

export default AddPet;