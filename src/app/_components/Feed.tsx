"use client";

import { api } from "~/trpc/react";
import { Post } from "./post";

export default function Feed() {
  const { data: posts, isLoading } = api.post.getAll.useQuery();
  console.log("posts");
  console.log(posts);
  return (
    <div className="w-full">
      {posts && posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p>{isLoading ? "Loading..." : "No posts yet."}</p>
      )}
    </div>
  );
}
