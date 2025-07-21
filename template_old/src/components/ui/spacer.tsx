import { View } from 'react-native';

import React from 'react';

type SpacerProps = {
  x?: number;
  y?: number;
};

export default function Spacer(props: SpacerProps) {
  return <View style={{ width: props.x, height: props.y }} />;
}
