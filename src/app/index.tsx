import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { meditations } from "@/data";
import MeditationListItem from "@/Components/MeditationListItem";

const HomeScreen = () => {
  return (
    <View className="p-4">
      <View className="py-3">
        <Text className="font-bold text-3xl">Start your day</Text>
      </View>

      <FlatList
        data={meditations}
        contentContainerClassName="gap-8"
        className=""
        renderItem={({ item }) => <MeditationListItem meditation={item} />}
      />
    </View>
  );
};

export default HomeScreen;
