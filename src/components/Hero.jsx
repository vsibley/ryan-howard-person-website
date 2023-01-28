import Headshot from '../assets/Headshot.jpg'

const Hero = () => {
    return (


        <div className='pt-[5rem] md:pt-[8rem] mx-5 overflow-hidden'>
            <div class="container flex mx-auto">
                <div class="relative flex flex-col sm:max-w-2/3 md:max-w-2xl lg:w-full">
                    <h1 class="flex flex-col text-5xl md:text-6xl font-black text-gray-800 uppercase">
                       RYAN HOWARD
                    </h1>

                   <h2 className='text-2xl md:text-3xl font-thin'>Mortgage Advisor Liscended In Oregon</h2>
                   <p className='text-sm md:text-md font-thin pt-2'>NMLS:0000-000000-00000</p>


                    <p className='pt-8 font-thin max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odio quidem illum impedit dolorum alias saepe illo porro exercitationem, in molestiae placeat enim hic eveniet.</p>


                    <div class="flex mt-[3rem] md:mt-[8rem] lg:mt-[9rem]">
                        <a href="#" class="px-4 py-2 mr-4 text-[#2b6ea6] uppercase bg-transparent border-2 border-[#2b6ea6] rounded-lg hover:bg-[#2b6ea6] hover:text-white">
                            Book A Call
                        </a>
                      
                        <a href="#" class="px-4 py-2 text-[#2b6ea6] uppercase bg-transparent border-2 border-[#2b6ea6] rounded-lg hover:bg-[#2b6ea6] hover:text-white text-md">
                            Email
                        </a>
                    </div>
                </div>


                <div class="relative hidden sm:block sm:w-1/3 lg:w-3/5">
                    <img src={Headshot} class="max-w-xs m-auto md:max-w-md rounded-sm object-contain" />
                </div>
            </div>
        </div>

    )
}

export default Hero