import styled from 'styled-components';

const ContainerStyles = styled.section`
  padding: var(--pad);
`;

export default function Container({ children }) {
  return <ContainerStyles>{children}</ContainerStyles>;
}
