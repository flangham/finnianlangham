import styled from 'styled-components';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ProjectStyles = styled.div`
  border-radius: 5px;
  margin-bottom: var(--pad);
  /* overflow: hidden; */
  &:last-child {
    margin-bottom: 0;
  }

  .project-container {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.2s;
    overflow: hidden;
    border-radius: 5px;
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  width: 100%;
  height: var(--grid-height);

  .hover-title {
    opacity: 0;
    transition: opacity 0.2s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }

  h3 {
    color: var(--white);
  }

  @media (hover: hover) and (pointer: fine) {
    .project-container:hover {
      /* box-shadow: 0px 3px 5px 3px rgba(0, 0, 0, 0.3); */
      .hover-title {
        opacity: 1;
      }
    }
  }
`;

export default function Project({ name, image, url }) {
  return (
    <ProjectStyles>
      <div className="project-container">
        <a href={url}>
          <img src={urlFor(image).url()} alt={name} />
          <div className="hover-title">
            <h3>{name}</h3>
          </div>
        </a>
      </div>
    </ProjectStyles>
  );
}
