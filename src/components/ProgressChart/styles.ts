import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-self: center;
  .svg {
    display: block;
    margin: auto auto;
    max-width: 100%;
  }

  .svg-circle-bg {
    fill: none;
  }

  .svg-circle {
    fill: none;
  }

  .svg-circle-text {
    margin-top: 0.5rem;
    display: flex;
    align-self: center;

    font-size: 2rem;
    text-anchor: middle;
    fill: #fff;
    font-weight: bold;
  }
`;
