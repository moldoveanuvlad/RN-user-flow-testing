import { MD3LightTheme as DefaultTheme, PaperProvider, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LotteryComponent from './components/Lottery';
import PlayerLevelComponent from './components/PlayerLevel';
import HomeComponent from './components/Home';
import BudgetComponent from './components/Budget';
import BudgetL1Component from './components/BudgetL1';
import BudgetL2Component from './components/BudgetL2';
import BudgetL3Component from './components/BudgetL3';
import BudgetL4Component from './components/BudgetL4';
import OrderConfirmationComponent from './components/OrderConfirmation';

export default function App() {
  const Stack = createNativeStackNavigator();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#3498db",
      secondary: "#f1c40f",
    },
  };

  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeComponent} options={{ headerShown: false }}/>
          <Stack.Screen name="PlayerLevel" component={PlayerLevelComponent} options={{ headerShown: false }}/>
          <Stack.Screen name="Lottery" component={LotteryComponent} options={{ headerShown: false }}/>          
          <Stack.Screen name="Budget" component={BudgetComponent} options={{ headerShown: false }}/>          
          <Stack.Screen name="BudgetL1" component={BudgetL1Component} options={{ headerShown: false }}/>          
          <Stack.Screen name="BudgetL2" component={BudgetL2Component} options={{ headerShown: false }}/>          
          <Stack.Screen name="BudgetL3" component={BudgetL3Component} options={{ headerShown: false }}/>          
          <Stack.Screen name="BudgetL4" component={BudgetL4Component} options={{ headerShown: false }}/>          
          <Stack.Screen name="OrderConfirmation" component={OrderConfirmationComponent} options={{ headerShown: false }}/>          
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
