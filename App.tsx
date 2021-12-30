import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { NavigationTabs} from "./navigation";

export default function App() {
  return (
      <NavigationContainer>
          <NavigationTabs />
      </NavigationContainer>
  );
}