import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
  return (
    <View style={tw`h-full`}>
      <MapView
        style={tw`flex-1 `}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="mutedStandard"
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
