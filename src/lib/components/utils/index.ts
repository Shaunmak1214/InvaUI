import { css } from "styled-components";

export const smoothTransition = css`
  transition: all 300ms cubic-bezier(0.74, -0.175, 0, 1.08) !important; /* custom */
  transition-timing-function: cubic-bezier(
    0.74,
    -0.175,
    0,
    1.08
  ) !important; /* custom */
`;
