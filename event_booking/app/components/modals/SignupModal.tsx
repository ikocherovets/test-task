"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import CustomButton from "@/forms/CustomButton";
import useSignupModal from "@/hooks/useSignupModal";
import apiService from "@/services/apiService";
import { handleLogin } from "@/lib/actions";

const SignupModal = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

  const router = useRouter();
  const signupModal = useSignupModal();

  const submitSignup = async () => {
    const formData = {
      email,
      password1,
      password2,
    };

    const response = await apiService.post(
      "/api/auth/register/",
      JSON.stringify(formData)
    );

    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);
      signupModal.close();
      router.push("/");
    } else {
      const tmpErrors: string[] = Object.values(response).map(
        (error: any) => error
      );
      setErrors(tmpErrors);
    }
  };

  const content = (
    <>
      <form className="space-y-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="px-4 w-full h-[54px] border-gray-300 hover:bg-gray-300 rounded-xl"
          placeholder="Your email adress"
        />

        <input
          onChange={(e) => setPassword1(e.target.value)}
          type="password"
          className="px-4 w-full h-[54px] border-gray-300 hover:bg-gray-300 rounded-xl"
          placeholder="Your password"
        />

        <input
          onChange={(e) => setPassword2(e.target.value)}
          type="password"
          className="px-4 w-full h-[54px] border-gray-300 hover:bg-gray-300 rounded-xl"
          placeholder="Repeat your password"
        />

        {errors?.map((error, index) => (
          <div
            key={`error_${index}`}
            className="p-5 bg-livio text-white rounded-xl opacity-80"
          >
            {error}
          </div>
        ))}

        <CustomButton label="Submit" onClick={submitSignup} />
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
