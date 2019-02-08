import React from 'react';
import { Link } from 'react-router-dom';

import {
  Paper,
  Grow,
  ClickAwayListener,
  Popper,
  IconButton,
} from '@material-ui/core';
import Person from '@material-ui/icons/Person';

import { withFirebase } from 'utils/firebase';
import { USER } from 'routes';
import { MenuItem, MenuList } from './style';

class UserLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      arrowRef: null,
    };
  }

  handleToggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  };

  handleArrow = node => {
    this.setState({
      arrowRef: node,
    });
  };

  render() {
    /* eslint-disable */
    const { firebase } = this.props;
    const { open, messages, arrowRef } = this.state;
    return (
      <>
        <IconButton
          buttonRef={node => {
            this.anchorEl = node;
          }}
          onClick={this.handleToggle}
        >
          <Person />
        </IconButton>
        <Popper
          open={open}
          anchorEl={this.anchorEl}
          disablePortal={false}
          transition
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id='menu-list-grow'
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <>
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList role='menu'>
                      <MenuItem>
                        <Link to={USER}>My Profile</Link>
                      </MenuItem>
                      <MenuItem onClick={firebase.signout}>SignOut</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </>
            </Grow>
          )}
        </Popper>
      </>
    );
  }
}

export default withFirebase(UserLink);
