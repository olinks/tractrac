import React, {useState} from "react"
import logoonly from "../assets/logoonly.png"
import axios from "axios"

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegistered, setIsRegistered] = useState(true);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    function handleClick(){
        axios.get("http://127.0.0.1:3001/login/EMAIL")
        .then((res) => {
            console.log(res.data);
        })
        // axios.post("https://localhost:3001/", {email: email, password: password})
    }
    return (
    <div className='bg-[#100DB1] py-12'>
        <div className="flex flex-1 flex-col py-[55px] sm:mx-auto sm:w-full sm:max-w-lg justify-center px-6 bg-white rounded-lg">
                <div className="">
                    {/* Logo */}
                    <img
                    className="mx-auto h-20 w-auto"
                    src={logoonly}
                    alt="Company Logo"
                    />
                    {/* Login Header */}
                    <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        {isRegistered ? "Login" : "Create Account" }
                    </h2>
                </div>
                {/* Form */}
                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <form method='POST' className='flex flex-col '>
                        {
                            !isRegistered && (
                        <div className='mt-2'>
                            <label 
                            htmlFor='email'
                            className='block'
                            >Name</label>
                            <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            className='border w-full rounded-full h-[45px] p-2'
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            />
                        </div>
                            )
                        }
                        <div className='mt-2'>
                            <label 
                            htmlFor='email'
                            className='block'
                            >Email</label>
                            <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            className='border w-full rounded-full h-[45px] p-2'
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            />
                        </div>
                        <div className='mt-2'>
                            <label>Password</label>
                            <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            className='border w-full rounded-full h-[45px] p-2'
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            />
                        </div>
                        <div className='flex items-center justify-between p-2 text-sm'>
                            <p>
                                <input 
                                type='checkbox'
                                className='checked:bg-[#100DB1] mx-2'
                                />Remember Me
                            </p>

                            <a href='/'><p className='text-[#100DB1] underline'>Forgot Password ?</p></a>
                        </div>
                        <div className='flex justify-center'>
                            <button
                            type='submit'
                            name='submit'
                            className='flex mt-5 w-full justify-center py-3.5 bg-[#100DB1] text-sm font-semibold leading-6 text-white shadow-sm h-[55px] rounded-full'
                            onClick={handleClick}
                            >
                                {isRegistered ? "Login" : "Create Account" }
                            </button>
                        </div>
                        <div className='mt-5'>
                            {isRegistered ? (<p className='text-sm flex justify-center'>Don’t have an account? <a href='/' className='text-[#100DB1] underline'>Create an account</a></p>) : (<p className='text-sm flex justify-center'>Already have an account? <a href='/' className='text-[#100DB1] underline'>Login</a></p>)}
                        </div>
                    </form>
                </div>
        </div>
    </div>
  )
}

export default Login