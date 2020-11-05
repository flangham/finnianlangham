import styled from 'styled-components';
import Obfuscate from 'react-obfuscate';
import SectionTitle from './SectionTitle';
import Container from './Container';

const ContactStyles = styled.section`
  background-color: var(--white);
  color: var(--blue);
  a {
    color: var(--blue);
  }

  @media (hover: hover) and (pointer: fine) {
    a:hover {
      color: var(--orange);
    }
  }
`;

export default function Work() {
  return (
    <ContactStyles>
      <Container>
        <SectionTitle color="var(--blue)" title="Contact" />
        <p>Shoot me an email:</p>
        <Obfuscate email="contact@finnianlangham.com" />
      </Container>
    </ContactStyles>
  );
}
