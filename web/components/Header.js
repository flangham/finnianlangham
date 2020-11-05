import styled from 'styled-components';
import Link from 'next/link';
import Container from './Container';
import HeaderLogo from './HeaderLogo';

const HeaderStyles = styled.header`
  height: 100vh;
  min-height: 430px;
  background: var(--blue);
  color: var(--white);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .col {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .header-content {
    max-width: 1200px;
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
    bottom: 0;
  }

  @media (hover: hover) and (pointer: fine) {
    a:hover {
      opacity: 0.5;
    }
  }

  @media (min-width: 800px) {
    min-height: 500px;

    .columns {
      display: flex;
      flex-direction: row-reverse;
    }

    .col:nth-child(1) {
      width: 30%;
      padding-left: 1rem;
    }
    .col:nth-child(2) {
      width: 70%;
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <Container>
        <div className="header-content">
          <div className="columns">
            <div className="col">
              <div className="header-image-container">
                <div className="header-image">
                  <HeaderLogo />
                </div>
              </div>
            </div>
            <div className="col">
              <h1>Finnian Langham</h1>
              <p>
                is a front-end <span className="orange">developer</span> and <span className="orange">designer</span>.
                He primarily works with creatives, helping to make their digital visions a reality.
                {/* <br />
                He chronicals his adventures as well as handy tips and tutorials on a{' '}
                <Link href="/blog">
                  <a className="orange">blog</a>
                </Link> */}
              </p>
            </div>
          </div>
        </div>
        <p className="arrow">↓</p>
      </Container>
    </HeaderStyles>
  );
}
