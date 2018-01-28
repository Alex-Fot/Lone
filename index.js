import { AppRegistry } from 'react-native';
import App from './App';
import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';

import Buy from './Buy'
import Sell from './Sell'

const TransactionsNavigator = TabNavigator({
	"Buy a Loan": {screen: Buy},
	"Get a Loan": {screen: Sell}
})

const Lone = StackNavigator({
  Home: { screen: App },
  Transactions: {screen: TransactionsNavigator}
});




AppRegistry.registerComponent('Lone', () => Lone);
