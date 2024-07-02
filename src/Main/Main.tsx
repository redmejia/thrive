import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Checkout from "../Screens/Checkout";
import Menu from "../Screens/Menu";
import { colors } from "../theme";

export type RootStackParams = {
  Menu?: Object;
  Checkout?: Object;
};

const Stack = createStackNavigator<RootStackParams>();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          cardStyle: { backgroundColor: colors.white },
          headerStyle: {
            backgroundColor: colors.white,
            borderBottomColor: "transparent",
            borderBottomWidth: 0,
            shadowOpacity: 0,
            elevation: 0,
          },
        }}
        name="Menu"
        component={Menu}
      />
      <Stack.Screen
        name="Checkout"
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Cambio",
          cardStyle: { backgroundColor: colors.white },
          headerStyle: {
            backgroundColor: colors.white,
            borderBottomColor: "transparent",
            borderBottomWidth: 0,
            shadowOpacity: 0,
            elevation: 0,
          },
        }}
        component={Checkout}
      />
    </Stack.Navigator>
  );
};

export default Main;
