import cn from 'classnames'

interface CustomButtonProps {
  label: string;
  className?: string;
  onClick: () => void;
  theme?: keyof typeof variants;
}

const variants = {
  red: "bg-livio_dark hover:bg-livio",
  black: "bg-black hover:bg-gray-800"
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  theme,
  className
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        variants[theme ?? 'red'],
        `w-full py-4 text-white text-center rounded-xl transition cursor-pointer`,
        className
      )}
    >
      {label}
    </div>
  )
}

export default CustomButton;
