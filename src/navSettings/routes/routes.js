import { createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { UserScreen } from '../../screens/userScreen/userScreen';
import { ImgScreen } from '../../screens/imgScreen/imgScreen';
import { LoginScreen } from '../../screens/loginScreen/loginScreen';




const loginSwitch = createSwitchNavigator(
    {
        Images: ImgScreen,
        Login: LoginScreen
    },
    {
        initialRouteName: 'Login',

    }
)

export const routes = createBottomTabNavigator(
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
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 8
            },
        }
    }
);



