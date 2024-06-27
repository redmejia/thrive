import { View, Text, Button } from "react-native"
import { increment } from "../Redux/total/totalSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../Main/Main";


interface Props extends StackScreenProps<RootStackParams, 'Menu'> { }

const Menu = ({ navigation }: Props) => {

    const total = useSelector((state: RootStore) => state.total)
    const dispatch = useDispatch();

    return (
        <View>
            <Text style={{ fontSize: 30, textAlign: 'center' }} >Total : {total.total}</Text>
            <Button
                title="+"
                onPress={() => dispatch(increment())}
            />
            <Button
                title="Check out"
                onPress={() => navigation.navigate('Checkout')}
            />
        </View>
    )
}

export default Menu;