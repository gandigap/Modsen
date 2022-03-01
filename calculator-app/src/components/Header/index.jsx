import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  a {
    color: ${({ theme }) => theme.colors.secondaryLight};
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">Home</Link>
      <Link to="/setting">Setting</Link>
    </HeaderContainer>
  );
};

export default Header;
