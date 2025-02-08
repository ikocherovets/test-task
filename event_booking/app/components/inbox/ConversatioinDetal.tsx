"use client";

import React from "react";
import CustomButton from "@/forms/CustomButton";

const ConversationDetal = () => {
  return (
    <>
      <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
        <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
          <p className="font-bold text-gray-500">Illia Kocherovets</p>
          <p>Віка - ти моє все!</p>
        </div>

        <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
          <p className="font-bold text-gray-500">Viktoriia Orshak</p>
          <p>мяу мяу мяу</p>
        </div>
      </div>

      <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
        <input
          type="text"
          placeholder="type your text"
          className=" cursor-pointer w-full p-2 bg-gray-200 hover:bg-gray-300 rounded-xl"
        />

        <CustomButton
          label="Send"
          onClick={() => console.log("Clicked")}
          className="w-[100px]"
        />
      </div>
    </>
  );
};

export default ConversationDetal;
