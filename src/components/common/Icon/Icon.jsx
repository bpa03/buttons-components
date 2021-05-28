import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const IconBase = styled.span`
  vertical-align: bottom;
`

export const Icon = ({ icon, style }) => {
  const styles = style ? { ...style } : { };
  return (
    <IconBase
      className="material-icons-round"
      style={styles}
    >
      {icon}
    </IconBase>
  )
};

Icon.propTypes = {
  icon: PropTypes.string
};