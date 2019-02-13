import { css } from 'styled-components';
// Restructure the code in css (literal string)
export const drawerWidth = 260;

export const transition = css`
  transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);
`;

export const page = css`
  min-height: 100vh;
  width: 100%;
`;

export const container = css`
  padding-right: inherit 15px;
  margin: inherit auto;
`;

export const boxShadow = css`
  border: 0;
  /* prettier-ignore */
  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42),
              0 4px 25px 0px rgba(0, 0, 0, 0.12), 
              0 8px 10px -5px rgba(0, 0, 0, 0.2);
  transition: all 150ms ease 0s;
`;

export const footerShadow = css`
  box-shadow: 0 -10px 20px -12px #0003;
`;

const fontBase = css`
  font-weight: 300;
  line-height: 1.5em;
`;

export const defaultFont = css`
  ${fontBase}
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

export const defaultHeadline = css`
  ${fontBase}
  font-family: 'Courier New', Courier, monospace;
`;

// prettier-ignore
export const highlightButton = css`
  background: ${props => props.theme.highlightColor};
  box-shadow: 0 3px 6px -5px ${props => props.theme.highlightColor},
              0 5px 40px -5px ${props => props.theme.highlightColor};
  transform: scale(1.03);
`;

export const primaryCardHeader = css`
  background: linear-gradient(60deg, #ab47bc, #8e24aa);
  ${boxShadow};
`;

export const cardActions = css`
  margin: 0 20px 10px;
  padding-top: 10px;
  border-top: 1px solid #eeeeee;
  height: auto;
  ${defaultFont};
`;

export const cardHeader = css`
  margin: -20px 15px 0;
  border-radius: 3px;
  padding: 15px;
`;

export const title = css`
  color: #3c4858;
  text-decoration: none;
  font-weight: 300;
  margin: 30px auto;
  min-height: 32px;
  font-family: 'Courier New', Courier, monospace;
`;

export const card = css`
  display: inline-block;
  position: relative;
  width: 100%;
  margin: 25px 0;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 3px;
  color: rgba(0, 0, 0, 0.87);
  background: #fff;
`;

export const cardTitle = css`
  ${title};
  margin-top: 0;
  margin-bottom: 3px;
  min-height: auto;
  & a {
    ${title};
    margin-top: 0.625rem;
    margin-bottom: 0.75rem;
    min-height: auto;
  }
`;

export const cardSubtitle = css`
  margin-top: -0.375rem;
`;

export const cardLink = css`
  margin-left: 1.25rem;
`;
