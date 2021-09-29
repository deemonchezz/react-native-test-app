import React, { FC, useEffect } from "react";
import Login from "@components/Login/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUserStore } from "@store/userStore";
import { observer } from "mobx-react";
import Layout from "@components/Layout/Layout";

const Main: FC = () => {
  const { setAuth } = useUserStore();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      if (user !== null) {
        setAuth(JSON.parse(user));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default observer(Main);
