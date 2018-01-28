import { AppRegistry } from 'react-native';
import App from './App';
import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';

import Buy from './Buy'
import Read from './Read'
import Social from './Social'
import Climate from './Climate'
import Education from './Education'
import Poverty from './Poverty'
import Disease from './Disease'
const ReadNavigator = TabNavigator({
	"Climate Change": {screen: Climate},
	"Social Justice": {screen: Social},
	"Poverty": {screen: Poverty},
	"Disease": {screen: Disease},
	"Education": {screen: Education}
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
