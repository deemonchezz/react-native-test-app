import React from "react";
import { makeObservable, action, observable, runInAction } from "mobx";
import { User } from "@models/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkUserAuth } from "@auth/data";
import { Alert } from "react-native";
import { DEFAULT_USER } from "@constants/user";

class UserStore {
  currentUser: User = DEFAULT_USER;
  isSignedIn: boolean = false;

  constructor() {
    makeObservable(this, {
      currentUser: observable.deep,
      isSignedIn: observable,
      setAuth: action.bound,
      logout: action.bound,
    });
  }

  async setAuth(user: User, remember?: boolean) {
    if (checkUserAuth(user)) {
      runInAction(() => {
        this.isSignedIn = true;
        this.currentUser = user;
      });

      if (remember) {
        try {
          await AsyncStorage.setItem("user", JSON.stringify(user));
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      Alert.alert("Ошибка авторизации");
      runInAction(() => {
        this.currentUser = DEFAULT_USER;
      });
    }
  }

  async logout() {
    try {
      await AsyncStorage.removeItem("user");
      runInAction(() => {
        this.currentUser = DEFAULT_USER;
        this.isSignedIn = false;
      });
    } catch (err) {
      console.log(err);
    }
  }
}

const userStore = new UserStore();
export const UserStoreContext = React.createContext(userStore);
export const useUserStore = () => React.useContext(UserStoreContext);
