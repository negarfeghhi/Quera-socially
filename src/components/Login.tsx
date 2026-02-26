const Login = () => {
  return (
    <nav className="flex flex-col border border-neutral-800 my-11 mx-10 items-center rounded-2xl py-5">
        <h2 className="font-bold text-3xl pb-6">
            Welcome Back!
            </h2>
        <p className="text-neutral-500 text-center text-xl w-[80%] ">
            Login to access your profile and connect with others.
        </p>
        <button className="text-2xl border  rounded-xl border-neutral-800 cursor-pointer hover:bg-neutral-700 hover:w-full hover:shadow-lg hover:shadow-amber-50 transition-all duration-300 w-[90%] py-2 mt-4 ">
            Log In 
        </button>
        <button className="text-2xl text-black rounded-xl bg-white cursor-pointer my-5 hover:bg-neutral-400 hover:w-full hover:shadow-lg hover:shadow-amber-50 transition-all duration-300 w-[90%] py-2">
            Sign Up
        </button>
    </nav>
  )
}

export default Login
