"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import useLoginModal from "@/hooks/useLoginModal";
import CustomButton from "@/forms/CustomButton";
import { handleLogin } from "@/lib/actions";

import apiService from "@/services/apiService";

const LoginModal = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const loginModal = useLoginModal();

  const submitLogin = async () => {
    const formData = {
      email,
      password,
    };

    const response = await apiService.post(
      "/api/auth/login/",
      JSON.stringify(formData)
    );

    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);
      loginModal.close();
      router.push("/");
    } else {
      setErrors(response.non_field_errors);
    }
  };

  const content = (
    <>
      <form className="space-y-4" action="">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="px-4 w-full h-[54px] border-gray-300 hover:bg-gray-300 rounded-xl"
          placeholder="Your email adress"
        />

        <input
          onChange={(e) => setPasword(e.target.value)}
          type="password"
          className="px-4 w-full h-[54px] border-gray-300 hover:bg-gray-300 rounded-xl"
          placeholder="Your password"
        />

        {errors?.map((error, index) => (
          <div
            key={`error_${index}`}
            className="p-5 bg-livio text-white rounded-xl opacity-80"
          >
            {error}
          </div>
        ))}
        <CustomButton label="Submit" onClick={submitLogin} />
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
