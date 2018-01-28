import { AppRegistry } from 'react-native';
import App from './App';
import {
  StackNavigator,
} from 'react-navigation';

const Lone = StackNavigator({
  Home: { screen: App }
});


AppRegistry.registerComponent('Lone', () => Lone);
