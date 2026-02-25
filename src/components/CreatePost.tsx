import { TbSend } from "react-icons/tb";



const CreatePost = () => {
  return (
    <nav className="border-2 border-[#E5E5E5] shadow-sm rounded-2xl mt-12 max-w-xl h-auto ">
        <div className="flex text-center items-start gap-10">
            <span className="flex items-center justify-center text-white bg-green-700 rounded-full w-15 h-15 p-5 my-5 ml-5">S</span>
            {/* <img src="." alt="Profile" /> */}
            <textarea className="flex-1 resize-none outline-none min-h-25 overflow-hidden my-5" placeholder="What's on your mind?" name="text" id="text"></textarea>
        </div>
        <hr className="text-[#E5E5E5] w-[90%] m-auto" />
        <div className="flex">
        <button className=" flex justify-center items-center gap-3 bg-neutral-800 text-white py-3 px-6 rounded-xl ml-auto my-3 mx-10 cursor-pointer hover:bg-neutral-400 hover:shadow-lg hover:shadow-black transition-color duration-300"><TbSend /> Post</button>
        </div>
    </nav>
  )
}



export default CreatePost
