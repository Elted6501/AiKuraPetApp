import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { auth, db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

function SignupApp() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async () => {
    if (!name || !phone || !address || !email || !password || !confirmPassword) {
        Alert.alert('Please fill all the fields');
        return;
    }

    if (password !== confirmPassword) {
        Alert.alert('Passwords do not match');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        Alert.alert('Invalid email format');
        return;
    }

    if (password.length < 6) {
        Alert.alert('Password should be at least 6 characters');
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await addDoc(collection(db, "users"), {
            name: name,
            phone: phone,
            address: address,
            email: email,
            uid: user.uid,
            pets: []
        });

        Alert.alert('Sign up successful!');
    } catch (error) {
        console.log(error);
        Alert.alert('Sign up failed', error.message);
    }
};
    return (
        <View style={styles.father}>
            <View style={styles.card}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}>

                    <ScrollView style={styles.ScrollView} >
                        <Text style={styles.leftAlignedText}>Name</Text>
                        <View style={styles.textBox}>
                            <TextInput placeholder="Enter your name" value={name} onChangeText={value => setName(value)} style={{ paddingHorizontal: 15, color: '#B0B9BC' }} />
                        </View>

                        <Text style={styles.leftAlignedText}>Phone</Text>
                        <View style={styles.textBox}>
                            <TextInput placeholder="Enter your phone" value={phone} onChangeText={value => setPhone(value)} style={{ paddingHorizontal: 15, color: '#B0B9BC' }} keyboardType="numeric" maxLength={10} />
                        </View>

                        <Text style={styles.leftAlignedText}>Address</Text>
                        <View style={styles.textBox}>
                            <TextInput placeholder="Enter your address" value={address} onChangeText={value => setAddress(value)} style={{ paddingHorizontal: 15, color: '#B0B9BC' }} />
                        </View>

                        <Text style={styles.leftAlignedText}>Email</Text>
                        <View style={styles.textBox}>
                            <TextInput placeholder="Enter your email" value={email} onChangeText={value => setEmail(value)} style={{ paddingHorizontal: 15, color: '#B0B9BC' }} keyboardType="email-address" />
                        </View>

                        <Text style={styles.leftAlignedText}>Password</Text>
                        <View style={styles.textBox}>
                            <TextInput placeholder="Enter your password" value={password} onChangeText={value => setPassword(value)} style={{ paddingHorizontal: 15, color: '#B0B9BC' }} secureTextEntry={true} />
                        </View>

                        <Text style={styles.leftAlignedText}>Confirm password</Text>
                        <View style={styles.textBox}>
                            <TextInput placeholder="Confirm your password" value={confirmPassword} onChangeText={value => setConfirmPassword(value)} style={{ paddingHorizontal: 15, color: '#B0B9BC' }} secureTextEntry={true} />
                        </View>

                        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                            <Text style={styles.buttonText}>Sign in</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#043C6C',
        width: '100%',
    },
    ScrollView: {
        width: '100%'
        
    },
    father: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF7E8',
        width: '100%',
    },
    leftAlignedText: {
        alignSelf: 'flex-start',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 20,
        marginTop: 10,
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
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        overflow: 'hidden', 
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
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textBox: {
        paddingVertical: 20,
        backgroundColor: "white",
        borderRadius: 10,
        marginVertical: 10,
        width: '90%',
        alignSelf: 'center',
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
        justifyContent: 'center', 
        alignSelf: 'center',
    },
    buttonText: {
        color: '#0A262F',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center', 
        flex: 1 
    }
});


export default SignupApp;