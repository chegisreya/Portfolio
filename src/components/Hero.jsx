import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import sreyapfp from '../assets/grass.jpg'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 80%;
    height: 200%;
    background: var(--gradient);
    opacity: 0.1;
    transform: rotate(30deg);
    z-index: -1;
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
`

const ProfileImage = styled(motion.img)`
  margin-top: 100px;
  margin-right: 100px;
  width: 359px;
  height: 400px;
  border: 4px solid var(--primary);
  position: relative;
  box-shadow: 8px 8px 0 rgba(99, 102, 241, 0.3);

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: -4px;
    width: calc(100% + 8px);
    height: 4px;
    background: repeating-linear-gradient(
      to right,
      var(--primary) 0,
      var(--primary) 5px,
      transparent 5px,
      transparent 10px
    );
  }

  &::before {
    content: '';
    position: absolute;
    top: -4px;
    right: -8px;
    height: calc(100% + 8px);
    width: 4px;
    background: repeating-linear-gradient(
      to bottom,
      var(--primary) 0,
      var(--primary) 5px,
      transparent 5px,
      transparent 10px
    );
  }
`

const Greeting = styled(motion.div)`
  color: var(--primary);
  font-size: 2rem;
  font-weight: 500;
`

const Name = styled(motion.h1)`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Title = styled(motion.h2)`
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`

const Description = styled(motion.p)`
  max-width: 600px;
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1.1rem;
`

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`

const SocialLink = styled.a`
  color: var(--primary);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  padding: 0.8rem;
  background: var(--card-bg);
  border: 3px solid var(--primary);
  box-shadow: 4px 4px 0 rgba(99, 102, 241, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--accent);
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 rgba(99, 102, 241, 0.3);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: -2px;
    width: calc(100% + 4px);
    height: 2px;
    background: repeating-linear-gradient(
      to right,
      var(--primary) 0,
      var(--primary) 3px,
      transparent 3px,
      transparent 6px
    );
  }
`

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Greeting
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, my name is
        </Greeting>
        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Chegireddy Sreya
        </Name>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
         Aspiring SWE | CS Student @KLH | Hackathon Enthusiast | Kuchipudi Dancer & Event Manager | NCC Cadet 
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          
        </Description>
        <SocialLinks
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/chegireddy-sreya-0a120225a" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="mailto:2210030168cse@gmail.com">
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
      </HeroContent>
      <ProfileImage
        src={sreyapfp}
        alt="Profile Picture"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />
    </HeroSection>
  )
}

export default Hero 