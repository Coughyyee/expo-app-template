import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function Index() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'CustomFont': require('../assets/fonts/SpaceMono-Regular.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View className="flex-1 justify-center items-center bg-[#FFD1DC]">
      <Text>Hello user!</Text>
    </View>
  );
}
