import React from "react";
import { makeObservable, action, observable, runInAction } from "mobx";
import { Post } from "@models/Post";
import { PostService } from "../services/PostService";

const Service = new PostService();

class PostStore {
  postList: Post[] = [];

  constructor() {
    makeObservable(this, {
      postList: observable.deep,
      fetchPost: action.bound,
    });
  }

  async fetchPost() {
    this.postList = [];
    const { data } = await Service.getList();
    if (data) {
      runInAction(() => {
        this.postList = data;
      });
    }
  }
}

const postStore = new PostStore();
export const PostStoreContext = React.createContext(postStore);
export const usePostStore = () => React.useContext(PostStoreContext);
