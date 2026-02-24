import "./App.css";
<<<<<<< Updated upstream
import Navbar from "./Navbar";
=======
// import EditProfileModal from "./components/EditProfileModal";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
// import Post from "./components/Post";
// import Notifications from "./components/Notifications";
>>>>>>> Stashed changes

function App() {
  return (
    <>
      <div className=" min-h-screen w-full">
        <Navbar />
<<<<<<< Updated upstream
=======
        {/*  */}
        <Home/>
        {/* <button onClick={() => setOpen(true)}>Modal</button>
        <EditProfileModal open={open} onClose={() => setOpen(false)} />
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
          <Notifications />
        </div> */}
>>>>>>> Stashed changes
      </div>
    </>
  );
}

export default App;
