import React from "react";
import { View } from "react-native";
import HomeScreen from "./pages/HomeScreen";
import DetailsScreen from "./pages/DetailsScreen";

export default function App() {
    return (
        <View>
        <HomeScreen />
        <DetailsScreen />
        </View>
    );
}