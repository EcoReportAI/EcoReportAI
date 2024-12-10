import React, { useState } from 'react';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default submission
        if (!email || !password) {
          alert('All fields are required!');
        } else {
          // Redirect to the desired location
          window.location.href = '/verified'; // Example for React Router
          // Or use: window.location.href = '/target-location';
        }
      };
    return (
        <>
        <div>
            <div className="flex justify-center mt-[30px] rounded-md shadow-md mx-auto w-[60%] sm:mt-[10px] md:mt-[30px] lg:mt-[30px] sm:flex-col md:flex-row lg:flex-row sm:w-full md:w-[90%] lg:w-[60%]">
                <img className="w-[33%] object-fit sm:invisible md:visible lg:visible sm:w-[5%] md:w-[33%] lg:w-[33%]" src="/src/assets/images/Rectangle 9.webp" alt="" />
                <div className="bg-[#F8F8F9] px-[40px] pt-[50px] w-[90%] sm:mx-[20px] sm:px-[10px] md:mx-0 md:px-[40px] lg:mx-0 lg:px-[40px]">
                    <h2 className="text-[#14192B] mb-[20px] text-[30px] font-bold text-center">Welcome Back!</h2>
                    <p className="mb-[40px] text-[#8E8F93] text-[17px] text-center">Sign in to continue</p>
                    <div className="bg-white rounded-md px-[30px] py-[30px] mb-[30px]">
                        <form className="" action="" onSubmit={handleSubmit}>
                            <label htmlFor="" className="text-[#01AD92] text-[14px] font-bold">Email Address</label>
                            <input className="border text-[#14192B] outline-none border-[#03FF95] px-[10px] py-[10px] rounded-md w-full mt-[10px] mb-[10px] bg-[#F0FDF4] text-[14px]" type="email" value={email}  onChange={(e) => setEmail(e.target.value)} name="" id="" placeholder="Email" required/>
                            <label htmlFor="" className="text-[#01AD92] text-[14px] font-bold">Password</label>
                            <input className="border text-[#14192B] outline-none border-[#03FF95] px-[10px] py-[10px] rounded-md w-full mt-[5px] bg-[#F0FDF4] text-[14px] mb-[30px]" type="password" value={password}  onChange={(e) => setPassword(e.target.value)} name="" id="" placeholder="Password" required/>
                            <a className="text-[#7B61FF] mt-[20px] text-[14px]" href="">Forgot password?</a>
                            <div className="flex justify-between items-center mt-[20px]">
                                <div className="flex text-[13px]">
                                    <h2 className="text-black font-bold mr-[5px]">New User?</h2>
                                    <a className="text-[#7B61FF]" href="/register">Create Account</a>   
                                </div>
                                <button  className="text-[14px] px-[20px] py-[5px] border-none mr-[20px] text-white bg-gradient-to-r from-[#03FF95] to-[#008890] rounded-[4px]" type="submit">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Login