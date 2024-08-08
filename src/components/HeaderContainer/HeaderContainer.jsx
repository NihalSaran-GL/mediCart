import React from 'react';
import styled from 'styled-components';
import MainHeader from './MainHeader/MainHeader';

const HeaderContainer = styled.header`
`;

function Header() {
  return (
    <HeaderContainer>
      <MainHeader />
    </HeaderContainer>
  );
}

export default Header;