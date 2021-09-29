import React, { FC } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MAIN_BACKGROUND } from "@constants/theme";

const Layout: FC = ({ children }) => {
  return (
    <View style={styles.main}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        {children}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: MAIN_BACKGROUND,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default Layout;
