import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon } from "../Icon/Icon.jsx";
import * as Styles from "./Styles";

export const ButtonBase = styled.button`
  ${(props) => (props.disabled ? Styles.disabled : Styles[props.variant])}
  ${(props) => Styles[props.size]}
  font-weigth: 500;
  font-size: 0.843em;
  border-radius: 6px;
  line-height: 1.4rem;
  cursor: pointer;
`;

export const Button = ({
  children,
  color,
  size,
  variant,
  disabled,
  startIcon,
  endIcon,
  disableShadow,
}) => {
  return (
    <ButtonBase
      color={color}
      size={size}
      variant={variant}
      disabled={disabled}
      disableShadow={disableShadow}
    >
      {startIcon && (
        <Icon icon={startIcon} style={{ marginRight: "10px" }} />
      )}
      {children}
      {endIcon && (
        <Icon icon={endIcon} style={{ marginLeft: "10px" }} />
      )}
    </ButtonBase>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(["defaultColor", "primary", "secondary", "danger"]),
  variant: PropTypes.oneOf(["defaultButton", "outline", "text"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  disableShadow: PropTypes.bool,
};

Button.defaultProps = {
  color: "defaultColor",
  size: "sm",
  variant: "defaultButton",
  disabled: false,
  startIcon: "",
  endIcon: "",
  disableShadow: false,
};
