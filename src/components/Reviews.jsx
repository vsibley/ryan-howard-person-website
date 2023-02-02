import Headshot from '../assets/Headshot.jpg'
import { AiFillStar } from 'react-icons/ai'

const Reviews = () => {
    return (
        <div className='container px-8 py-[3rem] mx-auto font-mulish'>
            <h2 class="flex text-4xl font-black font-mulish sm:text-4xl">

          Customer Reviews | Average Rating 4.8 <AiFillStar className='text-gold hidden md:flex' /></h2>

            <div class="flex flex-col items-center  w-full gap-4 p-3 mb-8 md:flex-row md:mb-0 flex-between">

                <div class="bg-white w-full md:w-1/3  shadow-lg mx-auto rounded-xl p-4">
                    <p className='flex py-2'><AiFillStar className='text-gold' /><AiFillStar className='text-gold' /><AiFillStar className='text-gold' /><AiFillStar className='text-gold' /><AiFillStar className='text-gold' /></p>
                    <p class="text-gray-600">
                        <span class="text-lg font-bold">
                            “
                        </span>
                        Ryan and his team were amazing in helping us get our first home loan. We were a bit shy going into our first buy but Ryan guided us in the right direction and gave us useful advice along the way, was always there when we needed him and answered any questions we had along the way. I would totally recommend to anyone looking to purchase or refinance. Thanks Ryan!
                        <span class="text-lg font-bold">
                            ”
                        </span>
                    </p>
                    <div class="flex items-center mt-4">
                        <a href="#" class="relative block">
                            <img alt="profil" src={Headshot} class="mx-auto object-cover rounded-full h-10 w-10 " />
                        </a>
                        <div class="flex flex-col justify-between ml-2">

                            <span class="flex items-center text-sm font-medium">
BERZAIN E                                
                            </span>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div class="bg-white w-full md:w-1/3 shadow-lg mx-auto rounded-xl p-4">
                    <p className='flex py-2'><AiFillStar className='text-gold' /><AiFillStar className='text-gold' /><AiFillStar className='text-gold' /><AiFillStar className='text-gold' /><AiFillStar className='text-gold' /></p>
                    <p class="text-gray-600">
                        <span class="text-lg font-bold">
                            “
                        </span>
                        Ryan was INCREDIBLE and I would absolutely love to recommend him to anyone. Our experience with Amerisave, however, has a lot of room for improvement. We were told that my client's income was verified and reassured the listing agent based on that information. The sale nearly fell apart for that reason. Ryan saved the day though and got us to the closing table. Thank you so much, Ryan!
                        <span class="text-lg font-bold">
                            ”
                        </span>
                    </p>
                    <div class="flex items-center mt-4">
                        <a href="#" class="relative block">
                            <img alt="profil" src={Headshot} class="mx-auto object-cover rounded-full h-10 w-10 " />
                        </a>
                        <div class="flex flex-col justify-between ml-2">

                            <span class="flex items-center text-sm font-medium">
                               Abigail G
                            </span>
                        </div>
                    </div>
                </div>


                {/* Card 3 */}

                <div class="bg-white w-full md:w-1/3 shadow-lg mx-auto rounded-xl p-4">
                    <p className='flex py-2'><AiFillStar className='text-gold' /><AiFillStar className='text-gold' /><AiFillStar className='text-gold' /><AiFillStar className='text-gold' /><AiFillStar className='text-gold' /></p>
                    <p class="text-gray-600">
                        <span class="text-lg font-bold">
                            “
                        </span>
                        Ryan found the home that I was qualified to buy and that was outstanding! 2. The timeliness to make everything happen was unbelievably amazing (2 weeks or so) 3. I'm not certain that my ratings are necessarily reflective of Ryan because they were more around the duplicitous processes and requests due to an automated system that he does not control. It got very confusing and frustrating. All in all he found my house, got everything done in record time and was really helpful and answered any and everything I threw at him very quickly.
                        <span class="text-lg font-bold">
                            ”
                        </span>
                    </p>
                    <div class="flex items-center mt-4">
                        <a href="#" class="relative block">
                            <img alt="profil" src={Headshot} class="mx-auto object-cover rounded-full h-10 w-10 " />
                        </a>
                        <div class="flex flex-col justify-between ml-2">

                            <span class="flex items-center text-sm font-medium">
                                Lauri J
                            </span>
                        </div>
                    </div>
                </div>


               

            </div>
        </div>
    )
}

export default Reviews