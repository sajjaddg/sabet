import React from "react";
import CloseButton from "../../components/closeButton/closeButton";
import CustomInput from "../../components/customInput/customInput-component";
import FileInput from "../../components/fileInput/fileInput-componnet";
const CodePage = () => {
  return (
    <div className="bg-[#e0e0e0] flex-col space-y-4 flex relative w-full  rounded-xl p-4 transition-opacity container ">
      <div className="absolute right-3 top-3">
        <CloseButton />
      </div>
      <div className="flex justify-center space-x-3 pt-3 ">
        <FileInput text={"Image 1 "} />
        <FileInput text={"Image 2 "} />
      </div>
      <div className="flex flex-col space-y-2 w-full">
        <CustomInput
          name={"File Name"}
          type={"text"}
          placeholder={"File Name: "}
        />
        <CustomInput
          name={"Memorize"}
          type={"text"}
          placeholder={"Memorize:"}
        />
        <div className="flex space-x-3 justify-between">
          <CustomInput
            textClassName={"w-20"}
            inputClassName={"w-24 placeholder:text-center"}
            name={"height"}
            type={"text"}
            placeholder={"height"}
          />
          <CustomInput
            textClassName={"w-20"}
            inputClassName={"w-24 placeholder:text-center"}
            name={"weight"}
            type={"text"}
            placeholder={"weight"}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="p-2 px-6 bg-[#232526] text-[#e0e0e0] text rounded-md">
          Merge images
        </button>
      </div>
    </div>
  );
};

export default CodePage;
