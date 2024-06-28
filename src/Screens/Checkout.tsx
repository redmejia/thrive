import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { stringText } from "../constant";
import { fontSize, spacing } from "../theme";
import { CustomButton } from "../Components";

const denomination = [
  stringText.checkout.denomination.fiftycent,
  stringText.checkout.denomination.one,
  stringText.checkout.denomination.five,
  stringText.checkout.denomination.ten,
  stringText.checkout.denomination.twenty,
  stringText.checkout.denomination.fifty,
  stringText.checkout.denomination.hundred,
];

const Checkout = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.finalTotal}>{stringText.checkout.title} $</Text>
        <View style={styles.buttonContainer}>
          {denomination.map((item, index) => (
            <CustomButton
              key={index}
              btnText={`$ ${item}`}
              btnStyle={styles.button}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  button: {
    marginTop: spacing.md,
    flexBasis: "30%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  finalTotal: {
    textAlign: "right",
    fontSize: fontSize.xxl,
    fontWeight: "600",
  },
  container: {
    marginHorizontal: spacing.md + spacing.xs,
  },
});
