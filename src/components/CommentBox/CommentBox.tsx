import { FiSend } from "react-icons/fi";
import Button from "../Button/Button";
import avatar from "./../../assets/images/avatar.png";
import { useState } from "react";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState<string[]>([]);
  const handleAddComment = () => {
    if (!comment.trim()) return;
    setCommentList((prev) => [...prev, comment]);
    setComment("");
  };
  return (
    <div className="border-t border-t-[#b9b9b9] w-full mt-5 pt-4">
      <div className="my-2">
        {commentList.map((c, i) => (
          <p key={i} className="bg-gray-200 p-2 rounded mb-1">
            {c}
          </p>
        ))}
      </div>
      <div className="w-full flex gap-2 items-start mt-5">
        <div className="w-10 h-10 rounded-full hover:bg-red-700 shrink-0">
          <img src={avatar} className="rounded-full" />
        </div>
        <textarea
          placeholder="Write a comment..."
          className="border resize-none p-2 pb-14 w-full rounded border-[#E5E5E5]"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div className="flex justify-end py-5">
        <Button
          onClick={handleAddComment}
          className="bg-black hover:bg-green-700 flex items-center gap-2 cursor-pointer"
        >
          <FiSend />
          Comment
        </Button>
      </div>
    </div>
  );
};

export default CommentBox;
