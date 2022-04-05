import { StatusBar } from "expo-status-bar";
import React from "react";

// react-native
import { StyleSheet, View } from "react-native";

// react-navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Home from "./src/views/Home/Home";
import Museums from "./src/views/Museums/Museums";

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
            headerShown: false,
          }}
          component={Museums}
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
