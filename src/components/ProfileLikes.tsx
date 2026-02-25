import ProfilePosts from "./ProfilePosts";
import { FiHeart, FiMessageCircle } from "react-icons/fi";

function ProfileLikes() {
  return (
    <ProfilePosts
      liketab={
        <div className="flex gap-10">
          <button className="cursor-pointer flex justify-center items-center gap-3">
            <FiHeart size={16} />
            <span>2</span>
          </button>
          <button className="cursor-pointer flex justify-center items-center gap-3">
            <FiMessageCircle size={16} />
            <span>3</span>
          </button>
        </div>
      }
      />
    
  );
}

export default ProfileLikes;
