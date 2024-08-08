import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import StackNavigationPets from "../components/StackNavigationPets";
import StackNavigationRev from "../components/StackNavigationRev";
import { Text } from "react-native";

import Home from "../screens/Home";
import AboutUs from "../screens/AboutUs";
import PetDetails from "../screens/PetDetails";
import LogInApp from "../screens/LogInApp";
import SignupApp from "../screens/SignupApp";
import useAuth from "../hooks/useAuth";
import { TouchableOpacity } from "react-native-gesture-handler";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const HandleSignOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
}

function AppNavigation() {

  const { user } = useAuth();

  if (user) {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Get product" component={Home} />
          <Drawer.Screen name="About us" component={AboutUs} />
          <Drawer.Screen name="Reviews" component={StackNavigationRev} />
          <Drawer.Screen name="Pets" component={StackNavigationPets} />
          <Drawer.Screen name="Pet Details" component={PetDetails} />
          <Drawer.Screen name="Log Out"  component={HandleSignOut} options={
            {
              drawerLabel: "Log Out",
              drawerLabelStyle: { 
                color: 'red',
              }
            }
          }/>
        </Drawer.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Log In">
          <Stack.Screen name="Log In" component={LogInApp} options={{ title: '' }} />
          <Stack.Screen name="Sign Up" component={SignupApp} options={{ title: '' }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
};

export default AppNavigation;