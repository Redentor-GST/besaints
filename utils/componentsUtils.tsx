import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { lightblue } from './consts';

export default function DefaultLoadingScreen() {
  const styles = StyleSheet.create({
    activityContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      padding: 20,
    },
  });
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator size={60} color={lightblue} />
    </View>
  );
}
