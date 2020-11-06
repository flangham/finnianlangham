import styled from 'styled-components';

const FooterStyles = styled.footer`
  color: var(--white);
  background: var(--blue);
  font-size: 11px;
  cursor: default;

  .copyright {
    font-family: sans-serif;
  }
  p {
    width: 100%;
    text-align: center;
  }

  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
`;

export default function Footer() {
  const year = new Date().getFullYear().toString();

  return (
    <FooterStyles>
      <p>
        <span className="copyright">©</span> Finnian Langham {year}
      </p>
    </FooterStyles>
  );
}
