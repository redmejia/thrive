import { View, Text, Button } from "react-native";
import { increment } from "../Redux/total/totalSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../Main/Main";
import { CustomButton } from "../Components";

interface Props extends StackScreenProps<RootStackParams, "Menu"> {}

const Menu = ({ navigation }: Props) => {
  const total = useSelector((state: RootStore) => state.total);
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: "center" }}>
        Total : {total.total}
      </Text>

      <View style={{ marginHorizontal: 10 }}>
        <CustomButton
          btnText="Check out"
          onPress={() => navigation.navigate("Checkout")}
        />
        <View style={{ margin: 10 }} />
        <CustomButton btnText="+" onPress={() => dispatch(increment())} />
      </View>
    </View>
  );
};

export default Menu;
