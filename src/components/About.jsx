import { useState } from "react";
import bannerImage from "../assets/bi2.png";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: ".Net Full Stcak Developer",
    desc1: `A .NET Full Stack Developer proficient in React JS combines server-side and client-side development expertise. They leverage .NET technologies like ASP.NET Core for backend development and React JS for building dynamic and interactive user interfaces. Their skill set includes database management, API integration, and ensuring seamless communication between front and back ends to deliver robust web applications`,
    actionButton: {
      title: "Read More..",
      link: "/readmore"
    }
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img
              className="rounded-full my-2 shadow-lg w-fit"
              src={data.image}
              alt="durgesh kumar tiwari"
              style={{
                height: "30rem",
                width: "29rem",
                borderRadius: "redius"
              }}
            />
          </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
