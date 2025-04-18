import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import collage from '../assets/collage.jpg'

const AboutSection = styled.section`
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: var(--background);
`

const SectionTitle = styled(motion.h2)`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 3rem;
  position: relative;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: var(--gradient);
    border-radius: 2px;
  }
`

const SplitLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

const AboutText = styled(motion.div)`
  color: var(--text-secondary);
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  
  p {
    margin-bottom: 1.2rem;
  }

  strong {
    color: var(--primary);
    font-weight: 600;
  }
`

const SkillsList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  width: 100%;
`

const Skill = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--card-bg);
  padding: 0.8rem 1rem;
  border: 3px solid var(--primary);
  font-family: 'Poppins', sans-serif;
  font-size: 1 rem;
  line-height: 1.2;
  color: var(--primary);
  transition: all 0.3s ease;
  box-shadow: 4px 4px 0 rgba(99, 102, 241, 0.3);
  word-break: break-word;
  min-height: 50px;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 rgba(99, 102, 241, 0.3);
  }

  &::before {
    content: '▸';
    color: var(--primary);
    flex-shrink: 0;
  }
`

const FlavorText = styled.div`
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
  margin-top: 2rem;
  color: var(--primary);
  text-align: center;
  text-shadow: 2px 2px rgba(99, 102, 241, 0.2);
`

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <AboutSection id="about">
      <SectionTitle
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        About Me
      </SectionTitle>
      <SplitLayout>
        <ImageContainer>
          <AboutImage 
            src={collage} 
            alt="About Me Collage"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          />
        </ImageContainer>
        <AboutText
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            I'm a <strong>3rd-year Computer Science</strong> student exploring tech through code, creativity, and curiosity.
          </p>
          <p>
            Outside the classroom, I dive into <strong>hackathons</strong>, building cool stuff with friends, and solving problems under pressure.
          </p>
          <p>
            I'm also a <strong>Kuchipudi dancer</strong> and a member of the <strong>National Cadet Corps</strong> — where I balance discipline and art with passion.
          </p>
          <p>
            Always open to internships, collabs, and tech convos. Let's build something awesome together!
          </p>
          <p>Tech I'm familiar with:</p>
          <SkillsList
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Skill>Java</Skill>
            <Skill>Cloud Computing</Skill>
            <Skill>Python</Skill>
            <Skill>React</Skill>
            <Skill>JavaScript</Skill>
            <Skill>MySQL</Skill>
            <Skill>Git</Skill>
            <Skill>Figma</Skill>
          </SkillsList>
        </AboutText>
      </SplitLayout>
    </AboutSection>
  )
}

export default About
