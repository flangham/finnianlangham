import styled from 'styled-components';

const FooterStyles = styled.footer`
  color: var(--white);
  background: var(--blue);
  font-size: 11px;
  cursor: default;
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
    width: 100%;
    text-align: center;
  }

  width: 100%;
  height: 5em;
  display: flex;
  align-items: center;
`;

export default function Footer() {
  const year = new Date().getFullYear().toString();

  return (
    <FooterStyles>
      <p>
        <span className="copyright">©</span> Finnian Langham {year} | Background animation by{' '}
        <a href="https://codepen.io/mladen___/pen/gbvqBo?editors=1010" target="_blank" rel="noreferrer noopener">
          Mladen Stanojevic
        </a>
      </p>
    </FooterStyles>
  );
}
