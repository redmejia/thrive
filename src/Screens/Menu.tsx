import { View, Text, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../Redux/total/totalSlice";
import { RootStore } from "../../store";


const Orders = () => {

    const total = useSelector((state: RootStore) =>state.total)
    const dispatch = useDispatch();

    return(
        <View>
            <Text style={{fontSize: 30, textAlign:'center'}} >Total : {total.total}</Text>
           <Button 
                title="+"
                onPress={()=> dispatch(increment())}
           />
        </View>
    )
}

export default Orders;