import { View, FlatList, useWindowDimensions } from "react-native";
import { DATA, StoreData } from "../data/data";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../Main/Main";
import { Card, CustomButton } from "../Components";
import { spacing } from "../theme";

interface Props extends StackScreenProps<RootStackParams, "Menu"> { }

const RenderItems = ({ item }: { item: StoreData }) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: "space-around",
      padding: 10,
    }}>
      <Card
        counter={item.counter}
        product={item.product}
        price={item.price}
        image={item.image}
      />
    </View>
  )
}

const Menu = ({ navigation }: Props) => {
  const { height } = useWindowDimensions();

  return (
    <View style={{ flex: 1, marginHorizontal: spacing.xs + spacing.md }}>

      <CustomButton
        btnText="TOTAL: $90.00"
        btnStyle={{
          position: "absolute",
          bottom: height * 0.06,
          width: "100%",
        }}
      />
      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={({ item }) => <RenderItems item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  )


};

export default Menu;
