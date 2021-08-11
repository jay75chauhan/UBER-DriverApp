import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./components/HomeScreen";

export default function App() {
  return (
    <>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
}
