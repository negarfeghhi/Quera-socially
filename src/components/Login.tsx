const Login = () => {
  return (
    <nav className="flex flex-col border border-[#E5E5E5] h-fit py-5 shadow-sm items-center rounded-2xl">
        <h2 className="font-bold text-xl pb-6">
            Welcome Back!
            </h2>
        <p className="text-neutral-500 text-center text-base w-[80%] ">
            Login to access your profile and connect with others.
        </p>
        <button className="text-sm border bg-[#0A0A0A] text-white rounded-md border-neutral-800 cursor-pointer hover:bg-neutral-700 hover:w-full hover:shadow-lg hover:shadow-amber-50 transition-all duration-300 w-[90%] py-2 mt-4 ">
            Log In 
        </button>
        <button className="text-sm shadow-xs text-black rounded-md bg-[#FAFAFA] cursor-pointer my-5 hover:bg-neutral-400 hover:w-full hover:shadow-lg hover:shadow-amber-50 transition-all duration-300 w-[90%] py-2">
            Sign Up
        </button>
    </nav>
  )
}

export default Login
