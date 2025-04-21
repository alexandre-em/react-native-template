import { StyleSheet, useColorScheme } from 'react-native';

import { Input as GluestackInput } from '@gluestack-ui/themed';
import React, { ComponentProps } from 'react';

import { config } from '../../lib/gluestack-ui';

type InputProps = ComponentProps<typeof GluestackInput>;

export default function Input(props: InputProps) {
  const theme = useColorScheme();
  return <GluestackInput style={[props.style, theme === 'dark' ? styles.dark : styles.light]} {...props} />;
}

const styles = StyleSheet.create({
  dark: {
    backgroundColor: config.tokens.colors.backgroundDark500,
  },
  light: {
    backgroundColor: '#f6f5f18F',
  },
});
