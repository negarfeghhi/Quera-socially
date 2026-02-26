// import { useState } from "react";
import "./App.css";
// import EditProfileModal from "./components/EditProfileModal";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
// import Post from "./components/Post";
// import Notifications from "./components/Notifications";
// import Notifications from "./components/Notifications";
import ProfileHeader from "./components/ProfileHeader";
import ProfileContent from "./components/ProfileContent";
import Login from "./components/Login";
import ProfileCard from "./components/ProfileCard";
import CreatePost from "./components/CreatePost";
import WhoToFollow from "./components/WhoToFollow";

/*check api
import { useEffect } from "react";
import { login } from "./api/auth";
import { getPosts } from "./api/posts";*/

function App() {
  // const [open, setOpen] = useState(false)
  /*check api
useEffect(() => {
  const load = async () => {
    await login("mohammad@gmail.com", "12345678mF");
    const res = await getPosts();
    console.log(res.data);
  };

  load();
}, []);*/

  return (
    <>
      <div className=" min-h-screen w-full">
        <Navbar />
        {/*  */}
        <Home/>
        {/* <button onClick={() => setOpen(true)}>Modal</button>
        <EditProfileModal open={open} onClose={() => setOpen(false)} />
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
        <Notifications />
        </div> */}
        <div className="flex gap-10">
          <ProfileCard />
        <div className="flex flex-col gap-10 w-fit">
          <CreatePost />
          <div className='hidden'>
      <Login />
      </div>
        <ProfileHeader />
        <ProfileContent />
        </div>
          <WhoToFollow />
        </div>
      </div>
    </>
  );
}

export default App;
