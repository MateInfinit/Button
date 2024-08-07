import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DonutChart from "./DonutChart"; // Adjust the import path as needed

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <DonutChart />
  </GestureHandlerRootView>
);

export default App;
