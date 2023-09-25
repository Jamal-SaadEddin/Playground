import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = () => {
  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: () =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000, //1min
  });
};

export default usePosts;
