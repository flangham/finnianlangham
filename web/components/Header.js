import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Container from './Container';
import HeaderLogo from './HeaderLogo';

const HeaderStyles = styled.header`
  height: 100vh;
  min-height: 430px;
  background: var(--blue);
  color: var(--white);
  position: relative;

  .col {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .image-col {
    height: 180px;
  }

  .header-content {
    max-width: 1300px;
    margin: auto;
  }

  .name {
    font-weight: bold;
    font-style: italic;
  }

  .orange {
    color: var(--orange);
  }

  .arrow {
    font-size: 3em;
    position: absolute;
  }

  @media (hover: hover) and (pointer: fine) {
    a:hover {
      opacity: 0.5;
    }
  }

  @media (min-width: 430px) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 540px;
  }

  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 500px;

    .columns {
      display: flex;
      flex-direction: row-reverse;
    }

    .image-col {
      width: 30%;
      padding-left: 1rem;
      display: flex;
      align-items: center;
      height: 300px;
    }

    justify-content: center;
    .word-col {
      width: 70%;
      max-width: 940px;
    }
  }

  @media (min-width: 1000px) {
    min-height: 610px;
  }

  @media (min-width: 1400px) {
    min-height: 740px;
    .word-col {
      font-size: 40px;
      max-width: 1200px;
      width: 80%;
    }
  }
`;

export default function Header() {
  const [arrowStyle, setArrowStyle] = useState({ top: '0' });

  useEffect(() => {
    const checkHeight = () => {
      const width = window.innerWidth;
      if (width < 430) {
        let distance = window.innerHeight - 70;
        const threshold = 350;
        if (distance < threshold) distance = threshold;
        setArrowStyle({ top: `${distance}px` });
      } else {
        setArrowStyle({ bottom: 'var(--pad)' });
      }
    };
    window.addEventListener('resize', checkHeight);
    checkHeight();
  }, []);

  return (
    <HeaderStyles>
      <Container>
        <div className="header-content">
          <div className="columns">
            <div className="col image-col">
              <HeaderLogo />
            </div>
            <div className="col word-col">
              <h1>Finnian Langham</h1>
              <p>
                is a front-end <span className="orange">developer</span> &amp; <span className="orange">designer</span>.
                He primarily works with creatives, helping to make their digital visions a reality.
              </p>
            </div>
          </div>
        </div>
        <p className="arrow" style={arrowStyle}>
          ↓
        </p>
      </Container>
    </HeaderStyles>
  );
}
