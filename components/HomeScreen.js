import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GOOGLE_MAP_KEY } from "@env";
import MapView from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import MapViewDirections from "react-native-maps-directions";

const origin = { latitude: 37.3318456, longitude: -122.0296002 };
const destination = { latitude: 37.771707, longitude: -122.4053769 };

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
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAP_KEY}
          lineDashPattern={[0]}
          strokeColor="black"
          strokeWidth={5}
        />
      </MapView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
