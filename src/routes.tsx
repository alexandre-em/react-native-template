import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PropsWithChildren, Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Loading from './components/layouts/loading';

const AuthScreen = lazy(() => import('./screens/auth'));

const RootStack = createNativeStackNavigator();

function ScreenLayout({ children }: PropsWithChildren) {
  // TODO: Put logger catch
  return (
    <ErrorBoundary fallback={<View />} onError={(error, info) => console.log({ error, info })}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default function Router() {
  return (
    <NavigationContainer>
      <Text>Test</Text>
      <RootStack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }} screenLayout={ScreenLayout}>
        <RootStack.Group>
          <RootStack.Screen name="login" component={AuthScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
