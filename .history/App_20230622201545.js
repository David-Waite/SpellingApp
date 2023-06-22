import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Home from "./screens/Home";
import Settings from "./screens/Settings";
import SpellWord from "./screens/SpellWord";
import WordsLearnt from "./screens/WordsLearnt";
import WordListOverview from "./screens/WordListOverview";
import WordLists from "./screens/WordLists";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GlobalStyles } from "./constants/styles";
import { Image } from "react-native";
import { ImageBackground } from "react-native";

const BottomTabs = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabsScreens() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarLabel: "Home",
          headerTitleAlign: "left",
          headerTitleStyle: {
            color: GlobalStyles.colors.accent500,
          },

          headerStyle: {
            height: 125, // Specify the height of your custom header
          },

          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home-outline"
              size={size}
              color={GlobalStyles.colors.accent500}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="WordLists"
        component={WordLists}
        options={{
          title: "Word Lists",
          tabBarLabel: "Lists",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="list-outline"
              size={size}
              color={GlobalStyles.colors.accent500}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="settings-outline"
              size={size}
              color={GlobalStyles.colors.accent500}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BottomTabsScreen"
            component={BottomTabsScreens}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="WordsLearnt"
            component={WordsLearnt}
            options={{ presentation: "modal" }}
          />
          <Stack.Screen name="WordListOverview" component={WordListOverview} />
          <Stack.Screen
            name="SpellWord"
            component={SpellWord}
            options={{ presentation: "modal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
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
