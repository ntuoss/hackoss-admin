import React from 'react';
import { Wrapper, List, ListItem } from './style';

const Footer = () => (
  <Wrapper>
    <List>
      <ListItem>
        <a href='#home'>Home</a>
      </ListItem>
      <ListItem>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://hackoss.firebaseapp.com'
        >
          About us
        </a>
      </ListItem>
      <ListItem>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.eventbrite.sg/o/ntu-open-source-society-17711580227'
        >
          Event
        </a>
      </ListItem>
      <ListItem>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://medium.com/@zaynjarvis'
        >
          Medium
        </a>
      </ListItem>
      <ListItem>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/ntuoss'
        >
          Github
        </a>
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
