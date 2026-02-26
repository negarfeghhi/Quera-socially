import Post from "../Post/Post";
import type { PostType } from "../types/PostType";


const dummyPosts: PostType[] = [
  {
    id: "1",
    username: "Farshad Hosseini",
    handle: "farshad",
    content: "image",
    createdAt: "8 days ago",
    likes: 1,
    comments: 1,
    avatarUrl: "./../../assets/images/Container.png",
    imageUrl: "/posts/sample.jpg",
  },
];

const PostList = () => {
  return (
    <div className="w-xl">
      {dummyPosts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
};

export default PostList;
