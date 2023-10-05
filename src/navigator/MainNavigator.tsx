import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";

const Main = createStackNavigator();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Main.Screen component={MainScreen} name="Main" />
    </Main.Navigator>
  );
};

export default MainNavigator;
