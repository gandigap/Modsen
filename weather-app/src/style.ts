import styled from 'styled-components';

interface StyledAppProps {
  backgroundAndColor: { backgroundUrl: string; color: string };
}

export const StyledApp = styled.div<StyledAppProps>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 70% auto;
  grid-template-areas:
    'main'
    'footer';
  position: relative;
  z-index: 3;
  /* background: url(${(props) => props.backgroundAndColor.backgroundUrl})
    no-repeat center center fixed; */
  color: ${(props) => props.backgroundAndColor.color};

  &::after {
    z-index: -1;
    content: '';
    background-image: url(${(props) => props.backgroundAndColor.backgroundUrl});
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.9;
  }

  button {
    background-color: transparent;
    border: none;
  }

  input {
    background-color: transparent;
    border: none;
    color: ${(props) => props.backgroundAndColor.color};

    &:focus {
      outline: none;
    }
  }
`;
