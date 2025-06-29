import React, { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  /** 버튼의 스타일 지정 */
  size?: "small" | "large";
  /** 버튼의 활성화 여부 지정 */
  isDisable?: boolean;
  /** 버튼의 내용 지정 */
  children: ReactNode;
}

export default function Button({
  size = "small",
  isDisable = false,
  children,
  ...rest
}: ButtonProps) {
  const baseStyle =
    "rounded-md font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-white";

  const sizeStyle =
    size === "large" ? "text-lg px-6 py-3" : "text-sm px-4 py-2";

  const enabledStyle = "bg-blue-500 text-white hover:bg-blue-600";

  return (
    <button
      className={`${baseStyle} ${sizeStyle} ${isDisable ? "" : enabledStyle}`}
      disabled={isDisable}
      {...rest}
    >
      {children}
    </button>
  );
}
