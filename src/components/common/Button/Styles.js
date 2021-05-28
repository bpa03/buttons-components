import { css } from "styled-components";
import * as Colors from "../../const/colors";

// Size Variants

export const md = css`
  padding: 8px 16px;
`;

export const sm = css`
  padding: 6px 12px;
`;

export const lg = css`
  padding: 11px 22px;
`;

// Buttons Variants

export const defaultButton = css`
  background: ${(props) => Colors[props.color].color};
  color: ${(props) => Colors[props.color].font};
  border: 1px solid ${props => Colors[props.color].color};
  transition: background 0.3s, border 0.3s;

  &:hover {
    background: ${props => Colors[props.color].darken};
    border: 1px solid ${props => Colors[props.color].darken};
  }
`;

export const outline = css`
  background: #fff;
  color: ${props => Colors[props.color].color};
  border: 1px solid ${props => Colors[props.color].color};
  transition: background 0.3s, border 0.3s;

  &:hover {
    background: ${props => Colors[props.color].ligth}
  }
`

export const text = css`
  background: transparent;
  color: ${props => Colors[props.color].color};
  transition: background 0.3s, border 0.3s;

  &:hover {
    background: ${props => Colors[props.color].ligth}
  }
`

export const disabled = css`
  color: rgba(158, 158, 158, 1);
  background-color: rgba(224, 224, 224, 1);
`