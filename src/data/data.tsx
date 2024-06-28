import { ImageSourcePropType } from "react-native";

export interface StoreData {
    id: string;
    product: string;
    price: number;
    counter: number;
    image: ImageSourcePropType
  }
  
  export const DATA: StoreData[] = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      product: 'Banana',
      price: 1.50,
      counter: 0,
      image: require('../assets/banana.png')
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      product: 'Cherry',
      price: 2.50,
      counter: 0,
      image: require('../assets/banana.png')
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      product: 'Apple',
      price: 1.25,
      counter: 3,
      image: require('../assets/banana.png')
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29das',
      product: 'Mango',
      price: 1.50,
      counter: 0,
      image: require('../assets/banana.png')
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e2901',
      product: 'Milk',
      price: 2.90,
      counter: 1,
      image: require('../assets/banana.png')
    },
  
  ];