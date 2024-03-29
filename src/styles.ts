import styled from 'styled-components';

type Props = {
  colors: string;
  showZIndicator: boolean;
  showVebug: boolean;
};

const ZSwitchWrapper = styled.div`
  position: fixed;
  top: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 20px;
  padding: 8px 16px;
  background-color: #ffdfd3;
  border-radius: 24px;
  box-shadow: 0 0.25em 0.25em -0.125em rgba(0, 0, 0, 0.25),
    0 0.5em 1.25em rgba(0, 0, 0, 0.5);

  .z-indicator-switch {
    margin-left: 16px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  width: 100%;
`;

const VebugWrapper = styled.div`
  ${(props: Props) => props.showVebug && props.colors}

  .z-indicator {
    display: ${(props: Props) => (props.showZIndicator ? 'flex' : 'none')};
    position: absolute;
    border-radius: 50%;
    top: 4px;
    right: 4px;
    width: 20px;
    height: 20px;
    color: #fff;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    box-shadow: 0 0.25em 0.25em -0.125em rgba(0, 0, 0, 0.25),
      0 0.5em 1.25em rgba(0, 0, 0, 0.5);
    z-index: 99999;
  }
`;

export { ZSwitchWrapper, Row, VebugWrapper };
