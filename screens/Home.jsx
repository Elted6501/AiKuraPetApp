import React from "react";
import { StyleSheet, Image, Text, TouchableOpacity, ScrollView } from "react-native";

function Home() {

    return (
        <ScrollView contentContainerStyle={styles.father}>
            <Image
                source={require('../assets/perroCollar.jpg')} 
                style={styles.productImage}
                resizeMode="contain"
            />
            <Text style={styles.title}>Sizes: small, medium, large </Text>
            <Text style={styles.description}>
            "The AiKuraPet Smart Collar offers real-time monitoring of your pet's heart rate, temperature, and GPS location. Its comfortable and durable design ensures reliable data tracking, keeping you informed about your pet's health and whereabouts at all times. The AiKuraPet Smart Collar is your essential tool for proactive pet care."
            </Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Get</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}


const styles = StyleSheet.create({

    father: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF7E8',
        paddingTop: 20,
        position: 'relative'
    },
    productImage: {
        marginTop:0,
        width: 250,
        height: 250,
        borderRadius: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 20,
        marginLeft:30,
        marginRight:30,
        color: '#333',
    },
    button: {
        backgroundColor: '#FBCB04',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        marginRight:30,
        alignSelf:'flex-end'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        
    },
});

export default Home;