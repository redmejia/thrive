import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native"


const Card = () => {
    return (
        <TouchableOpacity activeOpacity={0.9} style={styles.container}>
            <ImageBackground source={require("../assets/banana.png")} resizeMode="cover" style={styles.image}>
                <View style={styles.orderCounterContainer}>
                    <View style={styles.orderCounter}>
                        <Text style={[styles.text, { fontSize: 18, fontWeight: '800' }]} > 12 </Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#000000c0', }}>
                    <Text style={styles.text}>Banana</Text>
                    <Text style={[styles.text, { fontSize: 20, fontWeight: '800' }]} >$12</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default Card;

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,

    },
    orderCounterContainer: {
        padding: 8,
        flexDirection: 'row-reverse'
    },
    orderCounter: {
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 50
    },
    image: {
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
    },
});