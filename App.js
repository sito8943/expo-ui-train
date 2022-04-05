import { StatusBar } from "expo-status-bar";
import React from "react";

// react-native
import { StyleSheet, View } from "react-native";

// react-navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Home from "./src/views/Home/Home";
import Navbar from "./src/components/Navbar/Navbar";

const Stack = createNativeStackNavigator();

const MuseumScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Home />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={Home}
        />
        <Stack.Screen
          name="Museum"
          options={{
            animationTypeForReplace: "push",
            animation: "slide_from_right",
          }}
          component={MuseumScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
