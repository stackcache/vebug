import styled from 'styled-components';

type Props = {
  colors: string;
};

const VebugWrapper = styled.div`
  ${(props: Props) => props.colors}

  .z-indicator {
    position: absolute;
    border-radius: 50%;
    top: 4px;
    right: 4px;
    width: 20px;
    height: 20px;
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    box-shadow: 0 0.25em 0.25em -0.125em rgba(0, 0, 0, 0.25),
      0 0.5em 1.25em rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }
`;

export { VebugWrapper };
