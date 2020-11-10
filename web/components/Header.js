import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useEffect } from 'react';
import gsap from 'gsap';
import Container from './Container';
import HeaderLogo from './HeaderLogo';

const HeaderStyles = styled.header`
  cursor: default;
  height: 100vh;
  min-height: 430px;
  background: var(--blue);
  color: var(--white);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

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

  /* .header-words {
    opacity: 0;
  } */

  .name {
    font-weight: bold;
    font-style: italic;
  }

  .orange {
    color: var(--orange);
  }

  .arrow {
    font-size: 4.2em;
    font-family: Space Mono, monospace;
    border: none;
    line-height: 0.8;
    display: flex;
    align-items: center;
    background: none;
    color: var(--white);
    cursor: pointer;
    text-decoration: none;
  }

  @media (min-width: 430px) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 600px;
    .arrow {
      position: absolute;
      bottom: var(--pad);
    }
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
      max-width: 750px;
    }
  }

  @media (min-width: 1000px) {
    min-height: 685px;
    .arrow {
      font-size: 126px;
    }
    .word-col {
      max-width: 930px;
    }
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
  // useEffect(() => {
  //   gsap.to('.header-words', {
  //     opacity: 1,
  //     duration: 2.4,
  //     ease: 'power4.out',
  //   });
  // });

  return (
    <HeaderStyles>
      <Container>
        <div className="header-content">
          <div className="columns">
            <div className="col image-col">
              <HeaderLogo />
            </div>
            <div className="col word-col">
              <div className="header-words">
                <h1>Finnian Langham</h1>
                <p>
                  is a front-end <span className="orange">developer</span> &amp;{' '}
                  <span className="orange">designer</span>. He primarily works with artists and creatives, helping to
                  make their digital visions a reality.
                </p>
              </div>
              <AnchorLink href="#work" className="arrow">
                ↓
              </AnchorLink>
            </div>
          </div>
        </div>
      </Container>
    </HeaderStyles>
  );
}
