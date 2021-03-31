import React from "react";

interface IProps {
  heading?: string;
  text: string;
  buttonText?: string;
  buttonUrl?: string;
  variant?: "primary" | "info" | "warning";
}

const InfoAlert: React.FC<IProps> = ({
  heading = "",
  text,
  buttonText,
  buttonUrl,
  variant = "primary",
}) => {
  return (
    <div
      className={`alert my-3 alert-${variant}`}
      role="alert"
      data-mdb-color={variant}
    >
      <strong>{heading}</strong> {text}
    </div>
  );
};

export default InfoAlert;
