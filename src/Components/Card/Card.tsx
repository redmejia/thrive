import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ImageSourcePropType } from "react-native"
import { colors, fontSize, spacing } from "../../theme";
import { CustomButton } from "../CustomButton";
import { Product } from "../../data/models/models";


interface Props extends Product {
    increment: () => void;
    decrement: () => void;
}

export const Card = (props: Props) => {

    const { id, image, price, productName, counter, decrement, increment } = props

    return (
        <TouchableOpacity activeOpacity={0.9} style={styles.container} key={id}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.orderCounterContainer}>
                    <View style={{ ...styles.orderCounter, backgroundColor: counter > 0 ? colors.red : 'transparent' }}>
                        <Text style={[styles.text, { fontSize: fontSize.lg, fontWeight: '800' }]} > {counter} </Text>
                    </View>
                </View>
                <View style={{ backgroundColor: colors.transparent_dark, }}>
                    <Text style={{ ...styles.text, fontWeight: '400' }}>{productName}</Text>
                    <Text style={[styles.text, { fontSize: fontSize.xl, fontWeight: '500' }]} >$ {price}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 20, }}>
                    {counter !== 0 &&
                        // add disable props for custom button
                        <CustomButton
                            onPress={decrement}
                            btnText="-"
                            btnStyle={{ width: '50%' }}
                            btnTextStyle={{ color: colors.white, fontWeight: '900' }}
                        />
                    }

                    <View style={{ padding: 4 }} />
                    <CustomButton
                        onPress={increment}
                        btnText="+"
                        btnStyle={{ backgroundColor: colors.dark_blue, width: '50%' }}
                        btnTextStyle={{ color: colors.white, fontWeight: '900' }}
                    />
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
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    text: {
        color: colors.white,
        fontSize: fontSize.xxxxxl,
        textAlign: 'center',
    },
});