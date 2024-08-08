import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../config/firebase";

function LogInApp({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (email && password) {
            try {
                signInWithEmailAndPassword(auth, email, password).catch((error) => {
                    alert(error.message);
                });
            } catch (error) {
                console.log(error);
            }
        } else {
            alert('Email or password is empty');
        }
    }

    return (
        <View style={styles.father}>
            <View style={styles.card}>
                <Image source={require('../assets/loginimg.png')} style={styles.login} />

                <Text style={styles.leftAlignedText}>Username</Text>
                <View style={styles.textBox}>
                    <TextInput placeholder="Enter your username" style={{ paddingHorizontal: 15, color: '#fffff' }}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>

                <Text style={styles.leftAlignedText}>Password</Text>
                <View style={styles.textBox}>
                    <TextInput placeholder="Enter your password" style={{ paddingHorizontal: 15, color: '#B0B9BC' }} secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>

                <TouchableOpacity>
                    <Text style={styles.underlineText}>Forgot password?</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button} >
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>

                <View style={styles.containerCreate}>
                    <Text style={styles.text}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>

                        <Text style={styles.text2}> Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F8FF',
        padding: 20,
    },
    father: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF7E8'
    },
    leftAlignedText: {
        alignSelf: 'flex-start',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 20
    },
    login: {
        width: 100,
        height: 100,
        marginBottom: 30,
        marginTop: 50
    },
    card: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 200,
        margin: 40,
        backgroundColor: '#043C6C',
        borderRadius: 20,
        width: '90%',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    card2: {
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textBox: {
        paddingVertical: 20,
        backgroundColor: "white",
        borderRadius: 10,
        marginVertical: 10,
        width: '90%'
    },
    underlineText: {
        textDecorationLine: 'underline',
        color: 'white',
        textAlign: 'right',
        marginStart: 170
    },
    containerCreate: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },
    text2: {
        color: '#FBCB04',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#FBCB04',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Ensures the content is centered horizontally
    },
    buttonText: {
        color: '#0A262F',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center', // Ensures the text is centered
        flex: 1 // Ensures the Text component takes up all available space within the TouchableOpacity
    }
});

export default LogInApp;
