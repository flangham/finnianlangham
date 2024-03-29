import styled from 'styled-components';
import { useRef, useState, useEffect } from 'react';
import 'intersection-observer';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import SectionTitle from './SectionTitle';
import Container from './Container';
import { animationIn, animationOut } from '../utilities/textAnimation';

const SkillsStyles = styled.section`
  background-color: var(--orange);
  color: var(--white);
  ul {
    padding-left: calc(var(--pad) + 0.2em);
    padding-left: 2em;
    margin-bottom: 1em;
  }
`;

export default function Skills() {
  const sectionRef = useRef(null);
  const intersectionThreshold = 0.3;

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: intersectionThreshold,
  });

  const fadeIn = (element) => {
    gsap.to(element, animationIn);
  };

  const fadeOut = (element) => {
    gsap.to(element, animationOut);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fadeOut('li');
  }, []);

  useEffect(() => {
    if (intersection && intersection.intersectionRatio > intersectionThreshold) {
      setIsVisible(true);
    }
    if (isVisible) fadeIn('li');
  }, [intersection, isVisible]);

  return (
    <SkillsStyles>
      <Container>
        <SectionTitle color="var(--white)" title="Skills" />
        <ul ref={sectionRef}>
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
