import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DashboardDataProvider, LogsProvider, MetricsProvider } from './src/hooks';
import { Dashboard } from './src/screens/Dashboard';
import { MeasurementDetails } from './src/screens/MeasurementDetails';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Stack = createNativeStackNavigator();

  return (
    <ThemeProvider theme={theme}>
      <LogsProvider>
        <DashboardDataProvider>
          <MetricsProvider>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Dashboard">
                <Stack.Screen
                  name="Dashboard"
                  component={Dashboard}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Details"
                  component={MeasurementDetails}
                  options={{
                    headerShown: false,
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </MetricsProvider>
        </DashboardDataProvider>
      </LogsProvider>
    </ThemeProvider>
  );
}
