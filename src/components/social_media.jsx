import { github, linkedin, resume } from "../assets";
import { SectionWrapper } from "../hoc";

const Social_media = () => {
   return (
      <div className={`flex justify-center items-center `}>
         <div className='flex gap-5'>
            <div
               onClick={() => window.open("https://github.com/QuangMinh-Le", "_blank")}
               className='
              bg-[#151030] transition ease-in-out hover:bg-[#804dee]
               w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'
            >
               <img
                  src={github}
                  alt='github'
                  className='w-3/4 h-3/4 object-contain'
               />
            </div>
            <div
               onClick={() => window.open("https://www.linkedin.com/in/minhle1008/", "_blank")}
               className='
              bg-[#151030] transition ease-in-out hover:bg-[#804dee]
               w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'
            >
               <img
                  src={linkedin}
                  alt='linkedin'
                  className='w-3/4 h-3/4 object-contain'
               />
            </div>
            <div
               onClick={() => window.open("public/documents/QuangMinhLe-resume.pdf", "_blank")}
               className='
              bg-[#151030] transition ease-in-out hover:bg-[#804dee]
               w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'
            >
               <img
                  src={resume}
                  alt='resume'
                  className='w-3/4 h-3/4 object-contain'
               />
            </div>
         </div>
         <div className='flex ml-5'>
            <p
               className="text-secondary text-white"
            >Made by Quang Minh Le</p>
         </div>
      </div>
   )
}

export default SectionWrapper(Social_media);