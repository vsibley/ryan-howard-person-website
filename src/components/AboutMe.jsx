import React from 'react'

const AboutMe = () => {
    return (

        <div className="bg-[url('https://images.unsplash.com/photo-1612293653515-a470738435ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')]  bg-cover w-full bg-right container mx-auto ">
            <div className=' bg-white/80 pb-[4rem] py-10 md:py-[6rem] px-4'>
        <div class="container mx-auto px-4 flex flex-wrap w-full justify-around">
            <div class="flex flex-col w-full lg:w-1/2 items-center ">

                <div class=" flex flex-col sm:max-w-full md:max-w-2xl lg:w-full xl:w-full">
                            <h2 className='text-4xl font-mulish font-black'>About Me</h2>

                            <p className='pt-8 font-regular max-w-md'>Born and raised here in Oregon, I have spent my whole life exploring what this wonderful state has to offer and continue to do so to this day. In the summer I love spending time near any body of water with my doggos, Mike and Gary or playing golf with friends, clients, and business partners. In the winters I can be found cozied up by my wood stove or up at the mountain skiing or snowmobiling. Prior to my career in the mortgage industry, I worked in the construction industry learning the ins and outs of numerous different trades. I secretly love when something breaks around the house because it gives me a reason to dust off my tool bags and see if I still know how to use them.</p>


                            <p className='pt-8 font-regular max-w-md'>As for the working as your Mortgage Advisor, I believe in the value of home ownership and understand the importance of finding the right loan to achieve your goals. With a deep understanding of the many loan programs, I work diligently to understand each client's needs, and find mortgage solutions to best fit their financial goals.</p>

                            <p className='pt-8 font-regular max-w-md'>Throughout the borrowing process you can count on me to be a trusted guide through the loan process and ensure that your loan is completed thoroughly, accurately, and on time. I am backed by a dedicated team of operational experts and state-of-the-art technology designed to make the loan process easy and efficient.</p>
                            



                </div>

            </div>

            {/* Form */}

                    <div class="flex-col mt-5 sm:max-w-full md:max-w-2xl lg:w-1/2 xl:w-1/2 px-4 py-8 bg-white rounded-lg shadow-lg shadow-black sm:px-6 md:px-8 lg:px-10">
                    <div class="self-start mb-2 text-xl font-light  sm:text-2xl ">
                        Contact Me
                    </div>
                   
                    <div class="mt-8">
                        <form action="#">

                            <div class="flex gap-4 mb-2">
                                <div class=" relative ">
                                    <input type="text" id="create-account-first-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="First name" placeholder="First name" />
                                </div>
                                <div class=" relative ">
                                    <input type="text" id="create-account-last-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="Last name" placeholder="Last name" />
                                </div>
                            </div>

                            <div class="flex flex-col mb-2">
                                <div class=" relative ">
                                    <input type="text" id="create-account-pseudo" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="pseudo" placeholder="email" />
                                </div>
                            </div>
                         
                            <div class="flex flex-col mb-2">
                                <div class=" relative ">
                                    <input type="text" id="create-account-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" />
                                </div>
                            </div>
                            <div class="flex w-full my-4">
                                <button type="submit" class="py-2 px-4  bg-prim hover:bg-purple-700 focus:ring-second focus:ring-offset-prim text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Login
                                </button>
                            </div>
                        </form>

                     

                    </div>
                </div>

        </div>
</div>
</div>
    )
}

export default AboutMe