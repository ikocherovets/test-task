import React from "react";

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`${className} w-full py-4 bg-livio hover:bg-livio_dark text-white text-center rounded-xl transition cursor-pointer`}
    >
      {label}
    </div>
  );
};

export default CustomButton;
