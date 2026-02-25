import { useState } from "react";
import "./App.css";
// import EditProfileModal from "./components/EditProfileModal";
import Navbar from "./Navbar";
// import Notifications from "./components/Notifications";
import ProfileHeader from "./components/ProfileHeader";
import ProfileContent from "./components/ProfileContent";

import { useEffect } from "react";
import { login } from "./api/auth";
import { getPosts } from "./api/posts";


function App() {
  // const [open, setOpen] = useState(false)
useEffect(() => {
  const load = async () => {
    await login("mohammad@gmail.com", "12345678mF");
    const res = await getPosts();
    console.log(res.data);
  };

  load();
}, []);

  return (
    <>
      <div className=" min-h-screen w-full">
        <Navbar />
        {/* <button onClick={() => setOpen(true)}>Modal</button>
        <EditProfileModal open={open} onClose={() => setOpen(false)} />
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
          <Notifications />
        </div> */}
        <div className="flex flex-col gap-10 mx-auto w-fit">
        <ProfileHeader />
        <ProfileContent />
        </div>
      </div>
    </>
  );
}

export default App;
