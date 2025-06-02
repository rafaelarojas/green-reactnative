import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando as telas
import FirstOnboarding from './app/FirstOnboarding';
import SecondOnboarding from './app/SecondOnboarding';
import AuthLandingScreen from './app/AuthLandingScreen';
import Login from './app/Login';
import ForgotPassword from './app/ForgotPassword';
import ResetPassword from './app/ResetPassword';
import Home from './app/Home'; 
import Feed from './app/Feed';
import Camera from './app/CameraScreen';
import Post from './app/PostScreen';
import RecipeDetails from './app/RecepeDetails';
import Favoritos from './app/Favoritos';
import Notificacoes from './app/Notificacoes';
import Configuracoes from './app/Configuracoes';

import { FeedContext } from './context/FeedContext';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FeedContext>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Onboarding" component={FirstOnboarding} />
          <Stack.Screen name="Onboarding2" component={SecondOnboarding} />
          <Stack.Screen name="AuthLanding" component={AuthLandingScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="Feed" component={Feed} />
          <Stack.Screen name="Camera" component={Camera} />
          <Stack.Screen name="Post" component={Post} />
          <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
          <Stack.Screen name="Favoritos" component={Favoritos} />
          <Stack.Screen name="Notificacoes" component={Notificacoes} />
          <Stack.Screen name="Configuracoes" component={Configuracoes} />

        </Stack.Navigator>
      </NavigationContainer>
    </FeedContext>
  );
}
