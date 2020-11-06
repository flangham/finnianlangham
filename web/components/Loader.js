import styled from 'styled-components';
import { useState, useEffect } from 'react';

const LoaderStyles = styled.div`
  background: var(--blue);
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  transition: opacity 2s;
  pointer-events: none;
`;

export default function Loader() {
  const [opacity, setOpacity] = useState({ opacity: 1 });
  useEffect(() => {
    window.addEventListener('load', () => setOpacity({ opacity: 0 }));
  }, []);

  return <LoaderStyles style={opacity} />;
}
