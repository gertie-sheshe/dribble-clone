import React from 'react';
import styled from 'styled-components';

function Button({children, onClick}) {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  )
}

const StyledButton = styled.button`
`
export default Button