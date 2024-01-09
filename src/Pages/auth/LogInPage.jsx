import { Navbar } from "flowbite-react";
import React from "react";
import backgroundImg from "../../assets/images/background.jpg";

export default function LogInPage() {
  return (
    <div className="bg-newBlue min-h-screen w-full relative bg-opacity-75 ">
     
     <img src={backgroundImg} className="absolute min-h-screen w-full mix-blend-overlay   " alt="" />

      
      {/* <div className="grid grid-cols-1 h-screen text-center ">
        <div class="bg-red-200 h-full flex items-center justify-center  ">
          <h1 className="font-Moul text-white text-xl">
            ក្រុមប្រឹក្សាជាតិសេដ្ធកិច្ច និង​សង្គមឌីជីថល <br/>
            <span className="text-base font-serif ">NATIONAL COUNCIL FOR DIGITAL ECONOMY AND SOCIETY</span>
          </h1>
          
        </div>
        <div className="h-full bg-red-500 flex items-center justify-center ">
          02
        </div>
        <div className="h-full bg-orange-200 flex items-center justify-center">
          03
        </div>
      </div> */}
    </div>
  );
}
