import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { store } from "./src/store";
import MainNavigator from "./src/navigator/MainNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Provider store={store}>
          <MainNavigator />
        </Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
