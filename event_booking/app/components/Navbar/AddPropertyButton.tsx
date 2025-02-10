"use client";
import React from "react";
import useAddPropertyModal from "@/hooks/useAddPropertyModal";
import useLoginModal from "@/hooks/useLoginModal";

interface AddPropertyButtonProps {
  userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({ userId }) => {
  const loginModal = useLoginModal();
  const addPropertyModal = useAddPropertyModal();

  const livioYourHome = () =>
    userId ? addPropertyModal.open() : loginModal.open();

  return (
    <div
      onClick={livioYourHome}
      className="p-2 text-sm font-semibold rounded-full hover:bg-gray-200 cursor-pointer"
    >
      Add new property
    </div>
  );
};

export default AddPropertyButton;
