import Headshot from '../assets/HS.png'


const Hero = () => {
    return (
        <div>

            <div className="bg-[url('https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover w-full bg-center container mx-auto bg-no-repeat">

                <div a className="container mx-auto bg-white/80 overflow-hidden relative items-center  lg:flex ">
                    <div a className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">

                        <h1 a className="text-5xl font-black">
                            
                                Ryan Howard
                        </h1>

                        <h2 className='text-xl md:text-3xl font-thin'>Mortgage Advisor Liscended In Oregon</h2>
                        <p className='text-sm md:text-md font-thin pt-2'>NMLS:#2253977</p>


                        <p className='pt-8 font-thin max-w-md'>Welcome to my page where you can get to know me a little more and learn some basics of the home buying process.</p>

                        
                        <div a className="lg:mt-0 lg:flex-shrink-0">
                            <div a className="flex mt-[3rem] md:mt-5rem] lg:mt-[6rem]">
                                <a href="https://calendly.com/rhoward-06" a className="px-4 py-2 mr-4 uppercase bg-[transparent] border-2 border-prim hover:border-white rounded-lg hover:bg-white hover:font-semibold">
                                    Book A Call
                                </a>

                                <a href="#" a className="px-4 py-2  uppercase bg-transparent border-2  border-prim hover:border-white rounded-lg hover:bg-white hover:font-semibold text-md">
                                    Email
                                </a>
                            </div>
                        </div>
                    </div>
                    <div a className="flex items-center p-3 lg:p-24">
                        <img src={Headshot} className="rounded-lg sm:max-w-xs mx-auto md:max-w-md drop-shadow-sm shadow-black object-cover" alt="Tree" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero



// import Headshot from '../assets/HS.png'

// const Hero = () => {
//     return (

//         <div className="bg-[url('https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover w-full bg-center container mx-auto bg-no-repeat">
//         <div className=' bg-white/80 md:py-[8rem]'>
//             <div className='pt-[4rem] md:pt-[6rem] mx-5 overflow-hidden'>

//                     <div a className="container mx-auto  overflow-hidden relative items-center  lg:flex ">
//                         <div a className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-1 z-20">

//                             <h1 a className="text-5xl font-semibold">

//                                 Ryan Howard
//                             </h1>

//                             <h2 className='text-xl md:text-3xl font-thin'>Mortgage Advisor Liscended In Oregon</h2>
//                             <p className='text-sm md:text-md font-thin pt-2'>NMLS:0000-000000-00000</p>


//                             <p className='pt-8 font-thin max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odio quidem illum impedit dolorum alias saepe illo porro exercitationem, in molestiae placeat enim hic eveniet.</p>

//                             <p a className="text-md mt-4">
//                                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid voluptatem eius quod beatae. Consequatur sed accusamus autem temporibus, vero hic sit laboriosam debitis ad maiores.
//                             </p>
//                             <div a className="lg:mt-0 lg:flex-shrink-0">
//                                 <div a className="flex mt-[3rem] md:mt-5rem] lg:mt-[6rem]">
//                                     <a href="#" a className="px-4 py-2 mr-4 uppercase bg-[transparent] border-2 border-[#2b6ea6] rounded-lg hover:bg-[#2b6ea6]">
//                                         Book A Call
//                                     </a>

//                                     <a href="#" a className="px-4 py-2  uppercase bg-transparent border-2 border-[#2b6ea6] rounded-lg hover:bg-[#2b6ea6] text-md">
//                                         Email
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div a className="flex items-center gap-8 p-8 lg:p-24">
//                             <img src={Headshot} className="rounded-lg max-w-xs m-auto md:max-w-md  drop-shadow-sm shadow-black" alt="Tree" />

//                         </div>
//                     </div>
//             </div>
//         </div>
//         </div>

//     )
// }

// export default Hero