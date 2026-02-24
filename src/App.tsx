import { useState } from "react";
import "./App.css";
// import EditProfileModal from "./components/EditProfileModal";
import Navbar from "./Navbar";
// import Notifications from "./components/Notifications";
import ProfileHeader from "./components/ProfileHeader";

function App() {
  // const [open, setOpen] = useState(false)

  return (
    <>
      <div className=" min-h-screen w-full">
        <Navbar />
        {/* <button onClick={() => setOpen(true)}>Modal</button>
        <EditProfileModal open={open} onClose={() => setOpen(false)} />
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
          <Notifications />
        </div> */}
        <ProfileHeader />
      </div>
    </>
  );
}

export default App;
