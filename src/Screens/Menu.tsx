import { View, FlatList, useWindowDimensions, StyleSheet } from "react-native";
import { DATA } from "../data/data";
import { Product } from "../data/models/models";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../Main/Main";
import { Card, CustomButton } from "../Components";
import { spacing } from "../theme";
import { useEffect } from "react";
import { RootStore } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts, addProduct, removeProduct } from "../Redux/product/productSlice";
import { addItemToCart, removeItemFromCart } from "../Redux/order/orderSlice";

interface Props extends StackScreenProps<RootStackParams, "Menu"> { }

interface RenderProps {
  item: Product,
}

const RenderItems = ({ item }: RenderProps) => {

  const dispatch = useDispatch()

  const add = () => {
    dispatch(addProduct(item))
    dispatch(addItemToCart({ id: item.id, price: item.price }))
  }

  const remove = () => {
    dispatch(removeProduct(item));
    dispatch(removeItemFromCart(item.id));
  }

  return (
    <View style={styles.cardContainer}>
      <Card
        id={item.id}
        increment={add}
        decrement={remove}
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
  const { order } = useSelector((state: RootStore) => state.order)

  

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
        btnText={"$" + order.total.toFixed(2).toString()}
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
