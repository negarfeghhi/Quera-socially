import { FiCalendar } from 'react-icons/fi'

function ProfileActions() {
  return (
    <div className="w-full flex flex-col gap-5">
      <button className="w-md py-2 rounded-lg bg-[#0A0A0A] text-[#FAFAFA] font-medium text-sm">
        Follow-prop
          </button>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
              <FiCalendar className="h-4 w-4"/>
              <span className="text-[#737373]">Joined November 2025-prop</span>
          </div>
    </div>
  );
}

export default ProfileActions;
