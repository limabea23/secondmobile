import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./../secondmobile/pages/HomeScreen";
import DetalhesScreen from "./../secondmobile/pages/DetailsScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Detalhes" component={DetalhesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}