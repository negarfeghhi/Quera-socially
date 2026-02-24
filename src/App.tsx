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

function App() {
  // const [open, setOpen] = useState(false)

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
        <div className="flex flex-col gap-10 mx-auto w-fit">
        <ProfileHeader />
        <ProfileContent />
        </div>
      </div>
    </>
  );
}

export default App;
