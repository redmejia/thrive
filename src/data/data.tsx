import { ImageSourcePropType } from "react-native";

export interface Product {
  id: string;
  productName: string;
  price: number;
  counter: number;
  image: ImageSourcePropType
}

export interface Store {
  list: Product[]
}
// DO NOT DELETE THIS FILE OR DATA OBJECT.
// Note: The file data.tsx contain the Store products information need for Thrive app display information on the Menu and Checkout Screens.
// The id MUST  unique identifier if you use a number increment by one 1,2,3 ..., or use unique string description uuid recomended.
export const DATA: Store = {
  list: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      productName: 'Banana',
      price: 1.50,
      counter: 0,
      image: require('../assets/banana.png')
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      productName: 'Cherry',
      price: 2.50,
      counter: 0,
      image: require('../assets/banana.png')
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      productName: 'Apple',
      price: 1.25,
      counter: 0,
      image: require('../assets/banana.png')
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29das',
      productName: 'Mango',
      price: 1.50,
      counter: 0,
      image: require('../assets/banana.png')
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e2901',
      productName: 'Milk',
      price: 2.90,
      counter: 0,
      image: require('../assets/banana.png')
    },
  ]
};