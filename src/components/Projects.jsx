import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const ProjectCard = styled(motion.div)`
  background-color: #112240;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

const ProjectTitle = styled.h3`
  color:rgb(106, 0, 255);
  margin: 0;
  font-size: 1.2rem;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const ProjectLink = styled.a`
  color: #8892b0;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #64ffda;
  }
`

const ProjectDescription = styled.p`
  color: #8892b0;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const TechTag = styled.span`
  color: #64ffda;
  font-size: 0.8rem;
  background-color: rgba(100, 255, 218, 0.1);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
`

const projects = [
  {
    title: 'Healthchain',
    description: "A decentralized healthcare system using AI for predictive analytics and Zero-Knowledge Proofs on Aleph Zero to ensure data privacy, patient control, and secure access for medical professionals.",
    tech: ["React", "Typescript","Aleph Zero","Pinata IPFS","Tailwind CSS","Solidity"],
    github: 'https://github.com/chegisreya/HealthDapp_Azero',
    demo: 'https://health-dapp-azero.vercel.app/'
  },
  {
    title: 'Touch Be Safe',
    description: 'A personal safety device that sends emergency alerts to family, police, and hospitals. Exploring IoT and Cloud integration for real-time emergency response.',
    tech: ['IoT', 'Cloud', 'Android', 'Java'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Text-to-Speech App',
    description: 'Built a Text-to-Speech app in Python using pyttsx3 and gTTS with voice, speed, and volume control features.',
    tech: ['Python', 'pyttsx3', 'gTTS'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Edu-Tours Web App',
    description: 'Developed an educational tours web application using JavaScript and MySQL with an intuitive user interface.',
    tech: ['JavaScript', 'MySQL', 'HTML', 'CSS'],
    github: '#',
    demo: '#'
  },
  {
    title: 'MCmode',
    description: 'Developed a prompt-based app for OMI App Hackathon, focusing on user experience and functionality.',
    tech: ['Android', 'Java', 'UI/UX'],
    github: '#',
    demo: '#'
  }
]

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <ProjectsSection id="projects">
      <SectionTitle
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Projects
      </SectionTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectHeader>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectLinks>
                <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </ProjectLink>
                <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </ProjectLink>
              </ProjectLinks>
            </ProjectHeader>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectTech>
              {project.tech.map((tech, i) => (
                <TechTag key={i}>{tech}</TechTag>
              ))}
            </ProjectTech>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  )
}

export default Projects 