import type { PostType } from "../types/PostType";
import { FaComment } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import Button from "./../Button/Button";
import avatar from "./../../assets/images/avatar.png";
const Post = ({ post }: { post: PostType }) => {
  return (
    <div className="p-4 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full text-white font-bold flex items-center justify-center overflow-hidden">
          {post.avatarUrl ? (
            <img
              src={post.avatarUrl}
              alt="avatar"
              className="w-full h-full object-cover bg-amber-200"
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
      <div className="flex items-center gap-2">
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            // alt="post attachment"
            className="mt-3 rounded-xl object-cover"
          />
        )}
        <p className="mt-3 text-gray-800">{post.content}</p>
      </div>

      <div className="flex gap-6 mt-4 text-gray-600">
        <button className="flex items-center gap-2 hover:text-black cursor-pointer">
          <span>
            <AiFillLike />
          </span>
          <span>{post.likes}</span>
        </button>

        <button className="flex items-center gap-2 bg-white p-2 z-50 rounded-md hover:bg-green-400 cursor-pointer">
          <span>
            <FaComment />
          </span>
          <span>{post.comments}</span>
        </button>
      </div>
      <div className="border-t border-t-[#b9b9b9] w-full mt-5 pt-4">
        <div className="w-full flex gap-2 items-start">
          <div className="w-10 h-10 rounded-full hover:bg-red-700 shrink-0">
            <img src={avatar} className="rounded-full" />
          </div>
          <textarea
            placeholder="Write a comment..."
            className="border resize-none p-2 pb-14 w-full rounded border-[#E5E5E5]"
          />
        </div>
        <div className="flex justify-end py-5">
          <Button className="bg-black hover:bg-green-700 flex items-center gap-2 cursor-pointer">
            <FiSend />
            Comment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Post;
