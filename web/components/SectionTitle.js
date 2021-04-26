import styled from 'styled-components';

const TitleStyles = styled.div`
  cursor: default;
  color: ${(props) => props.color};
  .hLine {
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.color};
  }
  margin-bottom: 1em;
`;

export default function SectionTitle({ title, color }) {
  return (
    <TitleStyles>
      <h2 style={{ color }}>{title}</h2>
      <div style={{ backgroundColor: color }} className="hLine" />
    </TitleStyles>
  );
}
