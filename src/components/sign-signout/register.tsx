import React, { useState } from 'react';
const Register = () => {
    const [firstn, setFirstn] = useState('');
    const [secondn, setSecondn] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default submission
        if (!firstn || !secondn || !email || !password || !phone) {
        } else {
          // Redirect to the desired location
          window.location.href = '/verified'; // Example for React Router
          // Or use: window.location.href = '/target-location';
        }
      };
    return (
        <>
        <div>
            <div className="flex justify-center mt-[20px] rounded-md shadow-md mx-auto w-[60%] sm:mt-[10px] md:mt-[30px] lg:mt-[30px] sm:flex-col md:flex-row lg:flex-row sm:w-full md:w-[90%] lg:w-[60%]">
                <img className="w-[33%] object-fit sm:invisible md:visible lg:visible sm:w-[5%] md:w-[33%] lg:w-[33%]" src="/src/assets/images/Rectangle 9.webp" alt="" />
                <div className="bg-[#F8F8F9] px-[40px] pt-[50px] w-[90%]  sm:mx-[20px] sm:px-[10px] md:mx-0 md:px-[40px] lg:mx-0 lg:px-[40px]">
                    <h2 className="text-[#14192B] mb-[20px] text-[30px] font-bold text-center">Let's get to know you.</h2>
                    <div className="bg-white rounded-md px-[30px] py-[30px] mb-[30px]">
                        <form className="" action="" onClick={handleSubmit}>
                            <div className="flex">
                                <input className="border mr-[30px] text-[#14192B] outline-none border-[#03FF95] px-[10px] py-[10px] rounded-md w-full mt-[10px] mb-[10px] bg-[#F0FDF4] text-[14px]" type="text"  value={firstn}  onChange={(e) => setFirstn(e.target.value)} name="" id="" placeholder="First name" required/>
                                <input className="border text-[#14192B] outline-none border-[#03FF95] px-[10px] py-[10px] rounded-md w-full mt-[10px] mb-[10px] bg-[#F0FDF4] text-[14px]" type="text" name=""  value={secondn}  onChange={(e) => setSecondn(e.target.value)} id="" placeholder="Last name" required/>
                            </div>
                            <label htmlFor="" className="text-[#01AD92] text-[14px] font-bold">Email Address</label>
                            <input className="border text-[#14192B] outline-none border-[#03FF95] px-[10px] py-[10px] rounded-md w-full mt-[10px] mb-[10px] bg-[#F0FDF4] text-[14px]" type="email"  value={email}  onChange={(e) => setEmail(e.target.value)} name="" id="" placeholder="Email" required/>
                            <label htmlFor="" className="text-[#01AD92] text-[14px] font-bold">Password</label>
                            <input className="border text-[#14192B] outline-none border-[#03FF95] px-[10px] py-[10px] rounded-md w-full mt-[5px] bg-[#F0FDF4] text-[14px] mb-[30px]" type="password" value={password}  onChange={(e) => setPassword(e.target.value)} name="" id="" placeholder="Password" required/>
                            <div className="flex">
                                <input className="border mr-[30px] text-[#14192B] outline-none border-[#03FF95] px-[10px] py-[10px] rounded-md w-full mt-[10px] mb-[10px] bg-[#F0FDF4] text-[14px]" type="tel"  value={phone}  onChange={(e) => setPhone(e.target.value)} name="" id="" placeholder="Phone number" required/>
                                <select name="gender" className="cursor-pointer border mr-[30px] text-[#14192B] outline-none border-[#03FF95] px-[15px] py-[10px] rounded-md w-full mt-[10px] mb-[10px] bg-[#F0FDF4] text-[14px]" required>
                                    <option value="" disabled>Gender</option>
                                    <option>Male</option>
                                    <option >Female</option>
                                </select>
                            </div>
                            <div className="flex text-[12px]">
                                <h2 className="text-black font-bold mr-[5px] mt-[30px]">By sigining up, you agree to our <span><a href="" className="text-[#7B61FF]">Terms of Service</a></span> and <span><a href="" className="text-[#7B61FF]">Privacy Policy</a></span></h2>
                            </div>
                            <div className="flex justify-between items-center mt-[30px] sm:flex-col md:flex-row lg:flex-row">
                                <div className="flex text-[12px] sm:mb-[20px] md:mb-0 lg:mb-0">
                                    <h2 className="text-black font-bold mr-[5px]">Got an account?</h2>
                                    <a className="text-[#7B61FF]" href="/login">Sign In</a>   
                                </div>
                                <a href="/" rel="noopener noreferrer"><button  className="text-[14px] px-[20px] py-[7px] border-none mr-[20px] text-white bg-gradient-to-r from-[#03FF95] to-[#008890] rounded-[4px]" type="submit">Create Free Account</button></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Register