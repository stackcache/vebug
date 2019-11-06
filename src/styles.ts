import styled from 'styled-components';

type Props = {
  colors: string;
};

const VebugWrapper = styled.div`
  ${(props: Props) => props.colors}
`;

export { VebugWrapper };
