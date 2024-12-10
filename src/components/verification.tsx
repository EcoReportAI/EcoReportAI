const Verification = () => {
    return (
        <>
        <div>
            <div className="flex justify-center mt-[20px] rounded-md shadow-md mx-auto w-[60%]  sm:mt-[10px] md:mt-[30px] lg:mt-[30px] sm:flex-col md:flex-row lg:flex-row sm:w-full md:w-[90%] lg:w-[60%]">
                <img className="w-[33%] object-fit sm:invisible md:visible lg:visible sm:w-[5%] md:w-[33%] lg:w-[33%]" src="/images/Rectangle 9.webp" alt="" />
                <div className="bg-[#F8F8F9] px-[40px] pt-[50px] w-[90%] sm:mx-[20px] sm:px-[10px] md:mx-0 md:px-[40px] lg:mx-0 lg:px-[40px]">
                    <h2 className="text-[#14192B] mb-[20px] text-[30px] font-bold text-center">Verification Successful</h2>
                    <div className="flex justify-center flex-col items-center bg-white rounded-md px-[30px] py-[30px] mb-[30px] mt-[80px]">
                        <img className="w-[20%] mb-[50px]" src="/icons/Mail (1).webp" alt="" />
                        <p className="text-[#627D98] text-center pb-[50px]">Your account have been successfully verified. Product would be launching soon.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Verification