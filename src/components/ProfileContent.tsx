import DeletePosts from "./DeletePosts";
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
      <DeletePosts/>
    </div>
  );
}

export default ProfileContent;
