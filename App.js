import React from "react";
import { View, StyleSheet } from "react-native";
import DonutChart from "./DonutChart"; // Adjust the import path if needed

const App = () => {
  return (
    <View style={styles.container}>
      <DonutChart />
    </View>
  );
};

// Styles for centering the main container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Optional: background color for the main app view
  },
});

export default App;
