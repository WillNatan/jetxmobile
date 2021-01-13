import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import StackNavigation from './StackNavigation';
import DrawerNavigation from './DrawerNavigation';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const generalOptions = {
    headerShown: false
}

const MainStack = () => {
    return ( 
        <Stack.Navigator>
            <Stack.Screen  component={LoginScreen} name="Login" options={generalOptions} />
            <Stack.Screen  component={DrawerNavigation} name="MainDrawer" options={generalOptions} />
        </Stack.Navigator>
     );
}
 
export default MainStack;