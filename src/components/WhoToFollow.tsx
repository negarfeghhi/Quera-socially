const WhoToFollow = () => {
  return (
    <nav className=" flex flex-col p-6 my-12 ml-11 rounded-2xl items-start justify-center border-2 border-[#E5E5E5]  shadow-sm h-1/6">
        <h2 className="font-semibold text-2xl">
            Who to follow
        </h2>
        <div className="flex justify-between items-center gap-25">
            <div className="flex items-center justify-center gap-2">
                <button className="flex items-center justify-center text-white bg-green-700 rounded-full w-10 h-10 p-5 my-5 ml-5">S</button>
                <div className="flex flex-col text-sm">
                <span>mohammad</span>
                <p>1 followers</p>
                </div>
            </div>
            <button className="border border-[#E5E5E5] shadow-sm px-5 py-2 rounded-xl font-semibold hover:bg-neutral-400 transition-colors duration-300">Follow</button>
        </div>
    </nav>
  )
}

export default WhoToFollow
