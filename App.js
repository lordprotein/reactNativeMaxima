import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { UserScreen } from './src/screens/userScreen';
import { ImgScreen } from './src/screens/imgScreen';
import { LoginScreen } from './src/screens/loginScreen';



const loginSwitch = createSwitchNavigator(
	{
		Images: ImgScreen,
		Login: LoginScreen
	},
	{
		initialRouteName: 'Login'
	}
)

const TabNavigator = createBottomTabNavigator(
	{
		Users: UserScreen,
		Login: loginSwitch,
	},
);

const AppContainer = createAppContainer(TabNavigator);

const App = () => {
	return <AppContainer />;
}


export default App;