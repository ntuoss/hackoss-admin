import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { withFirebase } from 'utils/firebase';

import { SIGN_IN } from 'routes';

/* eslint-disable */
const PrivateRoute = ({ component: Component, ...rest }) => {
  class FirebaseWrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authed: false,
        authUser: '',
      };
    }

    componentDidMount() {
      const { firebase } = this.props;
      this.listener = firebase.auth.onAuthStateChanged(authUser => {
        return authUser
          ? this.setState({ authUser, authed: true })
          : this.setState({ authUser: null, authed: true });
      });
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      const { authed, authUser } = this.state;
      if (!authed) return <div />;
      return (
        <Route
          {...rest}
          render={props =>
            authUser !== null ? (
              <Component {...props} />
            ) : (
              <Redirect
                // to={{
                //   pathname: { SIGN_IN },
                //   origin: { from: props.location },
                // }}
                to={SIGN_IN}
              />
            )
          }
        />
      );
    }
  }
  const Private = withFirebase(FirebaseWrapper);
  return <Private />;
};

PrivateRoute.prototype = {
  component: PropTypes.element.isRequired,
};

export default PrivateRoute;
