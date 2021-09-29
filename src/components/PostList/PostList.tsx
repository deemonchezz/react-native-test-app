import React, { FC } from "react";
import { observer } from "mobx-react";
import { FlatList } from "react-native";
import { Post } from "@models/Post";
import PostItem from "./PostItem";

type PostListType = {
  data: Post[];
};

const PostList: FC<PostListType> = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <PostItem item={item} />}
      keyExtractor={(item) => item?.id.toString()}
    />
  );
};

export default observer(PostList);
