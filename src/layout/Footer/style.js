import styled from 'styled-components';
import { defaultFont } from 'styles/variables';

const Wrapper = styled.footer`
  ${defaultFont};
  position: relative;
  padding: 1.5rem 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  border-top: 0.1px solid #000a;
  font-size: 0.9rem;
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
