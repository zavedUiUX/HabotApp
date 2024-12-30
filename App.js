import React, { useEffect, useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import { preventAutoHideAsync, hideAsync } from "expo-splash-screen"; // Only import necessary functions

export default function App() {
  const [isLoading, setIsLoading] = useState(true); // State to track if the web page is loading

  useEffect(() => {
    // Prevent the splash screen from hiding automatically
    preventAutoHideAsync();
  }, []);

  const handleWebViewLoad = () => {
    // WebView is fully loaded, now hide the splash screen
    setIsLoading(false);
    hideAsync();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#263238" />
      {/* WebView component that loads the URL */}
      <WebView
        source={{ uri: "https://culturebuilding.habot.io/" }}
        onLoad={handleWebViewLoad} // Calls handleWebViewLoad when WebView is loaded
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
