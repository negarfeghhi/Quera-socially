import { useState } from "react";
import "./App.css";
import EditProfileModal from "./components/EditProfileModal";
import Navbar from "./Navbar";

function App() {

  const [open, setOpen] = useState(false)

  return (
    <>
      <div className=" min-h-screen w-full">
        <Navbar />
        <button onClick={()=>setOpen(true)}>Modal</button>
        <EditProfileModal open={open} onClose={()=>setOpen(false)}/>
      </div>
    </>
  );
}

export default App;
