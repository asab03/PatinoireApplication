import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ConnectionScreen from "./src/screens/ConnectionScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#51A3A3" },
          headerTintColor: "#FFF",
        }}
      >
        <Stack.Screen name="Connection" component={ConnectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6A8D92",
    alignItems: "center",
    justifyContent: "center",
  },
});
