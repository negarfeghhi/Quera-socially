import PostList from "../PostList/PostList";

const Home = () => {
  return (
    <div className="w-full flex justify-center bg-gray-100 min-h-screen pt-6">
      <div className="w-full max-w-5xl flex justify-center gap-6">
        <PostList />
      </div>
    </div>
  );
};

export default Home;
