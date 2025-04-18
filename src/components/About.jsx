import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import avatar from '../assets/bgsreya.jpg' // make sure this path matches your structure

const float = keyframes`
  0% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-20px) translateX(10px); }
  100% { transform: translateY(0px) translateX(0px); }
`

const AboutSection = styled.section`
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: var(--background);
  border-left: 5px solid var(--primary);

  &::after {
    content: '';
    position: absolute;
    top: 20%;
    right: 10%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent);
    border-radius: 50%;
    animation: ${float} 8s ease-in-out infinite;
    z-index: -2;
    filter: blur(60px);
  }
`

const SectionTitle = styled(motion.h2)`
  font-family: 'Press Start 2P', cursive;
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-shadow: var(--pixel-border);

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 120px;
    height: 4px;
    background: var(--gradient);
    border-radius: 2px;
  }
`

const SplitLayout = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
`

const AvatarImage = styled.img`
  width: 250px;
  border: 4px solid var(--primary);
  box-shadow: 8px 8px 0 rgba(99, 102, 241, 0.3);
  image-rendering: pixelated;
`

const AboutText = styled(motion.div)`
  color: var(--text-secondary);
  font-family: 'VT323', monospace;
  font-size: 1.3rem;
  line-height: 1.6;
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 4px;
  max-width: 600px;
  border: 4px solid var(--primary);
  box-shadow: 8px 8px 0 rgba(99, 102, 241, 0.3);

  p {
    margin-bottom: 1.2rem;
  }

  strong {
    color: var(--primary);
    text-shadow: 2px 2px rgba(99, 102, 241, 0.2);
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
  font-family: 'Press Start 2P', cursive;
  font-size: 0.65rem;
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
        💻 About Me
      </SectionTitle>

      <SplitLayout>
        <AvatarImage src={avatar} alt="My avatar" />
        <AboutText
          initial={{ opacity: 0, x: -20 }}
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
            I'm also a <strong>Kuchipudi dancer</strong> and a <strong>National Cadet Corps</strong> cadet — where I balance discipline and art with passion.
          </p>
          <p>
            Always open to internships, collabs, and tech convos. Let's build something awesome together!
          </p>
          <p>Technologies I'm familiar with:</p>
          <SkillsList
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Skill>Java</Skill>
            <Skill>Android</Skill>
            <Skill>Python</Skill>
            <Skill>React</Skill>
            <Skill>JavaScript</Skill>
            <Skill>MySQL</Skill>
            <Skill>Git</Skill>
            <Skill>Figma</Skill>
          </SkillsList>
          <FlavorText>"Can debug in 3 languages, and choreograph a dance in 1 😄"</FlavorText>
        </AboutText>
      </SplitLayout>
    </AboutSection>
  )
}

export default About
