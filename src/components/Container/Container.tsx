import React from "react";

import { ContainerProps } from "@/types/Container/ContainerProps.types";

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`container ${className ?? ""}`}>{children}</div>;
};

export default Container;
