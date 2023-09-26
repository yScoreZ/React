import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Comp, { Comp2, Comp3 } from './Components/Multiplos';
import Primeiro from './Components/Primeiro';
import MixMax from './Components/MixMax';


export default function App() { 
  return (
    <SafeAreaView style={styles.container}>
      
      <MixMax min={2} max={20 }/>
      <MixMax min={15} max={65 }/>
      
      <Comp />
      <Comp2 />
      <Comp3 />
      <Primeiro />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
