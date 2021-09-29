import React, { FC, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { observer } from "mobx-react";
import Layout from "@components/Layout/Layout";
import LogoutButton from "@components/LogoutButton/LogoutButton";
import { usePostStore } from "@store/postStore";
import PostList from "@components/PostList/PostList";
import { useUserStore } from "@store/userStore";

const Posts: FC = () => {
  const { fetchPost, postList } = usePostStore();
  const { currentUser } = useUserStore();

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Layout>
      <Text style={styles.hello}>{currentUser.login}</Text>
      <PostList data={postList} />
      <LogoutButton />
    </Layout>
  );
};

const styles = StyleSheet.create({
  hello: {
    color: "#fff",
    padding: 20,
    textAlign: "right",
    width: "100%",
  },
});

export default observer(Posts);
