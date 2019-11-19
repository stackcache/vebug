/**
 * Vebug
 */

import React, { useState, useRef, useEffect } from 'react';
import * as S from './styles';

type VebugProps = {
  children: React.ReactNode;
};

const getDomDepthLevel = (root: Element | null) => {
  let pathInfo = {
    level: 0,
    zIndex: '0',
  };

  if (root) {
    for (let i = 0, j = root.children.length; i < j; i++) {
      const childNode = root.children[i];
      const curNodePathInfo = getDomDepthLevel(childNode);
      if (curNodePathInfo.level > pathInfo.level) {
        pathInfo = curNodePathInfo;
      }
      const childZIndex = childNode.style.zIndex || '0';
      curNodePathInfo.zIndex = childZIndex;
      if (parseInt(childZIndex) > 0) {
        const zIndicator = document.createElement('div');
        zIndicator.innerText = curNodePathInfo.zIndex;
        zIndicator.className += 'z-indicator';
        childNode.appendChild(zIndicator);
      }
    }

    pathInfo.level += 1;
  }

  return pathInfo;
};

const generateRGBAColor = (): string => {
  const o = Math.round,
    r = Math.random,
    s = 255;
  return (
    'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + '0.3)'
  );
};

const Vebug = (props: VebugProps) => {
  const { children } = props;
  const wrapperRef = useRef(null);
  const [colors, setColors] = useState('');

  useEffect(() => {
    if (wrapperRef && wrapperRef.current) {
      const depth = getDomDepthLevel(wrapperRef.current);
      let colorString = '';
      let bracketString = '';
      for (let i = 0; i < depth.level - 1; i++) {
        colorString += `* { background-color: ${generateRGBAColor()} !important;`;
        bracketString += '}';
      }
      colorString += bracketString;
      setColors(colorString);
    }
  }, [wrapperRef]);

  return (
    <S.VebugWrapper colors={colors} ref={wrapperRef}>
      {children}
    </S.VebugWrapper>
  );
};

export default Vebug;
