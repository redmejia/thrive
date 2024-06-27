import { View, Text, useWindowDimensions } from "react-native";
import { increment } from "../Redux/total/totalSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../Main/Main";
import { CustomButton } from "../Components";
import { spacing } from "../theme";

interface Props extends StackScreenProps<RootStackParams, "Menu"> {}

const Menu = ({ navigation }: Props) => {
  const total = useSelector((state: RootStore) => state.total);
  const dispatch = useDispatch();
  const { height } = useWindowDimensions();

  return (
    <View style={{ flex: 1, marginHorizontal: spacing.xs + spacing.md }}>
      <Text style={{ fontSize: 30, textAlign: "center" }}>
        Total : {total.total}
      </Text>

      <View>
        <CustomButton
          btnText="Check out"
          onPress={() => navigation.navigate("Checkout")}
        />
        <View style={{ margin: 10 }} />
        <CustomButton btnText="+" onPress={() => dispatch(increment())} />
      </View>
      <CustomButton
        btnText="TOTAL: $90.00"
        btnStyle={{
          position: "absolute",
          bottom: height * 0.06,
          width: "100%",
        }}
      />
    </View>
  );
};

export default Menu;
