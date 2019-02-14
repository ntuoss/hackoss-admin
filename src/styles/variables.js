import { css } from 'styled-components';
// Restructure the code in css (literal string)
const drawerWidth = 260;

const transition = css({
  transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
});

const container = css({
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
});

const page = css`
  min-height: 100vh;
  width: 100%;
`;

const boxShadow = css`
  /* prettier-ignore */
  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42),
              0 4px 25px 0px rgba(0, 0, 0, 0.12), 
              0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;

const primaryBoxShadow = css({
  boxShadow:
    '0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)',
});
const defaultBoxShadow = css({
  border: '0',
  borderRadius: '3px',
  boxShadow:
    '0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  padding: '10px 0',
  transition: 'all 150ms ease 0s',
});

const footerShadow = css`
  box-shadow: 0 -10px 20px -12px #0003;
`;

const card = css({
  display: 'inline-block',
  position: 'relative',
  width: '100%',
  margin: '25px 0',
  boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
  borderRadius: '3px',
  color: 'rgba(0, 0, 0, 0.87)',
  background: '#fff',
});

const fontBase = css`
  font-weight: 300;
  line-height: 1.5em;
`;
const defaultFont = css`
  ${fontBase}
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

const defaultHeadline = css`
  ${fontBase}
  font-family: serif;
`;

const primaryColor = '#9c27b0';
const warningColor = '#ff9800';
const dangerColor = '#f44336';
const successColor = '#4caf50';
const infoColor = '#00acc1';
const grayColor = '#999999';

const primaryCardHeader = css({
  background: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
  ...primaryBoxShadow,
});

const cardActions = css({
  margin: '0 20px 10px',
  paddingTop: '10px',
  borderTop: '1px solid #eeeeee',
  height: 'auto',
  ...defaultFont,
});

const cardHeader = css({
  margin: '-20px 15px 0',
  borderRadius: '3px',
  padding: '15px',
});

// prettier-ignore
const highlightButton = css`
  background: ${props => props.theme.highlightColor};
  box-shadow: 0 3px 6px -5px ${props => props.theme.highlightColor},
              0 5px 40px -5px ${props => props.theme.highlightColor};
  transform: scale(1.03);
`;

const title = css({
  color: '#3C4858',
  textDecoration: 'none',
  fontWeight: '300',
  marginTop: '30px',
  marginBottom: '25px',
  minHeight: '32px',
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  '& small': {
    color: '#777',
    fontWeight: '400',
    lineHeight: '1',
  },
});

const cardTitle = css({
  ...title,
  marginTop: '0',
  marginBottom: '3px',
  minHeight: 'auto',
  '& a': {
    ...title,
    marginTop: '.625rem',
    marginBottom: '0.75rem',
    minHeight: 'auto',
  },
});

const cardSubtitle = css({
  marginTop: '-.375rem',
});

const cardLink = css({
  '& + $cardLink': {
    marginLeft: '1.25rem',
  },
});

export {
  drawerWidth,
  transition,
  container,
  page,
  boxShadow,
  footerShadow,
  card,
  defaultFont,
  defaultHeadline,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  grayColor,
  primaryBoxShadow,
  highlightButton,
  primaryCardHeader,
  cardActions,
  cardHeader,
  defaultBoxShadow,
  title,
  cardTitle,
  cardSubtitle,
  cardLink,
};
