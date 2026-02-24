import ProfileActions from "./ProfileActions"
import ProfileAvatar from "./ProfileAvatar"
import ProfileState from "./ProfileState"


function ProfileHeader() {
  return (
      <div className="flex flex-col items-center mx-auto gap-9 border-2 rounded-xl border-[#E5E5E5] p-6 w-fit mt-6 shadow-sm">
          <ProfileAvatar />
          <ProfileState />
          <ProfileActions />   
      </div>
  )
}

export default ProfileHeader
