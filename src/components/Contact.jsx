import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const ContactSection = styled.section`
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: var(--background);

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
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

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 968px) {
    order: 2;
  }
`

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--card-bg);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 1rem;
  }
`

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: var(--primary);
  background: rgba(99, 102, 241, 0.1);
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0.8rem;
  }
`

const ContactText = styled.div`
  h3 {
    font-size: 1.2rem;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-secondary);
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 968px) {
    order: 1;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 500;
`

const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 2px solid rgba(99, 102, 241, 0.2);
  border-radius: 8px;
  font-size: 1rem;
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  @media (max-width: 480px) {
    padding: 0.7rem 0.9rem;
    font-size: 0.9rem;
  }
`

const TextArea = styled.textarea`
  padding: 0.8rem 1rem;
  border: 2px solid rgba(99, 102, 241, 0.2);
  border-radius: 8px;
  font-size: 1rem;
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.8);
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  @media (max-width: 480px) {
    padding: 0.7rem 0.9rem;
    font-size: 0.9rem;
    min-height: 120px;
  }
`

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: var(--gradient);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    width: 100%;
  }
`

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
  }

  return (
    <ContactSection id="contact">
      <SectionTitle
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Contact
      </SectionTitle>
      <ContactContent>
        <ContactInfo
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h3>Get In Touch</h3>
          <ContactItem>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <span>2210030168cse@gmail.com</span>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <span>Hyderabad, Telangana, India</span>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <FaPhone />
            </ContactIcon>
            <span>+91 9381374568</span>
          </ContactItem>
        </ContactInfo>
        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea id="message" name="message" required />
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactSection>
  )
}

export default Contact 