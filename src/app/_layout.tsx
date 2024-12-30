// import { Slot } from "expo-router";

import { Stack } from "expo-router";

// const RootLayout = () => {
//   return <Slot />;
// };

// export default RootLayout;

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Meditations" }} />
    </Stack>
  );
};

export default RootLayout;
