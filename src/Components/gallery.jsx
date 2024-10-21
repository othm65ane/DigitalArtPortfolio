import moscov1 from "../Components/moscovimg/moscov1.jpg";
import moscov2 from "../Components/moscovimg/moscov2.jpg";
import moscov7 from "../Components/moscovimg/moscov7.jpg";
import moscov3 from "../Components/moscovimg/moscov3.jpg";
import moscov4 from "../Components/moscovimg/moscov4.jpg";
import moscov5 from "../Components/moscovimg/moscov5.jpg";
import moscov6 from "../Components/moscovimg/moscov6.jpg";
import moscov8 from "../Components/moscovimg/moscov8.jpg";


function Gallery() {

    return (
      <>
      <h1 className="text-center text-4xl lg:mt-[500px] mt-[800px] font-bold">Gallery</h1>
      <div className="mt-[300px]">
      <div className=' flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 mb-[10vh]'>
        <img src={moscov1}
        width={350}
        height={100}
        className=
        'rounded-[20px]  '
        />
        <p className="text-4xl font-semibold lg:ml-12 mt-12">Vibrant</p>
        </div>
        <div className=' flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 mb-[10vh]'>
        <img src={moscov2}
        width={350}
        height={100}
        className=
        'rounded-[20px]  '
        />
        <p className="text-4xl font-semibold lg:ml-12 mt-12">Emotive</p>

      </div>
      <div className=' flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 mb-[10vh]'>
        <img src={moscov3}
        width={350}
        height={100}
        className=
        'rounded-[20px]  '
        />
        <p className="text-4xl font-semibold lg:ml-12 mt-12">Textured</p>

      </div>
      <div className=' flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 mb-[10vh]'>
        <img src={moscov4}
        width={350}
        height={100}
        className=
        'rounded-[20px]  '
        />
        <p className="text-4xl font-semibold lg:ml-12 mt-12">Luminous</p>

      </div>
      <div className=' flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 mb-[10vh]'>
        <img src={moscov7}
        width={350}
        height={100}
        className=
        'rounded-[20px]  '
        />
        <p className="text-4xl font-semibold lg:ml-12 mt-12">Dynamic</p>

      </div>
      <div className=' flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 mb-[10vh]'>
        <img src={moscov5}
        width={350}
        height={100}
        className=
        'rounded-[20px]  '
        />
        <p className="text-4xl font-semibold lg:ml-12 mt-12">surreal
        </p>

      </div>
      <div className=' flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 mb-[10vh]'>
        <img src={moscov6}
        width={350}
        height={100}
        className=
        'rounded-[20px]  '
        />
        <p className="text-4xl font-semibold lg:ml-12 mt-12">intricate</p>

      </div>
      <div className=' flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 mb-[10vh]'>
        <img src={moscov8}
        width={350}
        height={100}
        className=
        'rounded-[20px]  '
        />
        <p className="text-4xl font-semibold lg:ml-12 mt-12">captivating</p>

      </div>
      </div>
  </>
    )
  }
  
  export default Gallery