import { SafeAreaView, Text, View, useColorScheme } from 'react-native';

import { PropsWithChildren, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Loading from '../loading';
import { styles } from './styles';

export default function ScreenLayout({ children }: PropsWithChildren) {
  const theme = useColorScheme();
  // TODO: Put logger catch + Create error screen
  return (
    <ErrorBoundary
      fallback={
        <View>
          <Text>ERROR</Text>
        </View>
      }
      onError={(error, info) => console.log({ error, info })}>
      <Suspense fallback={<Loading />}>
        <SafeAreaView style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
          <View style={styles.box}>{children}</View>
        </SafeAreaView>
      </Suspense>
    </ErrorBoundary>
  );
}
