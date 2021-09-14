import styled from 'styled-components';
import 'intersection-observer';
import { useIntersection } from 'react-use';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import SectionTitle from './SectionTitle';
import Container from './Container';
import { animationIn, animationOut } from '../utilities/textAnimation';

const ContactStyles = styled.section`
  background-color: var(--white);
  color: var(--blue);
  margin-bottom: 1em;
  a {
    color: var(--blue);
    display: block;
    text-align: end;
  }

  @media (hover: hover) and (pointer: fine) {
    a:hover {
      color: var(--orange);
    }
  }
`;

export default function Work() {
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
    fadeOut('.animate-contact');
  }, []);

  useEffect(() => {
    if (intersection && intersection.intersectionRatio > intersectionThreshold) {
      setIsVisible(true);
    }
    if (isVisible) fadeIn('.animate-contact');
  }, [intersection, isVisible]);

  return (
    <div ref={sectionRef}>
      <ContactStyles>
        <Container>
          <SectionTitle color="var(--blue)" title="Contact" />
          <p className="animate-contact">Shoot me an email:</p>
          <p className="animate-contact">contact@finnianlangham.com</p>
        </Container>
      </ContactStyles>
    </div>
  );
}
