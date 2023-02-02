import React from 'react'
import Video1 from '../assets/video.mp4'




const Videos = () => {
  return (
    

      <div class="container mx-auto overflow-hidden relative lg:flex lg:items-center">
          <div class=" py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
              <h2 class="text-4xl font-extrabold text-black sm:text-4xl">
                  <span class="block">
                      Mother hearth host your travel
                  </span>
              </h2>
              <p class="text-md mt-4 text-gray-400">
                  The state of Utah in the united states is home to lots of beautiful National parks, Bryce national canion park ranks as three of the most magnificient &amp; awe inspiring.
              </p>
        
          </div>
          <div class="flex items-center gap-8 p-8 ">
             <video src={Video1}  loop muted controls></video>
          </div>
      </div>

  )
}


export default Videos