/**
 * Vebug
 */

import * as React from 'react';
import * as S from './styles';

type VebugProps = {
  children: React.ReactNode;
};

function Vebug(props: VebugProps) {
  const { children } = props;

  return <S.VebugWrapper>{children}</S.VebugWrapper>;
}

export default Vebug;
