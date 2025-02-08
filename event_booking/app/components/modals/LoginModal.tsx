"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import useLoginModal from "@/hooks/useLoginModal";
import CustomButton from "@/forms/CustomButton";

const LoginModal = () => {
  const loginModal = useLoginModal();

  const content = (
    <>
      <form className="space-y-4" action="">
        <input
          type="email"
          className="px-4 w-full h-[54px] border-gray-300 hover:bg-gray-300 rounded-xl"
          placeholder="Your email adress"
        />

        <input
          type="email"
          className="px-4 w-full h-[54px] border-gray-300 hover:bg-gray-300 rounded-xl"
          placeholder="Your password"
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
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      label="Log in"
      content={content}
    />
  );
};

export default LoginModal;
