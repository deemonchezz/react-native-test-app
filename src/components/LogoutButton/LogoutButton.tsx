import React, { FC } from "react";
import { useUserStore } from "@store/userStore";
import { Alert, TouchableHighlight, StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "@constants/theme";
import Svg, { Path } from "react-native-svg";

const LogoutButton: FC = () => {
  const { logout } = useUserStore();

  const logoutConfirm = () => {
    Alert.alert("Are you sure you want to log out", "", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: logout },
    ]);
  };

  return (
    <TouchableHighlight style={styles.logout} onPress={logoutConfirm}>
      <Svg height={24} viewBox="0 0 24 24" width={25} fill="#FFFFFF">
        <Path d="M0,0h24v24H0V0z" fill="none" />
        <Path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" />
      </Svg>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  logout: {
    width: 48,
    height: 48,
    position: "absolute",
    bottom: 12,
    right: 12,
    backgroundColor: PRIMARY_COLOR,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});

export default LogoutButton;
