import React, { FC } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Post } from "@models/Post";

type PostItemType = {
  item: Post;
};

const PostItem: FC<PostItemType> = ({ item }) => (
  <View style={styles.item}>
    <View style={styles.header}>
      <Text style={styles.title}>{item?.title}</Text>
    </View>
    <View style={styles.content}>
      <Text style={styles.body}>{item?.body}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#36363c",
    borderColor: "#44444b",
    borderWidth: 1,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    color: "#fff",
  },
  body: {
    fontSize: 14,
    color: "#fff",
  },
  header: {
    padding: 10,
    backgroundColor: "#44444b",
  },
  content: {
    padding: 10,
  },
});

export default PostItem;
