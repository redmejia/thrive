import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { stringText } from "../constant";
import { colors, fontSize, spacing } from "../theme";
import { CustomButton } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import { resetOrderCart } from "../Redux/order/orderSlice";
import { clearProductCounter } from "../Redux/product/productSlice";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../Main/Main";
import { useState } from "react";

const denomination = [
  stringText.checkout.denomination.fiftycent,
  stringText.checkout.denomination.one,
  stringText.checkout.denomination.five,
  stringText.checkout.denomination.ten,
  stringText.checkout.denomination.twenty,
  stringText.checkout.denomination.fifty,
  stringText.checkout.denomination.hundred,
];

interface Props extends StackScreenProps<RootStackParams, "Checkout"> {}
const Checkout = ({ navigation }: Props) => {
  const { order } = useSelector((state: RootStore) => state.order);
  let total = order.total.toFixed(2);

  const [amount, setAmount] = useState("");
  const [clientChange, setClientChange] = useState(0);
  const [incompleteTRX, setIsIncompleteTRX] = useState(false);

  const dispatch = useDispatch();

  const changeCalculation = () => {
    if (Number(Number(amount) < Number(total))) {
      setClientChange(Number(amount) - Number(total));
      setIsIncompleteTRX(true);
    }
    setClientChange(Number(amount) - Number(total));
  };

  const newOrder = () => {
    dispatch(clearProductCounter());
    dispatch(resetOrderCart());
    navigation.navigate("Menu");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            {denomination.map((item, index) => (
              <CustomButton
                key={index}
                btnText={`$ ${item}`}
                btnStyle={styles.button}
                onPress={() => {
                  if (Number(Number(item) < Number(total))) {
                    setClientChange(Number(item) - Number(total));
                    setIsIncompleteTRX(true);
                  }
                  setClientChange(Number(item) - Number(total));
                }}
              />
            ))}
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setAmount(value)}
              placeholder={stringText.placeholder}
              keyboardType="numeric"
              placeholderTextColor={"black"}
            />
            <View style={{ margin: 10 }} />
            <CustomButton
              onPress={changeCalculation}
              btnText={"Cambio"}
              btnStyle={styles.btnCambio}
            />
          </View>
          <View style={{ marginVertical: 24 }}>
            <View style={styles.lineDivider} />
            <View style={styles.totalContainer}>
              <Text style={styles.finalTotal}>{stringText.checkout.title}</Text>
              <Text style={styles.finalTotal}>${total} </Text>
            </View>
            <View style={styles.lineDivider} />
            {(incompleteTRX && (
              <View style={styles.totalContainer}>
                <Text style={styles.finalTotal}>{"Completar Cargo De"}</Text>
                <Text style={styles.finalTotal}>
                  ${Math.abs(clientChange).toFixed(2)}{" "}
                </Text>
              </View>
            )) || (
              <View style={styles.totalContainer}>
                <Text style={styles.finalTotal}>{stringText.change}</Text>
                <Text style={styles.finalTotal}>
                  ${clientChange.toFixed(2)}{" "}
                </Text>
              </View>
            )}
            <View
              style={{
                height: StyleSheet.hairlineWidth,
                backgroundColor: colors.dark_blue,
              }}
            />
          </View>
          <CustomButton
            onPress={newOrder}
            btnText={"Nueva Orden"}
            btnStyle={styles.btnNewOrder}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    flex: 1,
    marginHorizontal: spacing.md + spacing.xs,
  },
});
