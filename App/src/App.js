import React from 'react';
import { View, StyleSheet } from 'react-native';

import Comp, { Comp2, Comp3 } from './Components/Multiplos';
import Primeiro from './Components/Primeiro';

export default function App() { 
  return (
    <View style={styles.container}>
      <Comp />
      <Comp2 />
      <Comp3 />
      <Primeiro />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
