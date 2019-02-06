import React from 'react';

import {
  Paper,
  Grow,
  ClickAwayListener,
  Popper,
  IconButton,
  Badge,
} from '@material-ui/core';

import Notifications from '@material-ui/icons/Notifications';

import mockMsg from 'mocks/notifications';
import { MenuItem, MenuList } from './style';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      messages: [],
    };
  }

  componentDidMount() {
    this.setState({ messages: mockMsg });
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
    // this.setState({ messages: [] });
  };

  render() {
    const { open, messages } = this.state;
    return (
      <>
        <IconButton
          buttonRef={node => {
            this.anchorEl = node;
          }}
          onClick={this.handleToggle}
        >
          <Badge badgeContent={messages.length} color='primary'>
            <Notifications />
          </Badge>
        </IconButton>
        <Popper open={open} anchorEl={this.anchorEl} transition>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id='menu-list-grow'
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList role='menu'>
                    {messages.map(msg => (
                      <MenuItem
                        onClick={this.handleClose}
                        key={msg + Math.random(1)} // May have same msg add random key
                      >
                        {msg}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </>
    );
  }
}

export default Notification;

// React Hook implementation replace with Hook whenever possible
//
// function HeaderLinks() {
//   let anchorEl;
//   const [open, changeOpenState] = useState(false);
//   return (
//     <>
//       <IconButton
//         buttonRef={node => {
//           anchorEl = node;
//         }}
//         onClick={() => changeOpenState(!open)}
//       >
//         <Badge badgeContent={1} color='primary'>
//           <Notifications />
//         </Badge>
//       </IconButton>
//       <Popper open={open} anchorEl={anchorEl} transition>
//         {({ TransitionProps, placement }) => (
//           <Grow
//             {...TransitionProps}
//             id='menu-list-grow'
//             style={{
//               transformOrigin:
//                 placement === 'bottom' ? 'center top' : 'center bottom',
//             }}
//           >
//             <Paper>
//               <ClickAwayListener onClickAway={() => changeOpenState(false)}>
//                 <MenuList role='menu'>
//                   <MenuItem onClick={() => changeOpenState(false)}>
//                     Mike John responded to your email
//                   </MenuItem>
//                 </MenuList>
//               </ClickAwayListener>
//             </Paper>
//           </Grow>
//         )}
//       </Popper>
//       </>
//   );
// }
