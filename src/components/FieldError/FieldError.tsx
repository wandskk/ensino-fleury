import React from "react";

import "@/styles/FieldError/FieldError.scss";

const FieldError = ({ text }: { text: string }) => {
  return <small className="fieldError">{text}</small>;
};

export default FieldError;
