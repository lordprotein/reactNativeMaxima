import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { UserScreen } from './src/screens/userScreen/userScreen';
import { ImgScreen } from './src/screens/imgScreen/imgScreen';
import { LoginScreen } from './src/screens/loginScreen/loginScreen';



const loginSwitch = createSwitchNavigator(
	{
		Images: ImgScreen,
		Login: LoginScreen
	},
	{
		initialRouteName: 'Login',

	}
)

const TabNavigator = createBottomTabNavigator(
	{
		Users: UserScreen,
		Images: loginSwitch,
	},
	{
		tabBarOptions: {
			activeTintColor: '#2296f3',
			labelStyle: {
				fontSize: 20,
			},
			style: {
				justifyContent: "center",
				alignItems: "center",
				paddingBottom: 8
			},
		}
	}
);

const AppContainer = createAppContainer(TabNavigator);

const App = () => {
	return <AppContainer />;
}


export default App;