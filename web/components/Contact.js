import styled from 'styled-components';
import Obfuscate from 'react-obfuscate';
import { useIntersection } from 'react-use';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import SectionTitle from './SectionTitle';
import Container from './Container';

const ContactStyles = styled.section`
  background-color: var(--white);
  color: var(--blue);
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
  const intersectionThreshold = 0.9;

  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: intersectionThreshold,
  });

  const fadeIn = (element) => {
    gsap.to(element, {
      opacity: 1,
      transform: 'translateY(0)',
      duration: 1,
      stagger: {
        amount: 0.2,
      },
      ease: 'power4.out',
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, {
      opacity: 0,
      transform: 'translateY(1.5em)',
      duration: 0.6,
    });
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
          <Obfuscate className="animate-contact" email="contact@finnianlangham.com" />
        </Container>
      </ContactStyles>
    </div>
  );
}
