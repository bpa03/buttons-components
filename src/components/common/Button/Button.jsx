import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import * as Styles from "./Styles";

export const ButtonBase = styled.button`
  ${(props) => props.disabled ? 
    Styles.disabled : 
    Styles[props.variant]
  }
  ${(props) => Styles[props.size]}
  font-weigth: 500;
  font-size: 1em;
  border-radius: 6px;
  line-height: 1.4rem;
  cursor: pointer;
`;

export const Button = ({ children, color, size, variant, disabled }) => {
  return (
    <ButtonBase 
      color={color} 
      size={size} 
      variant={variant} 
      disabled={disabled}
    >
      {children}
    </ButtonBase>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(["defaultColor", "primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["defaultButton", "outline"]),
  disabled: PropTypes.bool
};

Button.defaultProps = {
  color: "defaultColor",
  size: "sm",
  variant: "defaultButton",
  disabled: false
};
