import { ImageSourcePropType } from "react-native";

export interface Product {
    id: string;
    productName: string;
    price: number;
    counter: number;
    image: ImageSourcePropType
}

export interface Store {
    list: Product[],
}

export interface Cart {
    id: string;
    price: number;
}

export interface Order {
    cart: Cart[]
    total: number;
}