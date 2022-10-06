import { HeroSection } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <HeroSection>
      <h1>{title}</h1>
      {children}
    </HeroSection>
  );
};

export default Section;
