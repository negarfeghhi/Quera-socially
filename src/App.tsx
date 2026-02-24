import "./App.css";
// import EditProfileModal from "./components/EditProfileModal";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
// import Post from "./components/Post";
// import Notifications from "./components/Notifications";

function App() {
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
      </div>
    </>
  );
}

export default App;
