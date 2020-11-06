import { useEffect, useState } from 'react';
import styled from 'styled-components';
import isMobile from 'react-device-detect';

const LogoStyles = styled.div`
  perspective: 500px;
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 300px;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1em;
  display: block;
  --offset: 20px;

  svg {
    width: calc(100% - var(--offset));
    height: calc(100% - var(--offset));
    max-width: 100%;
  }

  .logo {
    position: absolute;
    width: calc(100% - var(--offset));
    height: calc(100% - var(--offset));
  }

  .logo:nth-child(2) {
    transform: translate(calc(var(--offset) / 2), calc(var(--offset) / 2));
  }
  .logo:nth-child(3) {
    transform: translate(var(--offset), var(--offset));
  }

  @media (min-width: 800px) {
    --offset: 30px;
  }
`;

export default function HeaderLogo() {
  const transformScale = 20;
  const [style, setStyle] = useState({ transform: 'rotate3d(0, 0, 0, 0)' });

  const listnerFunction = function (e) {
    if (isMobile) return;
    const windowX = window.innerWidth;
    const windowY = window.innerHeight;
    const mouseX = e.clientX - windowX / 2;
    const mouseY = e.clientY - windowY / 2;
    setStyle({ transform: `rotateY(${mouseX / transformScale}deg) rotateX(${-mouseY / transformScale}deg)` });
  };

  useEffect(() => {
    window.addEventListener('mousemove', listnerFunction);
    return function cleanup() {
      window.removeEventListener('mousemove', listnerFunction);
    };
  });

  return (
    <LogoStyles>
      <div className="container">
        <div className="logo">
          <svg
            style={style}
            width="283"
            height="301"
            viewBox="0 0 283 301"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M266 78.4C266 88.8 255.6 98 246.8 102C233.2 109.2 215.6 112 200.4 112V44.4C216.8 44.4 231.6 46.8 246.8 54C256 58.8 266 66.8 266 78.4ZM200.4 168.4V151.6C240.4 151.6 273.6 119.2 273.6 78.4C273.6 68.4 271.6 58.8 268 49.6C260 31.6 247.2 18.4 229.2 10.4C220 6.79998 210.4 4.79998 200.4 4.79998H192.8V112H148C67.6 112 4 176.4 2.4 257.2V262.8H9.2V257.2C9.2 186.4 85.6 151.6 148 151.6H192.8V168.4H153.2V175.6H192.8V298H200.4V175.6H279.6V168.4H200.4Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="logo">
          <svg
            style={style}
            width="283"
            height="301"
            viewBox="0 0 283 301"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M266 78.4C266 88.8 255.6 98 246.8 102C233.2 109.2 215.6 112 200.4 112V44.4C216.8 44.4 231.6 46.8 246.8 54C256 58.8 266 66.8 266 78.4ZM200.4 168.4V151.6C240.4 151.6 273.6 119.2 273.6 78.4C273.6 68.4 271.6 58.8 268 49.6C260 31.6 247.2 18.4 229.2 10.4C220 6.79998 210.4 4.79998 200.4 4.79998H192.8V112H148C67.6 112 4 176.4 2.4 257.2V262.8H9.2V257.2C9.2 186.4 85.6 151.6 148 151.6H192.8V168.4H153.2V175.6H192.8V298H200.4V175.6H279.6V168.4H200.4Z"
              fill="var(--white)"
            />
          </svg>
        </div>
        <div className="logo">
          <svg
            style={style}
            width="283"
            height="301"
            viewBox="0 0 283 301"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M266 78.4C266 88.8 255.6 98 246.8 102C233.2 109.2 215.6 112 200.4 112V44.4C216.8 44.4 231.6 46.8 246.8 54C256 58.8 266 66.8 266 78.4ZM200.4 168.4V151.6C240.4 151.6 273.6 119.2 273.6 78.4C273.6 68.4 271.6 58.8 268 49.6C260 31.6 247.2 18.4 229.2 10.4C220 6.79998 210.4 4.79998 200.4 4.79998H192.8V112H148C67.6 112 4 176.4 2.4 257.2V262.8H9.2V257.2C9.2 186.4 85.6 151.6 148 151.6H192.8V168.4H153.2V175.6H192.8V298H200.4V175.6H279.6V168.4H200.4Z"
              fill="var(--orange)"
            />
          </svg>
        </div>
      </div>
    </LogoStyles>
  );
}
