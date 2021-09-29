import { Post } from "@models/Post";
import API from "./API";

export class PostService {
  async getList(params = {}): Promise<{ data: Post[] }> {
    return API.get("/posts", { params });
  }
}
