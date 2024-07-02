import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { stringText } from "../constant";
import { colors, fontSize, spacing } from "../theme";
import { CustomButton } from "../Components";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";

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
  const { order } = useSelector((state: RootStore) => state.order);
  let total = order.total.toFixed(2);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          {denomination.map((item, index) => (
            <CustomButton
              key={index}
              btnText={`$ ${item}`}
              btnStyle={styles.button}
            />
          ))}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={stringText.placeholder}
            keyboardType="numeric"
            placeholderTextColor={"black"}
          />
          <View style={{ margin: 10 }} />
          <CustomButton btnText={"Cambio"} btnStyle={styles.btnCambio} />
        </View>
        <View style={{ marginVertical: 24 }}>
          <View style={styles.lineDivider} />
          <View style={styles.totalContainer}>
            <Text style={styles.finalTotal}>{stringText.checkout.title}</Text>
            <Text style={styles.finalTotal}>${total} </Text>
          </View>
          <View style={styles.lineDivider} />
          <View style={styles.totalContainer}>
            <Text style={styles.finalTotal}>{stringText.change}</Text>
            <Text style={styles.finalTotal}>${} </Text>
          </View>
          <View
            style={{
              height: StyleSheet.hairlineWidth,
              backgroundColor: colors.dark_blue,
            }}
          />
        </View>
        <CustomButton btnText={"Nueva Orden"} btnStyle={styles.btnNewOrder} />
      </View>
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  btnNewOrder: {
    marginTop: spacing.md,
    backgroundColor: colors.light_blue,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: spacing.lg,
  },
  lineDivider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.dark_blue,
  },
  btnCambio: {
    marginTop: spacing.md,
    backgroundColor: colors.light_blue,
  },
  input: {
    marginTop: spacing.md,
    padding: spacing.md,
    backgroundColor: colors.light_grey,
    borderRadius: 25,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    marginVertical: spacing.lg,
  },
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
    fontSize: fontSize.xxl,
    fontWeight: "600",
  },
  container: {
    marginHorizontal: spacing.md + spacing.xs,
  },
});
