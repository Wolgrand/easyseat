import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`
  background: #9991fc;
  height: 3rem;
  border-radius: 0.8rem;
  border: 0;
  padding: 0 1rem;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#9991fc')};
  }
`;
