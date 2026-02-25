import ProfileAvatar from "./ProfileAvatar"
import SetItem from "./SetItem"
import {RiMapPinLine} from "react-icons/ri";
import { GoBrowser } from "react-icons/go";

const ProfileCard = () => {
  return (
    <nav className="flex flex-col border-2 border-[#E5E5E5]  shadow-sm my-11 mx-10 items-center rounded-2xl py-5  w-[22%] h-1/5 ">
        {/* <button className="bg-green-800 hover:bg-green-600 hover:size-25 transition-all duration-300 size-20 rounded-full text-4xl border-2 border-neutral-600 cursor-pointer my-3.5">
            N
        </button> */}
        <ProfileAvatar />
        {/* <h3 className="text-xl font-bold pb-2 w-full text-center">
            Mohammad
        </h3>
        <span className="font-light text-neutral-400">
            ID
        </span> */}
        <hr className="w-[90%] text-[#E5E5E5] mt-10" />
        {/* <div className="flex justify-between items-center text-center w-full px-5 py-8"> */}
            {/* <div className="flex flex-col">
            <span>
                0
            </span>
            <span>
                Following
            </span>
            </div>
            <div className="flex flex-col">
                <span>
                0
            </span>
            <span>
                Followers
            </span>
            </div> */}
        {/* </div> */}
                <div className="flex justify-between items-center text-center w-full px-5 py-8">
                <SetItem value={1} label="Following" />
                 <SetItem value={3} label="Followers" />
                 </div>

            <hr className="w-[90%] text-[#E5E5E5]" />
        <div className="py-5 flex flex-col items-start justify-start w-full px-5">
            <div className="flex items-center gap-2 text-[#737373]">
     <RiMapPinLine className="text-[#737373]" />
    <p>No location</p>
</div>

<div className="flex items-center gap-2 text-[#737373]">
    <GoBrowser />
    <p>No website</p>
</div>
        </div>
    </nav>
  )
}

export default ProfileCard
