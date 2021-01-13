import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen';
import SessionsScreen from '../screens/SessionsScreen';
import SessionScreen from '../screens/SessionScreen';
import AddSession from '../screens/AddSession';
import AddValue from '../screens/AddValue';

const Stack = createStackNavigator();

const generalOptions = {
    headerShown: false
}

const StackNavigation = () => {
    return ( 
        <Stack.Navigator>
            <Stack.Screen component={HomeScreen} name="Home" options={generalOptions} />
            <Stack.Screen component={SessionsScreen} name="AllSessions" options={generalOptions} />
            <Stack.Screen component={SessionScreen} name="SingleSession" options={generalOptions} />
            <Stack.Screen component={AddSession} name="AddSession" options={generalOptions} />
            <Stack.Screen component={AddValue} name="AddValue" options={generalOptions} />
        </Stack.Navigator>
     );
}
 
export default StackNavigation;