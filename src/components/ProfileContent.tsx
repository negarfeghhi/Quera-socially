import ProfileLikes from "./ProfileLikes";
import ProfilePosts from "./ProfilePosts";
import Tabs from "./Tabs";

function ProfileContent() {
  return (
    <div className="flex flex-col gap-7">
      <Tabs />
      <ProfilePosts />
      <ProfilePosts />
      <ProfileLikes />
    </div>
  );
}

export default ProfileContent;
