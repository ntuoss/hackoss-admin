import React from 'react';
import A from 'components/A';
import { Wrapper, List, ListItem } from './style';

const Footer = () => (
  <Wrapper>
    <List>
      <ListItem>
        <A href='#home'>Home</A>
      </ListItem>
      <ListItem>
        <A
          target='_blank'
          rel='noopener noreferrer'
          href='https://hackoss.firebaseapp.com'
        >
          About us
        </A>
      </ListItem>
      <ListItem>
        <A
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.eventbrite.sg/o/ntu-open-source-society-17711580227'
        >
          Event
        </A>
      </ListItem>
      <ListItem>
        <A
          target='_blank'
          rel='noopener noreferrer'
          href='https://medium.com/@zaynjarvis'
        >
          Medium
        </A>
      </ListItem>
      <ListItem>
        <A
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/ntuoss'
        >
          Github
        </A>
      </ListItem>
    </List>
    <div>
      &copy;
      {1900 + new Date().getYear()}
      &nbsp; made with ❤️ by NTUOSS
    </div>
  </Wrapper>
);

export default Footer;
