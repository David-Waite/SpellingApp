import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Home from "./screens/Home";
import Settings from "./screens/Settings";
import SpellWord from "./screens/SpellWord";
import WordsLearnt from "./screens/WordsLearnt";
import WordListOverview from "./screens/WordListOverview";
import WordLists from "./screens/WordLists";
import Donate from "./screens/Donate";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GlobalStyles } from "./constants/styles";

import CoffeeBtn from "./components/ui/Home/CoffeeBtn";

const BottomTabs = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabsScreens() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        headerShadowVisible={false}
        options={({ navigation }) => ({
          headerRight: () => (
            <CoffeeBtn
              onPress={() => {
                navigation.navigate("Donate");
              }}
            />
          ),
          title: "Home",
          tabBarLabel: "Home",
          headerTitleAlign: "left",
          headerShadowVisible: false,
          headerTitleStyle: {
            color: GlobalStyles.colors.accent500,
            fontSize: 22,
            marginLeft: 10,
            fontWeight: 700,
            marginBottom: -60,
          },
          headerStyle: {
            backgroundColor: GlobalStyles.colors.primary400,
            height: 110,
          },

          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home-outline"
              size={40}
              color={GlobalStyles.colors.accent500}
            />
          ),
        })}
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
              size={40}
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
              size={40}
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
          <Stack.Screen
            name="Donate"
            component={Donate}
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
