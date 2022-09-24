import React from 'react';
import styled from 'styled-components';

interface Props {
  content: string | undefined;
}

const StyledTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.85);
`;

function Title({ content }: Props) {
  return (
    <StyledTitle>
      {content}
    </StyledTitle>
  );
}

export default Title;
