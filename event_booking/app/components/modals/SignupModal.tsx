"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import CustomButton from "@/forms/CustomButton";
import useSignupModal from "@/hooks/useSignupModal";

const SignupModal = () => {
  const signupModal = useSignupModal();

  const content = (
    <>
      <form className="space-y-4" action="">
        <input
          type="email"
          className="px-4 w-full h-[54px] border-gray-300 hover:bg-gray-300 rounded-xl"
          placeholder="Your email adress"
        />

        <input
          type="password"
          className="px-4 w-full h-[54px] border-gray-300 hover:bg-gray-300 rounded-xl"
          placeholder="Your password"
        />

        <input
          type="password"
          className="px-4 w-full h-[54px] border-gray-300 hover:bg-gray-300 rounded-xl"
          placeholder="Repeat your password"
        />

        <div className="p-5 bg-livio text-white rounded-xl opacity-80">
          The error message
        </div>
        <CustomButton label="Submit" onClick={() => console.log("Clicked")} />
      </form>
    </>
  );
  return (
    <Modal
      isOpen={signupModal.isOpen}
      close={signupModal.close}
      label="Sign up"
      content={content}
    />
  );
};

export default SignupModal;
