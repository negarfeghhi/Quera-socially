import { FiHeart, FiFileText } from 'react-icons/fi'



function Tabs() {
    return (
      
    <div className="flex border-b-2 border-[#E5E5E5] gap-6">
        <button className="font-semibold text-[#737373] flex justify-center items-center gap-2 px-5 " value="Posts">
          <FiFileText size={16} />
        <span>Posts</span>
      </button>

      <button className="font-semibold text-[#737373]  flex justify-center items-center gap-2 px-5" value="Likes">
        <FiHeart size={16} className="text-[#737373]" />
        <span>Likes</span>
      </button>
    </div>
  );
}

export default Tabs;
