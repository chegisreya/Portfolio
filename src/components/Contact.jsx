import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const ContactSection = styled.section`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ContactInfo = styled(motion.div)`
  h3 {
    color:rgb(134, 14, 255);
    margin-bottom: 2rem;
  }
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color:rgb(0, 0, 0);
`

const ContactIcon = styled.div`
  color:rgb(0, 0, 0);
  font-size: 1.2rem;
`

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color:rgb(87, 0, 141);
  font-size: 2rem;
`

const Input = styled.input`
  padding: 0.8rem;
  background-color: #112240;
  border: 1px solid #233554;
  border-radius: 4px;
  color:rgb(251, 251, 251);
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color:rgb(0, 0, 0);
  }
`

const TextArea = styled.textarea`
  padding: 0.8rem;
  background-color: #112240;
  border: 1px solid #233554;
  border-radius: 4px;
  color: #ccd6f6;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color:rgb(0, 0, 0);
  }
`

const SubmitButton = styled.button`
  background-color: transparent;
  color:rgb(0, 0, 0);
  border: 5px solid rgb(0, 0, 0);
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
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