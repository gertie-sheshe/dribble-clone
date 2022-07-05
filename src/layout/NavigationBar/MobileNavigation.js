import React from 'react';
import styled from 'styled-components';
import Button from '../../ui/Button';

function MobileNavigation() {
  return (
      <NavigationContainer>
        <Button>Menu</Button>
        <div>logo</div>
        <Button>Sign In</Button>
      </NavigationContainer>
  )
}

const NavigationContainer = styled.nav`
  display: flex;
`
export default MobileNavigation