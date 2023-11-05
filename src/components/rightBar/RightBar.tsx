import React from 'react';
import { useWindowSize } from 'usehooks-ts';

export function RightBar() {
  const { width } = useWindowSize();

  return width >= 992 && <div style={{ width: '27%' }}>RightBar</div>;
}
