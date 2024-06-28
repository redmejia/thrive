import { View, FlatList, useWindowDimensions, StyleSheet } from "react-native";
import { DATA, Product } from "../data/data";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../Main/Main";
import { Card, CustomButton } from "../Components";
import { spacing } from "../theme";
import { useEffect } from "react";
import { RootStore } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts, addProduct, removeProduct } from "../Redux/product/productSlice";

interface Props extends StackScreenProps<RootStackParams, "Menu"> {}

interface RenderProps {
  item: Product,
}

const RenderItems = ({ item }: RenderProps) => {

  const dispatch = useDispatch()

  return (
    <View style={styles.cardContainer}>
      <Card
        id={item.id}
        increment={() => dispatch(addProduct(item))}
        decrement={() => dispatch(removeProduct(item))}
        counter={item.counter}
        productName={item.productName}
        price={item.price}
        image={item.image}
      />
    </View>
  );
};

const Menu = ({ navigation }: Props) => {
  const { height } = useWindowDimensions();

  const products = useSelector((state: RootStore) => state.products.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadProducts(DATA))
  }, [dispatch])


  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products.list}
        numColumns={2}
        renderItem={({ item }) => <RenderItems item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: height * 0.2 }}
      />
      <CustomButton
        btnText="TOTAL: $90.00"
        btnStyle={{
          position: "absolute",
          bottom: height * 0.06,
          width: "100%",
        }}
        onPress={() => navigation.navigate("Checkout")}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: "space-around",
    padding: 10,
  },
  container: {
    flex: 1,
    marginHorizontal: spacing.xs + spacing.md,
  },
});
