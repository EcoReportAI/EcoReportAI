function Footer () {
    return (
        <>
            <div className="flex justify-between flex-col bg-gradient-to-r from-[#143E14] to-[#6FB432] items-center mt-[40px] pt-[30px] pb-[20px] sm:items-start md:items-start lg:items-center">
                <div className="grid grid-cols-3 gap-[170px] mx-[30px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 sm:gap-[20px] md:gap-[20px] lg:gap-[170px]"> 
                    <div className="flex flex-col">
                        <h2 className="text-white text-[18px] font-bold mb-[40px]">Contact</h2>
                        <a className="text-[15px] mb-[20px]" href="">support@green-badge.com</a>
                        <a className="text-[15px] mb-[20px]" href="">+2348028157761</a>
                    </div>  
                    <div className="flex flex-col">
                        <h2 className="text-white text-[18px] font-bold mb-[40px]">Legal</h2>
                        <a className="text-[15px] mb-[30px]" href="">Privacy Policy</a>
                        <a className="text-[15px]" href="">Terms of Service</a>
                    </div>  
                    <div className="flex flex-col">
                        <h2 className="text-white text-[18px] font-bold mb-[40px]">Social Media Links</h2>
                        <div className="">
                            <a href=""><img className="w-[40%]" src="/src/assets/icons/linkedin.webp" alt="" />Facebook</a>
                            <a href=""><img className="w-[40%]" src="/src/assets/icons/x.webp" alt="" />Twitter</a>
                            <a href=""><img className="w-[40%]" src="/src/assets/icons/instagram.webp" alt="" />LinkedIn</a>
                        </div>
                    </div>  
                </div>
                <h2 className="text-center mt-[30px] sm:text-[15px] md:text-[15px] lg:text-[16px]">@Copyright 2023 (JoeConcepts Technologies). All Rights Reserved.</h2>
            </div>
        </>
    )
}
export default Footer