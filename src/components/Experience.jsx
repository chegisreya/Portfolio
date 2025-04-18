import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase } from 'react-icons/fa'

const ExperienceSection = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  color:rgb(59, 0, 137);
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100px;
    height: 2px;
    background: var(--gradient);
  }
`

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 3rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background-color:rgb(0, 0, 0);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color:rgb(0, 0, 0);
    transform: translateX(-5px);
  }
`

const ExperienceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

const CompanyIcon = styled.div`
  color:rgb(0, 0, 0);
  font-size: 1.5rem;
`

const CompanyInfo = styled.div`
  h3 {
    color:rgb(103, 0, 144);
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    color:rgb(0, 0, 0);
    margin: 0.2rem 0;
    font-size: 0.9rem;
  }
`

const ExperienceDescription = styled.ul`
  color:rgb(0, 1, 3);
  margin: 0;
  padding-left: 1.5rem;
  line-height: 1.6;

  li {
    margin-bottom: 0.5rem;
  }
`

const experiences = [
  {
    company: 'Google Mobile App Developer',
    role: 'AICTE Virtual Internship',
    period: 'Jun 2023 - Aug 2023',
    description: [
      'Learned Android app development basics using Java and Android Studio',
      'Built mobile apps with UI components and Firebase integration',
      'Completed practical assignments and a final mini-project'
    ]
  },
  {
    company: 'REWT Foundation',
    role: 'Virtual Internship',
    period: 'Jul 2023 - Aug 2023',
    description: [
      'Managed fundraising campaigns and donor outreach',
      'Used data analysis to track fundraising trends and improve engagement',
      'Worked in a team-based environment to organize and execute HR operations'
    ]
  },
  {
    company: 'In Amigos Foundation',
    role: 'IAF Internship (NGO)',
    period: 'May 2023',
    description: [
      'Assisted in HR coordination and digital outreach',
      'Analyzed survey responses and improved engagement strategies'
    ]
  }
]

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <ExperienceSection id="experience">
      <SectionTitle
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Experience
      </SectionTitle>
      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ExperienceHeader>
              <CompanyIcon>
                <FaBriefcase />
              </CompanyIcon>
              <CompanyInfo>
                <h3>{exp.company}</h3>
                <p>{exp.role}</p>
                <p>{exp.period}</p>
              </CompanyInfo>
            </ExperienceHeader>
            <ExperienceDescription>
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ExperienceDescription>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceSection>
  )
}

export default Experience 