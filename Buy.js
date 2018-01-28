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
  FlatList,
  Button
} from 'react-native';


export default class Buy extends Component<{}> {
  render() {
	return (
	  <View style={styles.container}>
		<Text style={styles.welcome}>
		</Text>
		<FlatList
		 data={[
		   {key: 'Devin'},
		   {key: 'Jackson'},
		   {key: 'James'},
		   {key: 'Joel'},
		   {key: 'John'},
		   {key: 'Jillian'},
		   {key: 'Jimmy'},
		   {key: 'Julie'},
		 ]}
		 renderItem={({item}) => <Button style={styles.item} title = {item.key} />}
	   />
	  </View>
	);
  }
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	backgroundColor: '#F5FCFF',
  },
  item: {
	marginLeft: 15,
	padding: 10,
	fontSize: 18,
	height: 44,
  },
  welcome: {
	fontSize: 20,
	textAlign: 'center',
	margin: 10,
  },
  instructions: {
	textAlign: 'center',
	color: '#333333',
	marginBottom: 5,
  },
});
