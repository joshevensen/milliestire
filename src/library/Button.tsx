"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { ButtonTypes, ButtonColors, ButtonSizes } from "../enums";

type props = {
  onClick?: () => void;

  type?: ButtonTypes;
  color?: ButtonColors;
  size?: ButtonSizes;

  children?: ReactNode;

  isSubmit?: boolean;
  href?: string;
  title?: string;
  isFullWidth?: boolean;
  isExternalLink?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
};

const LibButton: React.FC<props> = ({
  onClick,
  children,

  size = ButtonSizes.Small,

  isSubmit = false,
  href,
  title,
  isFullWidth = false,
  isExternalLink = false,
  isDisabled = false,
  isLoading = false,
}) => {
  const router = useRouter();

  function clickButton() {
    if (href) {
      if (isExternalLink) {
        window.open(href, "_blank");
      } else {
        router.push(href);
      }
    } else if (onClick) {
      onClick();
    }
  }

  /**
   * Common Variables
   */
  const loadingContent = "...";

  let sizeClasses = "py-1 px-4";
  if (size === ButtonSizes.Small) sizeClasses = "py-0.5 px-3 text-sm";
  if (size === ButtonSizes.Large) sizeClasses = "py-2 px-6 text-2xl";

  const widthClass = isFullWidth ? "w-full" : "";
  const borderClass = "border-2 rounded";
  const textClasses = "font-medium uppercase tracking-wide";
  const commonClasses = `flex justify-center items-center ${widthClass} ${borderClass} ${textClasses} disabled:cursor-not-allowed`;
  const solidClasses =
    "text-white bg-cyan-600 border-cyan-600 hover:border-cyan-600-hover hover:bg-cyan-600-hover disabled:border-cyan-600-disabled disabled:bg-cyan-600-disabled";

  return (
    <button
      className={`${commonClasses} ${sizeClasses} ${solidClasses}`}
      type={isSubmit ? "submit" : "button"}
      onClick={clickButton}
      disabled={isDisabled}
      title={title}
    >
      {isLoading && loadingContent}
      {!isLoading && children}
    </button>
  );
};

export default LibButton;
