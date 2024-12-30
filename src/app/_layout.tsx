// import { Slot } from "expo-router";

import { Stack } from "expo-router";
import "../../global.css";

// const RootLayout = () => {
//   return <Slot />;
// };

// export default RootLayout;

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Meditations" }} />
      <Stack.Screen
        name="meditation/[id]"
        options={{ headerShown: false, animation: "slide_from_bottom" }}
      />
    </Stack>
  );
};

export default RootLayout;
