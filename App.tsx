// import React from 'react';
// import { NavigationContainer } from "@react-navigation/native";
// import { NavigationTabs} from "./navigation";

// export default function App() {
//   return (
//       <NavigationContainer>
//           <NavigationTabs />
//       </NavigationContainer>
//   );
// }
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { writeUserData } from './utils/firebase.js'
import { signInWithFacebook } from './utils/auth.js';
import Routes from './navigation/navigation.js'

export default function App() {
  return (
    <Routes />
    //   <View style={styles.container}>
    //     <Text onPress={() => {
    // writeUserData('100', 'test')
    //       signInWithFacebook()
    //     }}>Open up App.tsx to start working on your app!</Text>
    //     <Text></Text>
    //     <StatusBar style="auto" />
    //   </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});