import React from "react";

import { ButtonProps } from "@/types/Button/ButtonProps.types";

import "@/styles/Button/Button.scss";

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  title,
  variant = "red",
  href,
  outline,
  onClick,
}) => {
  const classNames = `button button--${variant} ${
    outline ? "button--outline" : ""
  }`;

  return href ? (
    <ButtonLink classNames={classNames} title={title} href={href}>
      {children}
    </ButtonLink>
  ) : (
    <ButtonDefault
      disabled={disabled}
      classNames={classNames}
      onClick={onClick}
    >
      {children}
    </ButtonDefault>
  );
};

const ButtonLink: React.FC<ButtonProps> = ({
  children,
  href,
  title,
  classNames,
}) => {
  return (
    <a href={href} title={title} className={classNames}>
      {children}
    </a>
  );
};

const ButtonDefault: React.FC<ButtonProps> = ({
  children,
  disabled,
  onClick,
  classNames,
}) => {
  return (
    <button disabled={disabled} onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
