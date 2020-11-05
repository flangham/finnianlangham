import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import Container from './Container';
import Project from './Project';

const WorkStyles = styled.section`
  color: var(--blue);

  .grid {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, var(--grid-width));
    grid-gap: calc(var(--pad) / 2) calc(var(--pad) * 2);
    max-width: 1200px;
    margin: auto;
  }
`;

export default function Work({ projects }) {
  return (
    <WorkStyles>
      <Container>
        <SectionTitle color="var(--blue)" title="Work" />
        <div className="grid">
          {projects.map((project) => {
            const { image, name, slug, url } = project;
            return <Project name={name} image={image} url={url} key={slug.current} />;
          })}
        </div>
      </Container>
    </WorkStyles>
  );
}
