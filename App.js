import { StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import AppNavigation from './navigation/AppNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

  return (
    <GestureHandlerRootView>
      <AppNavigation /> 
    </GestureHandlerRootView>
  );
}