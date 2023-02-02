import { AiFillInstagram, AiFillPhone } from 'react-icons/ai'
import EHL from '../assets/EHL.png'
import { FaLink } from 'react-icons/fa'


const Footer = () => {
  return (

      <footer class="max-w-full text-lg ">
          <div class="flex flex-col container mx-auto">
              

              <div class="flex flex-col pt-4 md:mt-0 md:flex-row font-semibold px-5 bg-second">
                  <nav class="flex flex-col py-3 items-center justify-center flex-1 border-gray-100 md:items-start md:border-r md:pr-5 pl-5">
                      <a aria-current="page" href="https://www.mutualmortgage.com/about-us/loan-officer/?email=rhoward@mutualmortgage.com" class="hover:text-white">
                          My Company Website
                      </a>

                      <a aria-current="page" href="tel:5033303181" class="hover:text-white flex items-center">
                          (503) 330-3181 <AiFillPhone className='flex pl-1' />
                      </a>

                      <a aria-current="page" href="https://nmlsconsumeraccess.org." class="hover:text-white">
                          Look up my NMLS #2253977
                      </a>
                  </nav>


                  <div class="flex flex-1 mt-4 border-gray-100 md:mt-0 md:border-r items-center justify-around">
                      <a href="https://www.facebook.com/sharer.php?t=Loan%20Officer&u=https%3A%2F%2Fwww.mutualmortgage.com%2Fabout-us%2Floan-officer%2F%3Femail%3Drhoward%40mutualmortgage.com" class="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                          <svg width="20" height="20" fill="currentColor" class="text-xl hover:text-white  transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                              </path>
                          </svg>
                      </a>
                  
                     
                  
                      <a href="https://www.instagram.com/ryhowww_mortgage/?igshid=MWI4MTIyMDE%3D" class="text-gray-400 hover:text-prim  transition-colors duration-200">
                          <AiFillInstagram fill="currentColor" class="text-xl hover:text-white  transition-colors duration-200" />


                      </a>
                     
                     
                      <a href="https://linktr.ee/howardhomeloans" class="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                          <span  class="text-xl hover:text-white  transition-colors duration-200">
                              <FaLink />
                              
                          </span>
                      </a>
                  </div>
                  <div class="h-px mx-auto mt-4 rounded-full md:hidden w-11 ">
                  </div>


                  <div class="flex flex-col flex-1 mt-7 md:mt-0 md:items-center md:pl-5 pb-3">          
                      <span class="flex flex-col items-center justify-center">
                          <img src={EHL} alt="Equal House Lender" className='h-16 md:h-1/2 flex' />
                      </span>
                  </div>
              </div>
          </div>
      </footer>

  )
}

export default Footer