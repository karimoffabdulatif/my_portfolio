"use client";
import { motion } from "framer-motion";
import MyPhoto from "../../public/ak_3.jpg";
import Image from "next/image";

const Home = () => {
  return (
    <div className="container mx-auto">
      <section>
        <div className="flex">
         <div className="pt-[150px]">
         <div>
            <p className="text-slate-400 text-[25px] font-medium">
              Hello, my name is
            </p>
          </div>
          <div className="pb-[30px]">
            {" "}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-white text-[33px] font-medium"
            >
              <p className="text-white text-[33px] font-medium">
                Karimov Abdulatif
              </p>
            </motion.div>
          </div>
          <div>
            <h1 className="text-slate-400 text-[45px] font-semibold pb-[25px]">
              I am a <span className="text-white">Frontend developer</span>
            </h1>
            <p className="text-white w-[700px] text-[20px] pb-7">
              I am a professional web developer. I can create FrontEnd part of a
              website. If you interested click the button.
            </p>
          <div>
            <button className="px-[40px] animate-pulse py-2 text-[18px] font-medium text-white bg-slate-700 opacity-[0.03px] rounded-md">
              More about me
            </button>
          </div>
          </div>
         </div>

          <div className="pt-[100px]">
            <Image src={MyPhoto} alt="Avatar" className="w-[400px] h-[410px] rounded-[700px]"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
