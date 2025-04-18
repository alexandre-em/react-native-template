import { Text, StyleSheet } from 'react-native';
import React, { PropsWithChildren } from 'react';

export function BodyXl({ children }: PropsWithChildren) {
  return <Text style={styles.bodyXl}>{children}</Text>;
}

export function BodyL({ children }: PropsWithChildren) {
  return <Text style={styles.bodyL}>{children}</Text>;
}

export function BodyM({ children }: PropsWithChildren) {
  return <Text style={styles.bodyM}>{children}</Text>;
}

export function BodyS({ children }: PropsWithChildren) {
  return <Text style={styles.bodyS}>{children}</Text>;
}

export function BodyXs({ children }: PropsWithChildren) {
  return <Text style={styles.bodyXs}>{children}</Text>;
}

export function BodyXxs({ children }: PropsWithChildren) {
  return <Text style={styles.bodyXxs}>{children}</Text>;
}

export function BodyXxxs({ children }: PropsWithChildren) {
  return <Text style={styles.bodyXxxs}>{children}</Text>;
}

export function HeaderH1({ children }: PropsWithChildren) {
  return <Text style={styles.HeaderH1}>{children}</Text>;
}

export function HeaderH2({ children }: PropsWithChildren) {
  return <Text style={styles.HeaderH2}>{children}</Text>;
}

export function HeaderH3({ children }: PropsWithChildren) {
  return <Text style={styles.HeaderH3}>{children}</Text>;
}

export function HeaderH4({ children }: PropsWithChildren) {
  return <Text style={styles.HeaderH4}>{children}</Text>;
}

export function HeaderH5({ children }: PropsWithChildren) {
  return <Text style={styles.HeaderH5}>{children}</Text>;
}

export function HeaderH6({ children }: PropsWithChildren) {
  return <Text style={styles.HeaderH6}>{children}</Text>;
}

export function TitleH1({ children }: PropsWithChildren) {
  return <Text style={styles.TitleH1}>{children}</Text>;
}

export function ParagraphP1({ children }: PropsWithChildren) {
  return <Text style={styles.ParagraphP1}>{children}</Text>;
}

export function ParagraphP2({ children }: PropsWithChildren) {
  return <Text style={styles.ParagraphP2}>{children}</Text>;
}

const styles = StyleSheet.create({
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
