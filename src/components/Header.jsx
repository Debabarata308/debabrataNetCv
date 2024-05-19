import { useState } from "react";
import cv from "../assets/Debabrata_Cv.pdf";

const Header = () => {
  const [brandName, setBrandName] = useState("Debabrata Sahoo");

  return (
    <>
      <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
        <div>
          {/* brand logo */}
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>

        <div>
          <a
            className="px-4 py-2 bg-orange-500 shadow  rounded-full text-1xl "
            style={{ cursor: "pointer" }}
            href={cv}
            download="Debabrata_Cv"
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
