import styled from 'styled-components';
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

  .name {
    font-weight: bold;
    font-style: italic;
  }

  .orange {
    color: var(--orange);
  }

  .arrow {
    font-size: 4.2em;
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
                He primarily works with artists and creatives, helping to make their digital visions a reality.
              </p>
              <p className="arrow">↓</p>
            </div>
          </div>
        </div>
      </Container>
    </HeaderStyles>
  );
}
