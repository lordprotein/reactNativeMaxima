import React, { useState } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { UserScreen } from './src/screens/userScreen';
import { ImgScreen } from './src/screens/imgScreen';
import { Authorization } from './src/containers/Authorization/Authorization';



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