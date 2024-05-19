import bannerImage from "../assets/bi1.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";
const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer"
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 80,
      backSpeed: 10,
      backDelay: 100,
      loop: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover"
      }}
      className="main-container flex items-center"
    >
      {/* first dabba */}
      <div className="w-full flex items-center justify-center text-white ">
        {/* text */}
        <div className="w-2/3 space-y-2  ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-5xl font-bold">Debabrata Sahoo</h1>
          <h2 className="text-3xl ">
            I am <span className="font-bold underline" ref={el}></span>
          </h2>
          <p className="">
            An experienced Software Engineer with over 3 years + of expertise in
            .NET Full Stack Development brings a comprehensive skill set to the
            table. Proficient in integrating functional elements, critical
            thinking, and problem-solving into development workflows, this
            professional is adept at navigating complex technical challenges to
            deliver robust software solutions.
          </p>

          <div className="icons-container flex space-x-5">
            <a
              href="https://gitlab.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="  hover:bg-orange-600 border  cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800"
            >
              <i class="fa-brands text-4xl  fa-github"></i>
            </a>
            <a
              href="https://www.facebook.com/deba.sahoo.148"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800"
            >
              <i className="fa-brands text-4xl  fa-facebook"></i>
            </a>

            <a
              href="https://www.instagram.com/debabrata_89/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:bg-orange-600   border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800"
            >
              <i class="fa-brands text-4xl  fa-instagram"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/debabrata-sahoo-11b132218/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:bg-orange-600  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800"
            >
              <i class="fa-brands text-4xl  fa-linkedin-in"></i>
            </a>
          </div>
          <br />
          <a
            className=" text-2xl     px-3  py-2 bg-orange-500  rounded-full shadow-lg"
            href="/contact"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* second  dabba */}

      <div className=" w-full flex justify-center">
        {/* image */}
        <img
          className="rounded-full my-2 shadow-lg w-fit"
          src={bannerImage}
          style={{ height: "35rem", width: "28rem" }}
        />
      </div>
    </div>
  );
};

export default Banner;
