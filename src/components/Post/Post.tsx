import type { PostType } from "../types/PostType";
import like from "./../../assets/svg/heart.svg";
// import comment from "./../../assets/svg/chat-teardrop.svg";
import { FaComment } from "react-icons/fa";

const Post = ({ post }: { post: PostType }) => {
  return (
    <div className="p-4 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-red-600 text-white font-bold flex items-center justify-center overflow-hidden">
          {post.avatarUrl ? (
            <img
              src={post.avatarUrl}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            post.username[0]
          )}
        </div>
        <div className="flex gap-4 items-center">
          <p className="font-semibold">{post.username}</p>
          <p className="text-gray-500 text-sm">
            @{post.handle} · {post.createdAt}
          </p>
        </div>
      </div>
      <p className="mt-3 text-gray-800">{post.content}</p>

      {post.imageUrl && (
        <img
          src={post.imageUrl}
          // alt="post attachment"
          className="mt-3 w-full rounded-xl object-cover"
        />
      )}

      <div className="flex gap-6 mt-4 text-gray-600">
        <button className="flex items-center gap-2 hover:text-black">
          <span>
            <img src={like} />
          </span>
          <span>{post.likes}</span>
        </button>

        <button className="flex items-center gap-2 hover:text-black">
          <span>
          <FaComment />
          </span>
          <span>{post.comments}</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
