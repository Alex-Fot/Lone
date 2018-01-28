/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

export default class App extends Component<{}> {
  render() {
	return (
	  <View style={styles.container}>
	  <Image source={require('./lonewolf.png')} style = {styles.image} />
		<Text style={styles.welcome}>
		  Welcome to Lone!
		</Text>
		<Text style={styles.text}>
		  This is a mobile application that is designed to allow you to invest in public projects.
		</Text>
		<Text style={styles.text}>
		  Your ROI will not be as high as other traditional forms of investment and is much riskier. This application is for those who are only interested social impact of their investments.
		</Text>
		<Button onPress={() => this.props.navigation.navigate('Read')} title="Read"></Button>
		<Text>{"\n"}</Text>
		<Button onPress={() => this.props.navigation.navigate('Buy')} title="Buy"></Button>

	  </View>
	);
  }
}

const styles = StyleSheet.create({
	container: {
	  flex: 3,
	  justifyContent: 'flex-start',
	  alignItems: 'center',
	  backgroundColor: '#F5FCFF',
	},
  welcome: {
	fontSize: 25,
	textAlign: 'center',
	margin: 10,
  },
  text: {
   fontSize: 15,
   textAlign: 'center',
   margin: 10,
  },
  image: {
	  marginTop: 3,
	  height: '35%',
	  width: '75%',
	  resizeMode: "contain",
	  backgroundColor: '#F5FCFF',
  },
});
