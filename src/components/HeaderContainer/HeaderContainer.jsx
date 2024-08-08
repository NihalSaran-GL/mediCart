import React from 'react';
import HeaderMenu from './HeaderMenu/HeaderMenu';

const HeaderContainer = styled.header`
`;

function Header() {
  return (
    <HeaderContainer>
      <MainHeader />
      <HeaderMenu />
    </HeaderContainer>
  );
}

export default Header;