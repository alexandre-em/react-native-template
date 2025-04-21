import { Text, TouchableOpacity, View } from 'react-native';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Clipboard, HomeIcon, MapPinned, Settings, SquareUser } from 'lucide-react-native';
import React from 'react';

import styles from './styles';

export default function BottomNavbar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const isCenter = index === 2;

        const iconName = {
          Home: <HomeIcon size={22} style={isFocused && !isCenter ? styles.focusedLabel : styles.label} />,
          Track: <Clipboard size={22} style={isFocused && !isCenter ? styles.focusedLabel : styles.label} />,
          Trip: <MapPinned size={28} style={isFocused && !isCenter ? styles.focusedLabel : styles.label} />,
          Profile: <SquareUser size={22} style={isFocused && !isCenter ? styles.focusedLabel : styles.label} />,
          Settings: <Settings size={22} style={isFocused && !isCenter ? styles.focusedLabel : styles.label} />,
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            onPress={onPress}
            style={isCenter ? styles.centerButtonWrapper : styles.tabButton}>
            <View style={[isCenter ? styles.centerButton : styles.iconWrapper, isFocused && !isCenter ? styles.focused : null]}>
              {iconName[route.name]}
            </View>
            {!isCenter && <Text style={[styles.label, isFocused && styles.focusedLabel]}>{label}</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
