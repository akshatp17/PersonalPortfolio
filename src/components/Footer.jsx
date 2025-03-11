import React from 'react'
import { Mail, Dot, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='pb-3'>
      <hr className='mx-auto my-2 w-[80%] text-gray-400' />
      <div className='text-center'>
        {/* Get in touch text */}
        <div>
          <p className='text-2xl font-bold'>
            Get in Touch.
          </p>
          <p className='text-gray-400'>
            So that we can talk more about...
          </p>
        </div>

        {/* Icons and Links to socials */}
        <div className='flex gap-5 justify-center items-center text-gray-200 my-2 scale-[0.7]'>
          {/* Mail */}
          <a href="mailto:akshatp0505@gmail.com?subject=Contact Inquiry&body=Hello," className="hover:cursor-pointer hover:scale-[1.25] transition-all">
            <Mail size={30} />
          </a>

          <Dot />
          {/* Linkedin */}
          <div className='flex gap-5 justify-center items-center text-gray-200 my-2 scale-[0.7]'>
            <a href="https://www.linkedin.com/in/akshat-pratyush/" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer hover:scale-[1.25] transition-all">
              <svg fill="#e5e7eb" height="28px" width="28px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_801_"> <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"></path> <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"></path> <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"></path> </g> </g></svg>
            </a>
          </div>
          <Dot />

          {/* X.com */}
          <div className='flex gap-5 justify-center items-center text-gray-200 my-2 scale-[0.7]'>
            <a href="https://x.com/armyth_07" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer hover:scale-[1.25] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill='#e5e7eb' x="0px" y="0px" width="30px" height="30px" viewBox="0 0 24 24">
                <path d="M 4.4042969 3 C 3.7572969 3 3.3780469 3.7287656 3.7480469 4.2597656 L 9.7363281 12.818359 L 3.7246094 19.845703 C 3.3356094 20.299703 3.6578594 21 4.2558594 21 L 4.9199219 21 C 5.2129219 21 5.4916406 20.871437 5.6816406 20.648438 L 10.919922 14.511719 L 14.863281 20.146484 C 15.238281 20.680484 15.849953 21 16.501953 21 L 19.835938 21 C 20.482937 21 20.862187 20.272188 20.492188 19.742188 L 14.173828 10.699219 L 19.900391 3.9902344 C 20.232391 3.6002344 19.955359 3 19.443359 3 L 18.597656 3 C 18.305656 3 18.027891 3.1276094 17.837891 3.3496094 L 12.996094 9.0097656 L 9.3945312 3.8554688 C 9.0205313 3.3194687 8.4098594 3 7.7558594 3 L 4.4042969 3 z"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>
      <hr className='mx-auto my-2 w-[80%] text-gray-400' />
      <div className='flex gap-2 items-center justify-center'>
        Made with ❤️ by Akshat Pratyush
      </div>
    </footer >
  )
}

export default Footer