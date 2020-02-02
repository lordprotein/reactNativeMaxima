import React, { useState } from 'react';
import { UserScreen } from './screens/userScreen';
import { ImgScreen } from './screens/imgScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Authorization } from './containers/Authorization/Authorization';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Button,
	FlatList,
	ScrollView
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';


const AuthStack = createStackNavigator(
	{
		Images: ImgScreen,
		Authorization: Authorization
	},
	{
		initialRouteName: 'Authorization'
	}
)

const TabNavigator = createBottomTabNavigator(
	{
		Users: UserScreen,
		// Images: ImgScreen,
		Auth: AuthStack,
	},
);

const AppContainer = createAppContainer(TabNavigator);

const App = () => {
	return <AppContainer />;
}







const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: '#E5E5E5',
		paddingHorizontal: 40,
		paddingVertical: 20,
	},
});

export default App;