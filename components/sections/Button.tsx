import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  icon?: string;

  label: string;
  /**
   * Width of the Card. Should be a valid Tailwind CSS width value.
   * For example: "1/2", "w-full", etc.
   */
  width?: string;
  /**
   * Height of the Card. Should be a valid Tailwind CSS height value.
   * For example: "1/2", "full", etc.
   */
  height: string;
  /**
   * Rounded of the Card. Should be a valid Tailwind CSS rounded value.
   * For example: "md", "full", etc.
   */
  rounded?: string;
  /**
   * Additional className for the Card.
   */
  className?: string;
  /**
   * Whether the Card should have a hover effect.
   */
  hover: boolean;

  href?: string;
  /**
   * Border color of the Card. Should be a valid Tailwind CSS border color value.
   * For example: "border-slate-900", etc.
   */
  borderColor: string;
  /**
   * Background of the Card. Should be a valid Tailwind CSS background value.
   * For example: "bg-slate-900", etc.
   */
  bg: string;
  /**
   * Text color of the Card. Should be a valid Tailwind CSS text color value.
   * For example: "text-white", etc.
   */
  textColor: string;
  /**
   * Size of the icon. Should be a number.
   * For example: 12, 16, etc.
   */
  iconSize?: number;
}
const Button = ({
  width,
  className,
  height,
  rounded,
  hover,
  label,
  icon,
  href,
  borderColor,
  bg,
  textColor,
  iconSize,
}: ButtonProps) => {
  return (
    <div className={`${width} ${className}`}>
      <div className={`relative w-full ${bg} ${height} ${rounded}`}>
        <Link
          href={`${href}`}
          className={`absolute flex gap-3 p-2 items-center  justify-center w-full h-full ${rounded} -top-1 -left-1 border ${borderColor} ${textColor}  bg-white ${
            hover
              ? "hover:-top-0 hover:-left-0 transition-all ease-in-out duration-200"
              : ""
          }`}
        >
          {icon && (
            <Image src={icon} height={iconSize} width={iconSize} alt={label} />
          )}
          {label}
        </Link>
      </div>
    </div>
  );
};

export default Button;
