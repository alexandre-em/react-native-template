import { StyleSheet, Text, useColorScheme } from 'react-native';

import React, { PropsWithChildren } from 'react';

export function BodyXl({ children }: PropsWithChildren) {
  const theme = useColorScheme();
  return <Text style={[styles.bodyXl, theme === 'dark' ? styles.dark : styles.light]}>{children}</Text>;
}

export function BodyL({ children }: PropsWithChildren) {
  const theme = useColorScheme();
  return <Text style={[styles.bodyL, theme === 'dark' ? styles.dark : styles.light]}>{children}</Text>;
}

export function BodyM({ children }: PropsWithChildren) {
  const theme = useColorScheme();
  return <Text style={[styles.bodyM, theme === 'dark' ? styles.dark : styles.light]}>{children}</Text>;
}

export function BodyS({ children }: PropsWithChildren) {
  const theme = useColorScheme();
  return <Text style={[styles.bodyS, theme === 'dark' ? styles.dark : styles.light]}>{children}</Text>;
}

export function BodyXs({ children }: PropsWithChildren) {
  const theme = useColorScheme();
  return <Text style={[styles.bodyXs, theme === 'dark' ? styles.dark : styles.light]}>{children}</Text>;
}

export function BodyXxs({ children }: PropsWithChildren) {
  const theme = useColorScheme();
  return <Text style={[styles.bodyXxs, theme === 'dark' ? styles.dark : styles.light]}>{children}</Text>;
}

export function BodyXxxs({ children }: PropsWithChildren) {
  const theme = useColorScheme();
  return <Text style={[styles.bodyXxxs, theme === 'dark' ? styles.dark : styles.light]}>{children}</Text>;
}

export function HeaderH1({ children }: PropsWithChildren) {
  const theme = useColorScheme();
  return <Text style={[styles.HeaderH1, theme === 'dark' ? styles.dark : styles.light]}>{children}</Text>;
}

export function HeaderH2({ children }: PropsWithChildren) {
  const theme = useColorScheme();
  return <Text style={[styles.HeaderH2, theme === 'dark' ? styles.dark : styles.light]}>{children}</Text>;
}

export function HeaderH3({ children }: PropsWithChildren) {
  const theme = useColorScheme();
  return <Text style={[styles.HeaderH3, theme === 'dark' ? styles.dark : styles.light]}>{children}</Text>;
}

export function HeaderH4({ children }: PropsWithChildren) {
  const theme = useColorScheme();
  return <Text style={[styles.HeaderH4, theme === 'dark' ? styles.dark : styles.light]}>{children}</Text>;
}

export function HeaderH5({ children }: PropsWithChildren) {
  const theme = useColorScheme();
  return <Text style={[styles.HeaderH5, theme === 'dark' ? styles.dark : styles.light]}>{children}</Text>;
}

export function HeaderH6({ children }: PropsWithChildren) {
  const theme = useColorScheme();
  return <Text style={[styles.HeaderH6, theme === 'dark' ? styles.dark : styles.light]}>{children}</Text>;
}

export function TitleH1({ children }: PropsWithChildren) {
  const theme = useColorScheme();
  return <Text style={[styles.TitleH1, theme === 'dark' ? styles.dark : styles.light]}>{children}</Text>;
}

export function ParagraphP1({ children }: PropsWithChildren) {
  const theme = useColorScheme();
  return <Text style={[styles.ParagraphP1, theme === 'dark' ? styles.dark : styles.light]}>{children}</Text>;
}

export function ParagraphP2({ children }: PropsWithChildren) {
  const theme = useColorScheme();
  return <Text style={[styles.ParagraphP2, theme === 'dark' ? styles.dark : styles.light]}>{children}</Text>;
}

const styles = StyleSheet.create({
  dark: {
    color: '#d1e3db',
  },
  light: {
    color: '#2f2a2c',
  },
  bodyXl: {
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '500',
  },
  bodyL: {
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '600',
  },
  bodyM: {
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  bodyS: {
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '300',
  },
  bodyXs: {
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '200',
  },
  bodyXxs: {
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: '300',
    letterSpacing: -0.24,
  },
  bodyXxxs: {
    fontSize: 10,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  HeaderH1: {
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '600',
  },
  HeaderH2: {
    fontSize: 18,
    fontFamily: 'Inter',
    fontWeight: '600',
  },
  HeaderH3: {
    fontSize: 18,
    fontFamily: 'Inter',
    fontWeight: '500',
  },
  HeaderH4: {
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '500',
  },
  HeaderH5: {
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  HeaderH6: {
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: '600',
  },
  TitleH1: {
    backgroundColor: 'red',
    fontSize: 36,
    fontFamily: 'Inter',
    fontWeight: '600',
  },
  ParagraphP1: {
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '300',
  },
  ParagraphP2: {
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: '500',
  },
});
