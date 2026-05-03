const WhoToFollow = () => {
  return (
    <nav className=" flex flex-col p-6 items-start justify-center border-2 border-[#E5E5E5] shadow-sm h-1/6">
      <h2>Who to follow</h2>
      <div className="flex justify-between gap-10">
        <div>
          <button>S</button>
          <span>mohammad</span>
          <p>1 followers</p>
        </div>
        <button>Follow</button>
      </div>
    </nav>
  );
};

export default WhoToFollow;
