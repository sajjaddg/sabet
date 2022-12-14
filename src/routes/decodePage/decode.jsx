import React from "react";
import CloseButton from "../../components/closeButton/closeButton";
import CustomInput from "../../components/customInput/customInput-component";
import FileInput from "../../components/fileInput/fileInput-componnet";

const DeCodePage = () => {
  return (
    <div className="bg-[#e0e0e0] relative flex-col space-y-4 flex w-full  rounded-xl p-4 transition-opacity container ">
      <div className="absolute right-3 top-3" >
        <CloseButton />
      </div>
      <div className="flex justify-center pt-3 ">
        <FileInput text={"Image "} />
      </div>
      <div className="flex flex-col space-y-3 w-full">
        <CustomInput
          name={"File Name"}
          type={"text"}
          placeholder={"type some text :)"}
        />
        <CustomInput
          name={"Image Key"}
          type={"text"}
          placeholder={"type some text :)"}
        />
      </div>

      <div className="flex justify-center">
        <button className="p-2 px-6 bg-[#232526] text-[#e0e0e0] text rounded-md">
          Download Image
        </button>
      </div>
    </div>
  );
};

export default DeCodePage;
