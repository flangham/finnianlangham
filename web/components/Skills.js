import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import Container from './Container';

const SkillsStyles = styled.section`
  background-color: var(--orange);
  color: var(--white);
  ul {
    padding-left: calc(var(--pad) + 0.2em);
  }
`;

export default function Skills() {
  return (
    <SkillsStyles>
      <Container>
        <SectionTitle color="var(--white)" title="Skills" />
        <ul>
          <li>Javascript, React, Next, Gatsby</li>
          <li>Custom WordPress themes</li>
          <li>Headless content management with Sanity</li>
          <li>Automated deployment via GitHub</li>
          <li>Digital branding, wireframing</li>
        </ul>
      </Container>
    </SkillsStyles>
  );
}
