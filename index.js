import { AppRegistry } from 'react-native';
import App from './App';
import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';

import Buy from './Buy'
import Read from './Read'

const ReadNavigator = TabNavigator({
	"Social Justice": {screen: Read},
	"Climate Change": {screen: Read},
	"Poverty": {screen: Read},
	"Disease": {screen: Read},
	"Education": {screen: Read}
},
{
	swipeEnabled:false,
		animationEnabled: true,
		tabBarPosition: 'top',
		tabBarOptions: {
		  scrollEnabled:true,
		},
})

const Lone = StackNavigator({
  Home: { screen: App },
  Buy: {screen: Buy},
  Read: {screen: ReadNavigator}
});




AppRegistry.registerComponent('Lone', () => Lone);
