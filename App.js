import React, { useState } from 'react';
import { UserScreen } from './screens/userScreen';
import { ImgScreen } from './screens/imgScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Authorization } from './containers/Authorization/Authorization';



const AuthStack = createSwitchNavigator(
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
		Auth: AuthStack,
	},
);

const AppContainer = createAppContainer(TabNavigator);

const App = () => {
	return (
		<AppContainer />
	)
}



export default App;