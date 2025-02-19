import { create } from "zustand";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ApiState {
  users: User[];
  posts: Post[];
  loading: boolean;
  error: string | null;
  fetchUsers: (page:number, limit:number) => Promise<void>;
  fetchPosts: () => Promise<void>;
}

const useApiStore = create<ApiState>((set) => ({
  users: [],
  posts: [],
  loading: false,
  error: null,

  fetchUsers: async (page:number, limit:number) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
      );
      set({ users: response.data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch users", loading: false });
    }
  },

  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      set({ posts: response.data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch users", loading: false });
    }
  },
}));

export default useApiStore;
