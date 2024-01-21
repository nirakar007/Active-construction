import React from "react";
import Spline from "@splinetool/react-spline";

function DesignPage() {
  return (
    <div>
      <div className="flex flex-col gap-5 mx-4">
        <div className="flex items-center justify-center">
          <h1 className="text-sm text-neutral-500">services /</h1>
          <h2 className="text-xl font-bold"> Design</h2>
        </div>
        <div className="h-[60vh] w-full">
        <img src="src/assets/images/photo.jpg" alt="" />

        </div>
        <div className="flex justify-between">
          <div className="flex rounded-full h-[500px] w-[500px] bg-neutral-50 object-center items-start hover:shadow-lg hover:shadow-sky-100 transition duration-100 ease-in-out">
            <Spline scene="https://prod.spline.design/fFOU3SH7zddYtKyG/scene.splinecode" className="object-contain h-[200px] w-[200px]"/>
          </div>
          <div className="w-25%">textbox 1</div>
          <div className="w-25%">textbox 2</div>
        </div>

        <div className="h-[100vh] w-full border-2">


        </div>
        <div className="h-[100vh] w-full border-2"></div>


      </div>
    </div>
  );
}

export default DesignPage;
