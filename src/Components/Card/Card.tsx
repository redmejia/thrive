import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native"
import { colors, fontSize, spacing } from "../../theme";


export const Card = () => {
    return (
        <TouchableOpacity activeOpacity={0.9} style={styles.container}>
            <ImageBackground source={require("../../assets/banana.png")} resizeMode="cover" style={styles.image}>
                <View style={styles.orderCounterContainer}>
                    <View style={styles.orderCounter}>
                        <Text style={[styles.text, { fontSize: fontSize.lg, fontWeight: '800' }]} > 12 </Text>
                    </View>
                </View>
                <View style={{ backgroundColor: colors.transparent_dark, }}>
                    <Text style={styles.text}>Banana</Text>
                    <Text style={[styles.text, { fontSize: fontSize.xl, fontWeight: '800' }]} >$12</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.white,
        borderRadius: 10,

        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,

    },
    orderCounterContainer: {
        padding: spacing.sm,
        flexDirection: 'row-reverse'
    },
    orderCounter: {
        padding: spacing.sm,
        backgroundColor: colors.red,
        borderRadius: 50
    },
    image: {
        justifyContent: 'center',
    },
    text: {
        color: colors.white,
        fontSize: fontSize.xxxxxl,
        textAlign: 'center',
    },
});