import styled from 'styled-components';

const FooterStyles = styled.footer`
  color: var(--white);
  background: var(--blue);
  font-size: 11px;
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 2em;
  align-items: center;

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  .copyright {
    font-family: sans-serif;
  }

  p {
    text-align: center;
    white-space: pre;
  }

  .divider {
    display: none;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    .divider {
      display: inline;
    }
  }
`;

export default function Footer() {
  const year = new Date().getFullYear().toString();

  return (
    <FooterStyles>
      <p>
        <span className="copyright">©</span> Finnian Langham {year}
      </p>
      <p>
        <span className="divider"> | </span>
        Background animation by{' '}
        <a href="https://codepen.io/mladen___/pen/gbvqBo?editors=1010" target="_blank" rel="noreferrer noopener">
          Mladen Stanojevic
        </a>
      </p>
    </FooterStyles>
  );
}
