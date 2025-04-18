import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaMobile, FaDatabase, FaTools, FaPaintBrush, FaBusinessTime, FaUsers, FaGlobe, FaCloud } from 'react-icons/fa'

const SkillsSection = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`

const SkillCategory = styled(motion.div)`
  background-color: var(--card-bg);
  border: 4px solid var(--primary);
  padding: 1.5rem;
  box-shadow: 8px 8px 0 rgba(99, 102, 241, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-4px, -4px);
    box-shadow: 12px 12px 0 rgba(99, 102, 241, 0.3);
  }
`

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--primary);
  padding-bottom: 1rem;
`

const CategoryIcon = styled.div`
  color: var(--primary);
  font-size: 1.5rem;
  flex-shrink: 0;
`

const CategoryTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  color: var(--primary);
  margin: 0;
  font-size: 1 rem;
  line-height: 1.4;
  word-break: break-word;
`

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const SkillItem = styled.li`
  font-family: 'VT323', monospace;
  color: var(--text-secondary);
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '▸';
    color: var(--primary);
    flex-shrink: 0;
  }
`

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <FaCode />,
    skills: ['C', 'Java', 'Python', 'Kotlin', 'JavaScript']
  },
  {
    title: 'Mobile & OS',
    icon: <FaMobile />,
    skills: ['Android Development', 'Multithreading', 'IPC', 'OS Fundamentals']
  },
  {
    title: 'Development Tools',
    icon: <FaTools />,
    skills: ['Git', 'Gerrit', 'Android Studio', 'VS Code', 'MySQL']
  },
  {
    title: 'Web Development',
    icon: <FaGlobe />,
    skills: ['HTML', 'CSS', 'JavaScript', 'MERN Stack', 'Django']
  },
  {
    title: 'UI/UX Design',
    icon: <FaPaintBrush />,
    skills: ['Figma', 'Canva', 'WordPress']
  },
  {
    title: 'Business & Management',
    icon: <FaBusinessTime />,
    skills: ['Business Planning', 'Fundraising', 'HR', 'Project Management']
  },
  {
    title: 'Cloud',
    icon: <FaCloud />,
    skills: ['AWS', 'Azure', 'GCP']
  },
  {
    title: 'Soft Skills',
    icon: <FaUsers />,
    skills: ['Leadership', 'Teamwork', 'Communication', 'Time Management', 'Research']
  }
]

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <SkillsSection id="skills">
      <SectionTitle
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Skills
      </SectionTitle>
      <SkillsGrid>
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CategoryHeader>
              <CategoryIcon>{category.icon}</CategoryIcon>
              <CategoryTitle>{category.title}</CategoryTitle>
            </CategoryHeader>
            <SkillsList>
              {category.skills.map((skill, i) => (
                <SkillItem key={i}>{skill}</SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsSection>
  )
}

export default Skills 