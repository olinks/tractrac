import React, {useState, useContext} from "react"
import { useNavigate } from "react-router-dom"
import { LoginContext } from "../Contexts/LoginContext";
import logoonly from "../assets/logoonly.png"
import axios from "axios"

function Login() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const { setIsLoggedIn, userData, setUserData, isRegistered, setIsRegistered } = useContext(LoginContext);
    function toggleForm(a){
        setIsRegistered(a);
    }
    function handleLogin(e){
        e.preventDefault();  
        console.log("Handle Login")
        axios.post('http://127.0.0.1:3001/Auth',{email: email, password: password})
        .then((res) => {
            setUserData(res.data);
            console.log(userData);
            console.log("User Data", res.data);
            setIsLoggedIn(true);
            navigate("/Dashboard");
            
        })
    }

    function handleCreateAccount(e){
        e.preventDefault();  
        axios.post(`http://127.0.0.1:3001/createUser`, {name:name, email:email, password: password})
        .then((res) => {
            console.log(res.data);
            setUserData(res.data);
            setIsRegistered(true);

        })
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
                                setName(e.target.value);
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
                            onClick={isRegistered ? handleLogin : handleCreateAccount}
                            >
                                {isRegistered ? "Login" : "Create Account" }
                            </button>
                        </div>
                        <div className='mt-5'>
                            {isRegistered ? (<p className='text-sm flex justify-center'>Don’t have an account? <a href="/"  className='text-[#100DB1] underline' onClick={() => toggleForm(false)}>Create an account</a></p>) : (<p className='text-sm flex justify-center'>Already have an account? <a href="/" className='text-[#100DB1] underline' onClick={() => toggleForm(true)}>Login</a></p>)}
                        </div>
                    </form>
                </div>
        </div>
    </div>
  )
}

export default Login