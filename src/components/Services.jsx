import { useState } from "react";

const Services = () => {
  useState([
    {
      id: "",
      title: "",
      description: "",
      actionButton: {
        title: "",
        link: ""
      }
    }
  ]);
  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline">
          My Services
        </h1>
        <div className="services-container space-x-5 px-10 flex mt-12">
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl   service1 space-y-4">
            <i class=" text-5xl fa-brands fa-react"></i>
            <h1 className="text-4xl">Web Development</h1>
            <p>
              Experienced web developer proficient in React.js, adept at
              building dynamic and responsive user interfaces. Passionate about
              crafting efficient and scalable code to enhance user experiences
              and drive business objectives.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i class=" text-5xl fa-solid fa-mobile"></i>
            <h1 className="text-4xl">Android Development</h1>
            <p>
              Android development involves creating applications for devices
              running the Android operating system. It encompasses designing,
              coding, and testing apps using languages like Java or Kotlin,
              along with tools like Android Studio, to build user-friendly and
              feature-rich experiences for mobile users.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i class=" text-5xl fa-solid fa-server"></i>
            <h1 className="text-4xl">Backend Development</h1>
            <p>
              Skilled backend developer specializing in .NET Core Web API
              development. Proficient in building robust and secure backend
              systems to support scalable web applications, ensuring high
              performance and reliability..
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
