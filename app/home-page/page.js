"use client";
import { motion } from "framer-motion";
import MyPhoto from "../../public/ak_3.jpg";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <section>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="flex justify-center lg:hidden pt-[30px] sm:pt-[50px] mt-[45px]"> {/* Mobil o'lchamlar uchun 15px pastga ko'chirish */}
            <Image
              src={MyPhoto}
              alt="Avatar"
              className="w-[250px] h-[250px] rounded-full"
              width={250}
              height={250}
            />
          </div>

          <div className="text-center lg:text-left mt-12 lg:mt-0 lg:ml-8 md:pt-[150px]">
            <p className="text-slate-400 text-xl sm:text-lg lg:text-2xl font-medium">
              Hello, my name is
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-white text-[25px] sm:text-[40px] lg:text-[33px] font-semibold"
            >
              Karimov Abdulatif
            </motion.div>

            <h1 className="text-slate-400 text-[25px] sm:text-[35px] lg:text-[45px] font-bold mt-3">
              I am a <span className="text-white">Frontend developer</span>
            </h1>

            <p className="text-slate-400 lg:w-[700px] font-thin lg:text-[20px] mt-4 px-4 lg:px-0">
              I am a professional web developer. I can create FrontEnd part of a
              website. If you interested click the button.
            </p>

            <div className="mt-6">
              <Link href="/about">
                <button className="px-8 py-2 text-[16px] lg:text-[18px] font-medium text-white bg-slate-700 opacity-80 rounded-md animate-pulse">
                  More about me
                </button>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block lg:pt-[100px] lg:pl-12">
            <Image
              src={MyPhoto}
              alt="Avatar"
              className="w-[400px] h-[410px] rounded-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
