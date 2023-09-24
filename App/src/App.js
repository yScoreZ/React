import React from 'react'
import { View, StyleSheet } from 'react-native'

import CompPadrao, { Comp1, Comp2 } from './Components/Multiplos'
import Primeiro from './Components/Primeiro'

const App = () => (
  <View style={styles.App}>
    <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro />
  </View>
);

const styles = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
