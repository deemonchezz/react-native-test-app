import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "@screens/Main/Main";
import Posts from "@screens/Posts/Posts";
import { useUserStore } from "@store/userStore";
import { observer } from "mobx-react";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  const { isSignedIn } = useUserStore();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#131214",
          },

          headerTintColor: "#fff",
        }}
      >
        {isSignedIn ? (
          <Stack.Screen
            name="Posts"
            component={Posts}
            options={{
              title: `Post list`,
            }}
          />
        ) : (
          <Stack.Screen name="Main" component={Main} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default observer(MyStack);
