import styled from 'styled-components';
import { lightFont } from 'styles/variables';

const Wrapper = styled.footer`
  ${lightFont};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  border-top: 0.1px solid #000a;
  font-size: 0.8rem;
`;
const List = styled.ul`
  margin: auto 0;
  padding: 0;
`;
const ListItem = styled.li`
  display: inline-block;
  padding-right: 3rem;
`;

export { Wrapper, List, ListItem };
