import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const NewOrderPopup = () => {
  const onDecline = () => {};
  const onAccept = () => {};

  return (
    <View
      style={tw`absolute z-20  w-full h-full justify-between flex  bottom-0 p-5`}
    >
      <Pressable
        onPress={onDecline}
        style={tw`mt-8 mr-auto bg-transparent shadow rounded-full `}
      >
        <Text
          style={tw` text-gray-200 bg-gray-700 text-lg p-4 px-5 rounded-full`}
        >
          X Decline
        </Text>
      </Pressable>
      <View
        style={tw`bg-black  items-center rounded-xl justify-center shadow-xl p-5`}
      >
        <Pressable style={tw`flex-row items-center`} onPress={onAccept}>
          <Text style={tw`text-white text-xl`}>UberX</Text>
          <View style={tw`border-4 border-gray-200 rounded-full m-5`}>
            <FontAwesome
              name="user"
              size={35}
              color="white"
              style={tw` bg-blue-500 p-5 px-6 rounded-full`}
            />
          </View>

          <Text style={tw`text-gray-100   text-xl`}>
            <Ionicons name="star" size={24} color="white" />5
          </Text>
        </Pressable>
        <View style={tw`p-3 flex items-center pl-8`}>
          <Text style={tw`text-gray-300 text-3xl text-center`}>2 min</Text>
          <Text style={tw`text-gray-300  text-2xl text-center`}>0.2 mi</Text>
        </View>
      </View>
    </View>
  );
};

export default NewOrderPopup;

const styles = StyleSheet.create({});
