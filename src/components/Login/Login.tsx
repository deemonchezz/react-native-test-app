import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Switch,
  View,
  Text,
} from "react-native";
import { INPUT_BACKGROUND, PRIMARY_COLOR } from "@constants/theme";
import { useUserStore } from "@store/userStore";
import { observer } from "mobx-react";
import { User } from "@models/User";

const Login = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRemember, setIsRemember] = useState<boolean>(false);
  const { setAuth } = useUserStore();

  const userObject: User = { login, password };

  const handleLogin = () => {
    setAuth(userObject, isRemember);
  };

  return (
    <SafeAreaView style={styles.loginArea}>
      <TextInput
        style={styles.input}
        onChangeText={setLogin}
        value={login}
        placeholder="login"
        placeholderTextColor="#777"
        autoCompleteType="username"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="password"
        placeholderTextColor="#777"
        autoCompleteType="password"
        secureTextEntry
      />
      <View style={styles.switch}>
        <Text style={{ color: "#fff", opacity: isRemember ? 1 : 0.5 }}>
          Remember me
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: PRIMARY_COLOR }}
          thumbColor={PRIMARY_COLOR}
          ios_backgroundColor={PRIMARY_COLOR}
          onValueChange={() => setIsRemember(!isRemember)}
          value={isRemember}
        />
      </View>
      <Button
        title="Login"
        color={PRIMARY_COLOR}
        onPress={handleLogin}
        disabled={!(login.length && password.length)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: INPUT_BACKGROUND,
    color: "#fff",
  },

  loginArea: {
    maxWidth: 320,
    minWidth: "75%",
    flex: 1,
    justifyContent: "center",
  },

  switch: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default observer(Login);
