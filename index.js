import { AppRegistry } from 'react-native';
import App from './App';
import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';

import Buy from './Buy'
import Read from './Read'
import Social from './Social'

const ReadNavigator = TabNavigator({
	"Climate Change": {screen: Read},
	"Social Justice": {screen: Social},
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
