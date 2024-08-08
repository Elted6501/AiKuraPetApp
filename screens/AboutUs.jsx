import { StyleSheet, View, Text, Image } from "react-native";

function AboutUs() {
    return (
        <View style={styles.father}>
            <View style={styles.header}>
                <Text style={styles.leftAlignedText}>About AiKurapet</Text> 
                <Image source={require('../assets/logcolor.png')} style={styles.image} resizeMode='contain'/>
            </View>
            <Text style={styles.textInfo}>
                "AiKuraPet is dedicated to enhancing the health and well-being of pets by providing advanced monitoring and care solutions. Our mission is to ensure pets live healthier and longer lives by offering owners valuable insights and guidance on essential pet care. We prioritize love, compassion, and responsibility, using cutting-edge technology to collect and protect pet health data. Our commitment to transparency and animal welfare drives everything we do, making us a trusted partner for pet owners."
            </Text>
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
        backgroundColor: '#FFF7E8',
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    leftAlignedText: {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 50
    },
    image: {
        width: 125,
        height: 125,
        marginLeft: '2%',
        marginRight:'10%'
    },
    textInfo: {
        flex: 1,
        color: 'black',
        fontSize: 20,
        textAlign: 'justify',
        marginHorizontal: 30,
    },
});

export default AboutUs;