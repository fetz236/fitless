import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from "./screens/Home"
import FitnessDetail from "./screens/FitnessDetail"

export default function RootNavigation() {
    const stack = createStackNavigator();
    const screen_options = {
        headerShown: false,
    };

    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={screen_options}>
                <stack.Screen name = "Home" component={Home}/>
                <stack.Screen name = "FitnessDetail" component={FitnessDetail}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}
