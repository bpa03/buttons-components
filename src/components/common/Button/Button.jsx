import React from 'react'
import PropTypes from 'prop-types';

import { ButtonBase } from './Styles';

export const Button = ({ children }) => {
  return (
    <ButtonBase>
      { children }
    </ButtonBase>
  )
};

Button.propTypes = {
  variant: 'default'
};