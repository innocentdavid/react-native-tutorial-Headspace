import { View, Text } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { meditations } from "@/data";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";

const MeditationDetails = () => {
  const { id } = useLocalSearchParams();

  const { top } = useSafeAreaInsets();

  const meditation = meditations.find((item) => item.id === Number(id));

  if (!meditation) return <View>Meditation not found!</View>;

  return (
    <SafeAreaView>
      <View className="p-4">
        <Text>{meditation.title}</Text>
        <AntDesign
          onPress={() => router.back()}
          className={`absolute right-5`}
          style={{
            top: top + 10,
          }}
          name="close"
          size={24}
          color={"black"}
        />
      </View>
    </SafeAreaView>
  );
};

export default MeditationDetails;
