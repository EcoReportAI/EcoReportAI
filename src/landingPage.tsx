import NavBar from "./components/navbar"
import Footer from "./components/footer"
import { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
const Home = () => {
    const [openAccordion, setOpenAccordion] = useState(false);
    const handleAccordion = () => {
        setOpenAccordion(!openAccordion)
    }
    const GreenData = [
        {
            id: 1,
            question: 'What is Green-Badge?',
            answer:'Green-Badge is a municipal-led sustainability platform that certifies, tracks and verifies impactful sustainability projects. It connects municipalities, project developers and investors to drive measurable environmental, social and economic progress.'
        },
        {
            id: 2,
            question: 'How does the certification process work?',
            answer:'Projects are certified by municipalities based on sustainability standards, with options for Verra or Gold Standard certification for marketplace listings.'
        },
        {
            id: 3,
            question: 'Who is Green-Badge for?',
            answer:'Green-Badge is designed for Municipalities: To certify and track local sustainability projects Developers: To certify projects, gain recognition and attract investments. Investors: To fund verified projects or purchase carbon credits'
        },
        {
            id: 4,
            question: 'How can I get started with Green-Badge?',
            answer:'Getting started is simple: Municipalities: Select basic plan or contact us for custom option. Developers: Submit your project for certification. Investors: Browse verified projects or buy carbon credits.'
        }

    ]
    return (
        <>
            <NavBar/>
            {/* Header  */}
            <section id="header">
                <div className="header pt-[60px] pl-[80px] text-black bg-gradient-to-b from-[#03FF95] to-[#011F29] sm:pl-[30px] md:pl-[30px] lg:pl-[80px]" data-aos="fade-down">
                    <div className='flex justify-center items-center flex-row sm:items-start md:items-start lg:items-center sm:flex-col md:flex-col lg:flex-row'>
                        <div className="pt-[40px] w-[70%] sm:w-[90%] md:w-[70%] lg:w-[70%]">
                            <h2 className="h mb-2 text-[50px] text-white leading-[60px] font-bold mb-[30px] w-[90%]  sm:w-full md:w-[98%] lg:w-[90%] sm:text-[25px] md:text-[32px] sm:leading-[30px] md:leading-[40px] lg:text-[50px] lg:leading-[60px]">Empowering Municipalities for Certified Sustainability and Verified Impact</h2>
                            <p className='w-[85%] text-white font-bold text-bold text-[17px] mb-7 sm:text-[15px] md:text-[16px] lg:text-[16px] sm-full md:w-full lg:w-[85%] sm:text-[13px] md:text-[14px] lg:text-[17px]'>Green-Badge connects municipalities, project owners, and investors to accelerate sustainable initiatives. We offer project certification, real-time impact tracking and a trusted marketplace for green investments to drive measurable environmental, social and economic progress.</p>
                            <div className='text-[14px] sm:mb-[20px] md:mb-[20px] lg:mb-0'>
                                <a href="/" rel="noopener noreferrer"><button  className="px-[20px] py-[5px] border-none mr-[20px] text-white bg-gradient-to-r from-[#03FF95] to-[#008890] rounded-[4px]" type="button">Get Started</button></a>
                                <a className="text-[14px] mr-[20px]" href="#works" rel="noopener noreferrer"><button  className="px-[20px] py-[5px] border border-[#03FF95] text-[#008890] bg-[#FFFFFF] rounded-[4px] hover:bg-gray-300" type="button">Learn More...</button></a>
                            </div>
                        </div>
                        <img src="/images/image_fx_ (5) 1.webp" className='w-[35%] md:w-[40%] lg:w-[35%] sm:hidden md:hidden lg:flex' alt="" />
                    </div>
                </div>
            </section>
            {/* How it works */}
            <section id="works" data-aos="fade-down" className="animation-fadeInUp">
                <div className="pt-[30px] px-[80px] sm:px-[30px] md:px-[30px] lg:px-[80px]">
                    <h2 className="font-bold text-center text-[#14192B] text-[25px] sm:text-[20px] md:text-[20px] lg:text-[25px]">How Green-Badge Works</h2>
                    <div className="flex pt-[30px] pb-[40px] justify-center items-center flex-row sm:flex-col md:flex-col lg:flex-row lg:flex" data-aos="fade-right">
                        <div className="bg-green-100 rounded-md pt-[20px] w-[35%] mr-[40px] shadow-md mb-0 sm:mr-[10px] md:mr-[10px] lg:mr-[40px] sm:mb-[20px] md:mb-[20px] sm:w-[95%] md:w-[60%] lg:w-[35%]">
                            <div className="px-[30px]">
                                <img className="w-[20%]" src="/icons/wired-gradient-948-stock-share 1.webp" alt="" />
                                <h2 className="font-bold text-[#14192B] text-[20px]">For Developers:</h2>
                                <ul className="text-black text-[11px] space-y-2 mt-[10px] mb-[20px] ml-[20px]">
                                    <li className="list-disc w-[96%]">Submit your sustainability project for certification.</li>
                                    <li className="list-disc">Get Certified by meeting municipal sustainability standards.</li>
                                    <li className="list-disc">Access marketplace for green investment and offset</li>
                                    <li className="list-disc">Real-time environmental and social impact reporting.</li>
                                </ul>
                            </div>
                            <img className="" src="/images/Rectangle 10.webp" alt="" />
                        </div>
                        <div className="bg-green-100 rounded-md pt-[20px] w-[35%] mr-[40px] shadow-md mb-0 sm:mr-[10px] md:mr-[10px] lg:mr-[40px] sm:mb-[20px] md:mb-[20px] sm:w-[95%] md:w-[60%] lg:w-[35%]">
                            <div className="px-[30px]">
                                <img className="w-[20%]" src="/icons/wired-gradient-948-stock-share 1 (1).webp" alt="" />
                                <h2 className="font-bold text-[#14192B] text-[20px]">For Investors:</h2>
                                <ul className="text-black text-[11px] space-y-6 mt-[10px] mb-[20px] ml-[20px]">
                                    <li className="list-disc w-[96%]">Browse certified projects with transparent, verified data.</li>
                                    <li className="list-disc">Invest in projects or purchase carbon credits.</li>
                                    <li className="list-disc">Monitor your investments' impact with real-time updates.</li>
                                </ul>
                            </div>
                            <img className="object-fill" src="/images/h2.webp" alt="" />
                        </div>
                        <div className="bg-green-100 rounded-md pt-[20px] w-[35%] mr-[40px] shadow-md sm:mr-[10px] md:mr-[10px] lg:mr-[40px] sm:w-[95%] md:w-[60%] lg:w-[35%]">
                            <div className="px-[30px]">
                                <img className="w-[20%]" src="/icons/wired-gradient-948-stock-share 1 (2).webp" alt="" />
                                <h2 className="font-bold text-[#14192B] text-[20px]">For Municipal's:</h2>
                                <ul className="text-black text-[11px] space-y-2 mt-[10px] mb-[20px] ml-[20px]">
                                    <li className="list-disc w-[96%]">Certify local sustainability projects to meet environmental goals.</li>
                                    <li className="list-disc">Monitor progress through real-time impact tracking.</li>
                                    <li className="list-disc">Promote green investments and showcase city-wide sustainability efforts.</li>
                                </ul>
                            </div>
                            <img className="object-fill" src="/images/Rectangle 10 (2).webp" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Why Chose */}
            <section>
                <div className="flex pt-[30px] px-[80px] sm:px-[25px] md:px-[20px] lg:px-[80px] sm:flex-col md:flex-col lg:flex-row">
                    <h2 className="font-bold text-left text-[#14192B] pl-[60px] text-[25px] w-[70%] sm:text-[22px] md:text-[25px] lg:text-[30px] sm:w-full md:w-[80%] lg:w-[70%]">Why Choose <br/> Green-Badge?</h2>                            
                    <img className="w-[50%] opacity-90 visible sm:invisible md:invisible lg:visible" src="/images/Rectangle 16.webp" alt="" />
                </div> 
                <div className="flex py-[2px] px-[80px] w-[87%] flex-row relative top-[-300px] left-[5%] sm:px-[20px] md:px-[20px] lg:px-[80px] sm:top-[-100px] md:top-[-100px] lg:top-[-300px] sm:flex-col md:flex-col lg:flex-row" data-aos="fade-right">
                    <div className="bg-[#358019] flex justify-center items-center flex-col px-[20px] py-[20px] w-[50%] rounded-l-lg sm:mb-[10px] md:mb-[10px] lg:mb-0 sm:w-full md:w-[80%] lg:w-[50%]">
                        <img className="w-[28%] mb-[20px]" src="/icons/wired-outline-2665-logo-circle-bitcoin-hover-pinch 1.webp" alt="" />
                        <h2 className="font-bold text-center mb-[20px] text-[15px]">Scalable for Every City:</h2>
                        <p className="font-bold text-center text-[15px] w-[90%]">Adaptable to different cities uniqueness, size and sustainability goals</p>
                    </div>
                    <div className="bg-[#4BB022] flex justify-center items-center flex-col px-[20px] py-[20px] w-[50%] sm:mb-[10px] md:mb-[10px] lg:mb-0 sm:w-full md:w-[80%] lg:w-[50%]">
                        <img className="w-[28%] mb-[20px]" src="/icons/wired-outline-2665-logo-circle-bitcoin-hover-pinch 1 (1).webp" alt="" />
                        <h2 className="font-bold text-center mb-[20px] text-[15px]">Municipal Certification:</h2>
                        <p className="font-bold text-center text-[15px] w-[90%]">Streamlined project certification and sustainability tracking.</p>
                    </div>
                    <div className="bg-[#FBD048] text-black flex justify-center items-center flex-col px-[20px] py-[20px] w-[50%] sm:mb-[10px] md:mb-[10px] lg:mb-0 sm:w-full md:w-[80%] lg:w-[50%]">
                        <img className="w-[28%] mb-[20px]" src="/icons/wired-outline-2665-logo-circle-bitcoin-hover-pinch 2.webp" alt="" />
                        <h2 className="font-bold text-center mb-[20px] text-[15px]">Impact Tracking Dashboard: </h2>
                        <p className="font-bold text-center text-[15px] w-[90%]">Monitor and report environmental, social and economic impacts</p>
                    </div>
                    <div className="bg-[#D9D9D9] text-[#070707] flex justify-center items-center flex-col px-[20px] py-[15px] w-[50%] rounded-r-lg pb-[70px] sm:mb-[10px] md:mb-[10px] lg:mb-0 sm:w-full md:w-[80%] lg:w-[50%]">
                        <img className="w-[28%] mb-[20px]" src="/icons/wired-outline-2665-logo-circle-bitcoin-hover-pinch 3.webp" alt="" />
                        <h2 className="font-bold text-center mb-[20px] text-[15px]">Marketplace of Impact:</h2>
                        <p className="font-bold text-center text-[15px] w-[90%]">Accelerate green financing through the carbon market.</p>
                    </div>
                </div>
            </section>
            {/* Start */}
            <section>
                <div  className="px-[80px] mb-[30px] sm:px-[25px] md:px-[20px] lg:px-[80px]">
                    <h2 className="font-bold text-left text-[#14192B] pl-[60px] text-[25px] text-center sm:pl-[10px] md:pl-[10px] lg:pl-[60px] sm:text-[22px] md:text-[25px] lg:text-[30px]">Start Your Green Journey Today!</h2>
                    <div className="flex border bg-gradient-to-r from-[#011F29] to-[#03FF95] rounded-md pt-[30px] pl-[70px] pr-[5px] mt-[30px] sm:pl-[20px] md:pl-[20px] lg:pl-[70px] sm:flex-col md:flex-col lg:flex-row">
                        <div>
                        <h2 className="font-bold text-[25px] mb-[10px]">Get Started!</h2>
                        <p className="mb-[10px]">Let's accelerate the Net Zero Journey</p>
                        <div className='text-[12px] flex w-[120%] sm:flex-col md:flex-col lg:flex-row'>
                            <a href="/register" rel="noopener noreferrer"><button  className="px-[20px] py-[5px] border-none mr-[20px] text-white bg-gradient-to-r from-[#03FF95] to-[#008890] rounded-[4px] sm:mb-[10px] md:mb-[10px] lg:mb-0" type="button">For Municipal</button></a>
                            <a href="/register" rel="noopener noreferrer"><button  className="px-[20px] py-[5px] border-none mr-[20px] text-white bg-gradient-to-r from-[#03FF95] to-[#008890] rounded-[4px] sm:mb-[10px] md:mb-[10px] lg:mb-0" type="button">Project Developer</button></a>
                            <a href="/register" rel="noopener noreferrer"><button  className="px-[20px] py-[5px] border-none mr-[20px] text-white bg-gradient-to-r from-[#03FF95] to-[#008890] rounded-[4px] sm:mb-[10px] md:mb-[10px] lg:mb-0" type="button">Impact Investor</button></a>
                        </div>
                        </div>
                        <img className="w-[30%] object-contain visible sm:invisible md:invisible lg:visible" src="/images/FB_IMG_16953304614928263 34 (1).webp" alt="" />
                        <img className="w-[15%] visible sm:invisible md:invisible lg:visible" src="/images/Lady on yellow 1.webp" alt="" />
                    </div>
                </div>
            </section>
            {/* Users */}
            <section>
                <div className="px-[80px] mb-[30px] bg-[#E6FFF4] py-[30px] sm:px-[20px] md:px-[20px] lg:px-[80px]">
                    <h2 className="font-bold text-left text-[#14192B] pl-[60px] text-[25px] text-center sm:pl-[10px] md:pl-[10px] lg:pl-[60px] sm:text-[22px] md:text-[25px] lg:text-[30px]">What Our Users Are Saying</h2>
                    <div className="flex justify-center items-center flex-row mt-[30px] sm:flex-col md:flex-col lg:flex-row">
                        <div className="flex justify-center items-center flex-row sm:flex-col md:flex-col lg:flex-row sm:items-start sm:justify-start md:items-start md:justify-start lg:items-center lg:justify-center">
                            <img className="w-[30%] mt-[30px]" src="/images/Rectangle 20.webp" alt="" />
                            <div className="ml-[20px] sm:ml-0 md:ml-0 lg:ml-[20px] sm:mt-[20px] md:mt-[20px] lg:mt-0">
                                <img className="w-[20%] mb-[20px]" src="/icons/Review.webp" alt="" />
                                <p className="text-black w-[90%] mb-[20px] font-normal">"Thanks to Green-Badge, our renewable energy project received global recognition and measurable impact tracking."</p>
                                <div className="flex justify-left items-center">
                                    <h2 className="font-bold text-[#14192B] text-[18px] mr-[10px]">– Abdulsalam R.,</h2>
                                    <p className="text-[#64748B] text-[14px]">Green Project Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center sm:flex-col md:flex-col lg:flex-row sm:items-start sm:justify-start md:items-start md:justify-start lg:items-center lg:justify-center">
                            <img className="w-[25%] mt-[30px]" src="/images/Rectangle 21.webp" alt="" />
                            <div className="ml-[20px] sm:ml-0 md:ml-0 lg:ml-[20px] sm:mt-[20px] md:mt-[20px] lg:mt-0">
                                <img className="w-[20%] mb-[20px]" src="/icons/Review.webp" alt="" />
                                <p className="text-black w-[90%] mb-[20px] font-normal sm:w-full md:w-full lg:w-[90%]">"I can easily track and offset my company's carbon emissions with verified credits through Green-Badge. It's a game changer for corporate sustainability."</p>
                                <div className="flex justify-left items-center">
                                    <h2 className="font-bold text-[#14192B] text-[18px] mr-[10px]">– Phillips B.,</h2>
                                    <p className="text-[#64748B] text-[14px]">Corporate Sustainability Officer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Pricing */}
            <section>
                <div>
                    <h2 className="font-bold text-left text-[#14192B] text-[30px] text-center sm:text-[22px] md:text-[25px] lg:text-[30px]">Pricing</h2>
                    <p className="text-[#4B5262] text-center">Flexible Plans for Developers, Investors and Municipalities</p>
                    <div className="flex pt-[30px] pb-[10px] justify-center items-center flex-row sm:flex-col md:flex-col lg:flex-row" data-aos="fade-right">
                        <div className="rounded-md pt-[20px] w-[25%] mr-[40px] shadow-md border-[#03FF95] border sm:mb-[20px] md:mb-[20px] lg:mb-0 sm:mr-0 md:mr-0 lg:mr-[40px] sm:w-[90%] md:w-[50%] lg:w-[25%]">
                            <div className="flex justify-center flex-col items-center">
                                <h2 className="font-bold text-[#14192B] text-[20px]">For Developers</h2>
                                <p className="text-[#4B5262] text-[15px] mt-[10px]">Customer Reach & Budget</p>
                                <h2 className="font-bold text-[#14192B] text-[35px] my-[20px]">$20<span className="font-normal text-[18px]">/Starter</span></h2>
                                <hr className="w-full" />
                                <ul className="text-black text-[14px] space-y-2 mb-[20px] ml-[20px] px-[30px] mt-[30px]">
                                    <li className="list-disc">Municipal certification fee</li>
                                    <li className="list-disc">Optional certifications (e.g., Verra, Gold Standard).</li>
                                    <li className="list-disc">Access to advanced analytics and boosted project visibility.</li>
                                </ul>
                                <a href="/" rel="noopener noreferrer"><button  className="px-[45px] py-[13px] my-[30px] border-none text-white bg-gradient-to-r from-[#143E14] to-[#6FB432] rounded-[10px]" type="button">Get Started</button></a>
                            </div>
                        </div>
                        <div className="rounded-md bg-gradient-to-r from-[#143E14] to-[#6FB432] pt-[20px] w-[25%] mr-[40px] shadow-md border-[#03FF95] border sm:mb-[20px] md:mb-[20px] lg:mb-0 sm:mr-0 md:mr-0 lg:mr-[40px] sm:w-[90%] md:w-[50%] lg:w-[25%]">
                            <div className="flex justify-center flex-col items-center text-white">
                                <h2 className="font-bold text-[20px]">For Impact Investors</h2>
                                <p className="text-[15px] mt-[10px]">Customer Reach & Budget</p>
                                <h2 className="font-bold text-[35px] my-[20px]">$0<span className="font-normal text-[18px]">/Starter</span></h2>
                                <hr className="w-full" />
                                <ul className="text-[14px] space-y-2 mb-[20px] ml-[20px] px-[30px] mt-[30px]">
                                    <li className="list-disc"><strong>Pay-As-You-Go:</strong> Purchase carbon credits on-demand.</li>
                                    <li className="list-disc"><strong>Corporate Sustainablitiy Plans:</strong> Custom packages for large-scale carbon footprint offsets.</li>
                                </ul>
                                <a href="/" rel="noopener noreferrer"><button  className="px-[45px] py-[13px] my-[30px] border-none text-[#29591B] bg-white rounded-[10px] sm:my-[20px] md:my-[20px] lg:my-[35px]" type="button">Get Started</button></a>
                            </div>
                        </div>
                        <div className="rounded-md pt-[20px] w-[25%] mr-[40px] shadow-md border-[#03FF95] border sm:mb-[20px] md:mb-[20px] lg:mb-0 sm:mr-0 md:mr-0 lg:mr-[40px] sm:w-[90%] md:w-[50%] lg:w-[25%]">
                            <div className="flex justify-center flex-col items-center">
                                <h2 className="font-bold text-[#14192B] text-[20px]">For Municipalities</h2>
                                <p className="text-[#4B5262] text-[15px] mt-[10px]">Customer Reach & Budget</p>
                                <h2 className="font-bold text-[#14192B] text-[35px] my-[20px]">$500<span className="font-normal text-[18px]">/Month</span></h2>
                                <hr className="w-full" />
                                <ul className="text-black text-[14px] mb-[10px] ml-[20px] px-[30px] mt-[30px]">
                                    <li className="list-disc"><strong>Basic:</strong> Project submission and certification.</li>
                                    <li className="list-disc"><strong>Enterprise:</strong> Advanced tools for tracking, impact reporting and project management.</li>
                                    <li className="list-disc">Access to Municipal Green investment and support packages.</li>
                                </ul>
                                <a href="/" rel="noopener noreferrer"><button  className="px-[45px] py-[13px] my-[20px] border-none text-white bg-gradient-to-r from-[#143E14] to-[#6FB432] rounded-[10px] sm:my-[20px] md:my-[20px] lg:my-[25px]" type="button">Get Started</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQ */}
            <section id="faq">
                <div className="bg-[#E6FFF4] flex justify-center items-center py-[90px] mt-[30px]">
                    <h2 className="font-bold text-left text-[#444C66] pl-[60px] text-[25px] text-center sm:pl-[10px] md:pl-[20px] lg:pl-[60px]">FAQ's. Your questions answered.</h2>
                </div>
                <div className="my-[50px] mx-[90px] sm:mx-[20px] md:mx-[20px] lg:mx-[90px]">
                <Accordion className="" allowZeroExpanded>
                        {GreenData.map((GreenDatas) => (
                            <AccordionItem  key={GreenDatas.id} onClick={handleAccordion}>
                                <div className="">
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="">
                                            <div className="px-[290px] text-[#444C66] flex justify-between items-center w-[90%]  mb-[30px] sm:px-[20px] md:px-[20px] lg:px-[290px]">
                                                <h1 className="font-bold text-[19px] mr-[10px]">{GreenDatas.question}</h1>
                                                <img className={!openAccordion ? 'rotate-0 w-[4%]' : 'rotate-[180deg] w-[4%]'} src="/icons/bottom.png" alt="" />
                                                {/* {!openAccordion ? 'rotate-0 w-[7%] object-contain' : 'rotate-[90deg] w-[7%] object-contain'} */}
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="text-left w-[80%] pl-[290px] transition ease-in-out delay-100 sm:pl-[20px] md:pl-[20px] lg:pl-[290px] sm:w-full md:w-[90%] lg:w-[80%]">
                                        <p className='text-[#8E8F93] mb-[30px] mt-[10px] sm:text-[15px] md:text-[15px] lg:text-[16px]'>{GreenDatas.answer}</p>
                                    </AccordionItemPanel>
                                </div>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
            {/* About */}
            <section id="about">
                <div>
                    <h2 className="font-bold text-left text-[#14192B] text-[30px] text-center sm:text-[22px] md:text-[25px] lg:text-[30px]">About Us</h2>
                    <p className="text-[#4B5262] text-center">Who we are</p>
                    <div className="px-[60px] text-center sm:px-[20px] md:px-[20px] lg:px-[60px]">
                        <p className="text-[#4B5262] mt-[30px]">Green-Badge is a municipal-led sustainability certification solution designed to empower cities and communities in managing, tracking and verifying sustainability initiatives. It connects local governments, project owners and investors, facilitating green investments, carbon offset purchases and the tracking of impactful sustainability projects. Through this platform, municipalities can certify and showcase projects that align with their environmental goals, ensuring transparency, accountability and measurable impact.</p>
                    </div>
                    
                </div>
            </section>
            <section id="contact">
                <Footer />
            </section>
        </>
    )
}
export default Home