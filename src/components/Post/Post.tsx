import type { PostType } from "../types/PostType";
import { FaComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import CommentBox from "./../CommentBox/CommentBox";
import { useState } from "react";

const Post = ({ post }: { post: PostType }) => {
  const [showComment, setShowComment] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setLiked(prev => !prev);
  };
  return (
    <div className="p-4 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full text-white font-bold flex items-center justify-center overflow-hidden">
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
        <button
          onClick={handleLike}
          className="flex items-center gap-2 hover:text-black cursor-pointer"
        >
          <span className={likesCount ? "text-red-800" : "text-gray-400"}>
            <FaHeart />
          </span>
          <span className={likesCount ? "text-red-800" : "text-gray-400"}>{likesCount}</span>
        </button>

        <button
          onClick={() => setShowComment(!showComment)}
          className="flex items-center gap-2 bg-white p-2 z-50 rounded-md hover:bg-green-400 cursor-pointer"
        >
          <span>
            <FaComment
              className={showComment ? "text-blue-800" : "text-gray-400"}
            />
          </span>
          <span className={showComment ? "text-blue-800" : "text-gray-400"}>
            {post.comments}
          </span>
        </button>
      </div>
      {showComment && <CommentBox />}
    </div>
  );
};

export default Post;
