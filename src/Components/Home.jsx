import  vid1  from '../assets/vid1.mp4'
import about from "../Components/moscovimg/about.jpg";
import { motion } from 'framer-motion';
function Home() {

    return (
      <>
        <div className="mt-12">
    <p className="text-5xl  lg:text-7xl font-semibold text-center ">Draw With
    <span className=" font-bold text-[#7E60BF]"> MoscovArtist :</span>
    <p className="text-4xl lg:text-6xl font-bold text-[#6D6A6A] mb-8">Where imagination meets innovation,
    crafting  <br /> digital dreams into vibrant reality</p>

    </p>
    <div className="flex flex-col justify-center items-center mt-12">
    <button
      onClick={() => window.location.assign("/contact")}
        type="submit"
        value="Send" 
        class="w-[180px]   bg-black font-semibold h-[60px] my-3 font-semibold rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#7E60BF] before:to-[#7E60BF] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] hover:text-black "
      >
        Get Started
      </button>
    </div>
    <video
            className="w-full aspect-video rounded-[24px] mt-10 border lg:max-w-5xl lg:m-auto"
            src={vid1}
            autoPlay
            muted
          ></video>

          <div className="h-10">
          {/* <h1 className="font-blod text-4xl mt-[30vh] text-center">About Me</h1> */}
      <div className=' flex flex-col mt-[30vh] lg:flex-row justify-center items-center lg:px-32 px-5 '>
        <img src={about}
        width={350}
        height={100}
        className=
        'rounded-[20px]  '
        />
        
        <p className='my-5 max-w-xl py-10 lg:ml-[60px]'><span className='font-semibold mb-4 text-3xl'>Mustapha Hmach</span><br/>
        A <motion.span 
        className='bg-[#7E60BF]'
        initial = {{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 0.9}}>digital arts craft </motion.span>
         vibrant worlds through pixels and imagination, 
        blending technology with creativity. <motion.span 
        className='border-b-2 border-black'
        initial = {{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 0.9}}> Their work explores themes of identity, nature, and the surreal,</motion.span>, inviting viewers to experience new perspectives. 
        they create immersive 
        visuals that challenge traditional art forms. Each piece reflects a unique vision, 
        sparking curiosity and conversation in the digital realm.</p>
      </div>
          </div>
    </div>
      </>
  
    )
  }
  
  export default Home