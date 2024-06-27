import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Checkout from '../Screens/Checkout';
import Menu from '../Screens/Menu';

export type RootStackParams = {
    Menu?: Object;
    Checkout?: Object;
}

const Stack = createStackNavigator<RootStackParams>();

const Main = () => {
    return (
        <Stack.Navigator>
           <Stack.Screen name='Menu' component={Menu} />
           <Stack.Screen name="Checkout" component={Checkout} />
        </Stack.Navigator>
    )
}

export default Main;