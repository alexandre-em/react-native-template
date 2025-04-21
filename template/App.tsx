import { Appearance, StatusBar, StyleSheet, Text, View, useColorScheme } from 'react-native';

import { GluestackUIProvider } from '@gluestack-ui/themed';
import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider as StoreProvider } from 'react-redux';

import { config } from './src/lib/gluestack-ui';
import Router from './src/routes';
import store from './src/store';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    Appearance.setColorScheme('dark');
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    marginTop: 10,
    height: 500,
  };

  return (
    <StoreProvider store={store}>
      <GluestackUIProvider config={config} colorMode={isDarkMode ? 'dark' : 'light'}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
        <Router />
      </GluestackUIProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
