import React from 'react';
import { useColorScheme } from 'react-native';
import { MaterialIconsPack } from './src/assets/material-icons';
import * as eva from '@eva-design/material';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './src/assets/translations.json';
import { StartMenu, TaxManager } from 'screens';
import { RootStackParamList } from 'navigation';

i18n
  .use(initReactI18next) //
  .init({
    compatibilityJSON: 'v3',
    resources: translations,
    lng: 'ru',
    react: { useSuspense: false },
    interpolation: { escapeValue: false },
  });

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const colorScheme = useColorScheme() || 'light';
  return (
    <>
      <IconRegistry icons={MaterialIconsPack} />
      <ApplicationProvider {...eva} theme={eva[colorScheme]}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="start-menu" component={StartMenu} />
            <Stack.Screen name="tax-manager" component={TaxManager} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;
