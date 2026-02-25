interface ProfilePostsProps {
  liketab?: React.ReactNode;
  deletpost?: React.ReactNode;
}

function ProfilePosts(props: ProfilePostsProps) {
  const { liketab, deletpost } = props;
  return (
    <div className="max-w-xl min-h-37.5 border-2 border-[#E5E5E5] rounded-2xl p-4 flex flex-col gap-6 bg-white shadow-sm">
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
          <img src="" alt="Profile" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-[#171717] text-lg">
              Farshad Hosseini
            </span>
            <span className="text-[#737373] text-sm font-medium">
              @f.e.h.farshad
            </span>
            <span className="text-[#737373]">•</span>
            <span className="text-[#737373] text-sm font-medium">
              8 days ago
            </span>
            {deletpost}
          </div>

          <p className="mt-2 text-[#171717]">image </p>
        </div>
      </div>

      <div className="mt-auto px-1">{liketab} </div>
    </div>
  );
}

export default ProfilePosts;
