import { View, Text, Pressable } from "react-native";
import React from "react";
import { Meditation } from "@/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const MeditationListItem = ({ meditation }: { meditation: Meditation }) => {
  return (
    <View className="flex-row items-center gap-5">
      <View className="bg-green-700 p-2 rounded-full">
        <FontAwesome name="check" size={16} color="white" />
      </View>

      <View className="rounded-2xl py-5 px-2 border-2 border-gray-300 flex-1">
        <Text className="font-bold text-xl">{meditation.title}</Text>
        <View className="flex-row items-center gap-1">
          <Text className="text-sm">Mutual Activities</Text>
        </View>
        <View className="flex-row items-center gap-1">
          <FontAwesome6 name="clock" size={16} color="#6B7280" />
          <Text className="text-sm text-gray-600">
            {meditation.duration} min
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MeditationListItem;