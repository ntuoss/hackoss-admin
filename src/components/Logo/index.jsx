import React from 'react';
import Image from 'components/Image';
import styled from 'styled-components';
import logo from 'assets/Logo_64.png';

// TODO: implement logic to lazy loading the logo
const LogoBase = props => <Image src={logo} alt='logo' {...props} />;

const Logo = styled(LogoBase)`
  height: ${props => props.size || props.height || '100px'};
  width: ${props => props.size || props.width || '100px'};
`;

export default Logo;
