import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import { useFonts } from 'expo-font';

const App = () => {
  const routing = useRoute(false);
  const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default App;
