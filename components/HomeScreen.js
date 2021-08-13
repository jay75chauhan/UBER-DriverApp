import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GOOGLE_MAP_KEY } from "@env";
import MapView from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import MapViewDirections from "react-native-maps-directions";
import { useState } from "react";
import NewOrderPopup from "./NewOrderPopup";

const origin = { latitude: 37.3318456, longitude: -122.0296002 };
const destination = { latitude: 37.771707, longitude: -122.4053769 };

const HomeScreen = () => {
  const [online, setOnline] = useState(false);

  const onGoPress = () => {
    setOnline(!online);
  };
  return (
    <View style={tw`h-full z-0`}>
      {/* top bar */}
      <View
        style={tw`flex-row z-10 justify-between items-center absolute top-14 px-4  bg-transparent  rounded-full w-full`}
      >
        <TouchableOpacity style={tw`p-3 bg-gray-100 shadow-2xl rounded-full  `}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text
          style={tw`px-6 py-2 bg-gray-800 shadow-2xl rounded-full  shadow-2xl text-green-500 text-lg`}
        >
          ₹ <Text style={tw`text-white`}>0:00</Text>{" "}
        </Text>
        <TouchableOpacity style={tw`p-3 bg-gray-100 shadow-2xl rounded-full`}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/*  bottom bar */}
      <View
        style={tw`z-10 flex-row justify-between items-center absolute bottom-24 px-4  w-full`}
      >
        <TouchableOpacity
          style={tw`p-3 bg-gray-100 shadow-2xl rounded-full mt-auto border-2 border-blue-600`}
        >
          <Ionicons name="md-shield" size={26} color="#3A82F6" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onGoPress}>
          <Text
            style={tw`p-7 bg-blue-500 shadow-2xl rounded-full text-xl text-white font-bold `}
          >
            {online ? "GO" : "END"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`  p-3 bg-gray-100 shadow-2xl rounded-full mt-auto`}
        >
          <Ionicons name="chatbox-ellipses" size={29} color="black" />
        </TouchableOpacity>
      </View>
      <MapView
        style={tw`flex-1 -mb-5  `}
        // showsUserLocation={true}

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
      <View
        style={tw`bg-white p-5 flex-row justify-between  items-center rounded-t-3xl bg-gray-50 `}
      >
        <Ionicons
          name="filter"
          size={24}
          color="black"
          style={tw`p-3 shadow-sm bg-white rounded-full`}
        />

        {online ? (
          <Text style={tw`text-2xl  text-black`}>You're online</Text>
        ) : (
          <Text style={tw`text-2xl text-black`}>You're offline</Text>
        )}

        <Ionicons
          name="list"
          size={24}
          color="black"
          style={tw`p-3 shadow-sm bg-white  rounded-full`}
        />
      </View>
      <NewOrderPopup />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
