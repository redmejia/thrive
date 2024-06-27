import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './store';
import Main from './src/Main/Main';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Main />
      </Provider>
    </NavigationContainer>
  );
}