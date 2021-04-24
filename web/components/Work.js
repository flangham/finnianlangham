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
    margin: 2em auto 0;
  }
`;

export default function Work({ folio }) {
  return (
    <WorkStyles id="work">
      <Container>
        <SectionTitle color="var(--blue)" title="Work" />
        <div className="grid">
          {folio.map(({ project }) => {
            const data = project[0];
            const { image, name, slug, url } = data;
            return <Project name={name} image={image} url={url} key={slug.current} slug={slug} />;
          })}
        </div>
      </Container>
    </WorkStyles>
  );
}
