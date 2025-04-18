import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import sreyapfp from '../assets/grass.jpg'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background: var(--background);

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 90vh;
  }
`

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 968px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 3rem;
  }
`

const TextContent = styled(motion.div)`
  flex: 1;
  max-width: 600px;

  @media (max-width: 968px) {
    max-width: 100%;
  }
`

const Greeting = styled(motion.h1)`
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 0.8rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const Name = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (max-width: 968px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

const Title = styled(motion.h3)`
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 1.2rem;
  font-weight: 600;

  @media (max-width: 968px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`

const Description = styled(motion.p)`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`

const ImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 968px) {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
`

const ProfileImage = styled.img`
  width: 100%;
  max-width: 280px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 968px) {
    max-width: 240px;
  }

  @media (max-width: 480px) {
    max-width: 220px;
  }
`

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`

const SocialLink = styled.a`
  color: var(--primary);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    color: var(--accent);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0.4rem;
  }
`

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <TextContent>
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
            <SocialLink href="https://github.com/chegisreya" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/chegireddy-sreya-0a120225a" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="mailto:2210030168cse@gmail.com">
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
        </TextContent>
        <ImageContainer>
          <ProfileImage
            src={sreyapfp}
            alt="Profile Picture"
          />
        </ImageContainer>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero 