import Login from "../Login";
import PostList from "../PostList/PostList";
import WhoToFollow from "../WhoToFollow";

const Home = () => {
  return (
    <div className="w-full flex justify-center pt-6 px-24">
      <div className="flex justify-center gap-6">
        <Login />
        <PostList />
        <WhoToFollow/>
      </div>
    </div>
  );
};

export default Home;
