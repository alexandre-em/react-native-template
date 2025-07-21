import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { jwtDecode } from 'jwt-decode';
import { lazy, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BottomNavbar from './components/layouts/bottom-navbar';
import ScreenLayout from './components/layouts/screens';
import { storageKeys } from './constants/storage';
import { authSlice, selectAccessToken } from './store/reducers/auth';

const Tab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();

function LoginStack() {
  const AuthScreen = lazy(() => import('./screens/auth'));

  return (
    <AuthStack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }} screenLayout={ScreenLayout}>
      <AuthStack.Screen name="Auth" component={AuthScreen} />
      {/* TODO: Register screen */}
      {/* Forget password screen */}
      {/* Google auth callback screen */}
    </AuthStack.Navigator>
  );
}

function AuthenticatedStack() {
  const HomeScreen = lazy(() => import('./screens/home'));

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      screenLayout={ScreenLayout}
      tabBar={BottomNavbar}>
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* TODO: Track screen */}
      {/* Trip list screen */}
      {/* Profile screen */}
      {/* Settings screen */}
    </Tab.Navigator>
  );
}

export default function Router() {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!accessToken) {
      AsyncStorage.getItem(storageKeys.ACCESS_TOKEN).then(res => {
        if (!res) setIsAuthenticated(false);
        else {
          const decodedToken = jwtDecode(res);
          const now = Date.now() / 1000;
          if (decodedToken.exp && decodedToken.exp > now) {
            dispatch(authSlice.actions.addAccessTokenHeader(res));
            setIsAuthenticated(true);
          } else setIsAuthenticated(false);
        }
      });
    } else {
      setIsAuthenticated(true);
    }
  }, [accessToken, dispatch]);

  return <NavigationContainer>{isAuthenticated ? <AuthenticatedStack /> : <LoginStack />}</NavigationContainer>;
}
